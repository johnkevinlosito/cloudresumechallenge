# BackendStack

from aws_cdk import (
    RemovalPolicy,
    Stack,
    CfnOutput,
    aws_dynamodb as dynamodb,
    aws_lambda as _lambda,
    aws_apigateway as apigw,
)
from constructs import Construct

class BackendStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # Create dynamodb with on-demand pricing for VisitorCounter
        table = dynamodb.Table(
            self,
            "VisitorCounterTable",
            partition_key=dynamodb.Attribute(
                name="id",
                type=dynamodb.AttributeType.STRING
            ),
            billing_mode=dynamodb.BillingMode.PAY_PER_REQUEST,
            removal_policy=RemovalPolicy.DESTROY
        )

        # Create lamba function
        handler = _lambda.Function(
            self,
            "VisitorCounterHandler",
            runtime=_lambda.Runtime.PYTHON_3_9,
            code=_lambda.Code.from_asset("../backend"),
            handler="visitor_counter.handler",
            environment={
                "TABLE_NAME": table.table_name
                }
            )
        
        # Add permissions to lambda function
        table.grant_read_write_data(handler)

        # Create API Gateway
        api = apigw.RestApi(
            self,
            "VisitorCounterAPI",
            rest_api_name="VisitorCounterAPI",
            default_cors_preflight_options={
                "allow_origins": apigw.Cors.ALL_ORIGINS,
                "allow_methods": ['POST'],
            }
        )

        visitor_count_resource = api.root.add_resource("visitor-count")

        integration_response = apigw.IntegrationResponse(
                status_code="200",
            )

        response_model = api.add_model("ResponseModel",
                                       content_type="application/json",
                                       schema= apigw.JsonSchema(
                                           type=apigw.JsonSchemaType.OBJECT,
                                           properties={
                                               "visitor_count": apigw.JsonSchema(
                                                   type=apigw.JsonSchemaType.INTEGER
                                               )
                                           }
                                       )
                                    )

        visitor_count_resource.add_method("POST", 
                                            apigw.LambdaIntegration(handler, proxy=False, integration_responses=[integration_response]),
                                            method_responses=[
                                                apigw.MethodResponse(
                                                    status_code="200",
                                                    response_models={
                                                        "application/json": response_model
                                                    }
                                                )
                                            ]
                                        ) 

        # Output API Gateway URL
        CfnOutput(self, "APIURL", value=api.url)
        CfnOutput(self, "VisitorCounterAPIURL", value=api.url_for_path("/visitor-count"))

        # Output DynamoDB Table Name
        CfnOutput(self, "TableName", value=table.table_name)

