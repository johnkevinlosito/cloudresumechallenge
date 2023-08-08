
from datetime import datetime
from constructs import Construct
from aws_cdk import (
    RemovalPolicy,
    Stack,
    CfnOutput,
    aws_s3 as s3,
    aws_cloudfront as cloudfront,
    aws_cloudfront_origins as cloudfront_origins,
    aws_certificatemanager as acm,
    custom_resources as cr,
)


class InfraStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)


        # Create an S3 bucket for your static site
        resume_bucket = s3.Bucket(
            self,
            "cloudresume-bucket",
            block_public_access=s3.BlockPublicAccess.BLOCK_ALL,
            removal_policy=RemovalPolicy.DESTROY,
            auto_delete_objects=True,
        )
        
        # Get certificate arn from parameter store in us-east-1 using custom resource
        certificate_arn = cr.AwsCustomResource(
            self,
            "cloudresume-certificate-arn",
            on_update=cr.AwsSdkCall(
                service="SSM",
                action="getParameter",
                parameters={
                    "Name": "resume-arn"
                },
                region="us-east-1",
                physical_resource_id=cr.PhysicalResourceId.of(str(datetime.now()))
            ),
            policy=cr.AwsCustomResourcePolicy.from_sdk_calls(resources=cr.AwsCustomResourcePolicy.ANY_RESOURCE),
        )



        # Create a cloudfront distribution with certificate from ssm

        cloudfront_distribution = cloudfront.Distribution(
            self,
            "cloudresume-cloudfront-distribution",
            default_behavior=cloudfront.BehaviorOptions(
                origin=cloudfront_origins.S3Origin(resume_bucket),
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            ),
            default_root_object="index.html",
            domain_names=["resume.johnkevinlosito.com"],
            certificate=acm.Certificate.from_certificate_arn(
                self,
                "cloudresume-certificate",
                certificate_arn.get_response_field("Parameter.Value"),
            )
        )
        

        # Add Stack outputs
        
        CfnOutput(self, "CloudresumeBucketName", value=resume_bucket.bucket_name)
        CfnOutput(self, "CloudresumeCloudfrontDistributionId", value=cloudfront_distribution.distribution_id)
        CfnOutput(self, "CloudresumeCloudfrontDomainName", value=cloudfront_distribution.domain_name)