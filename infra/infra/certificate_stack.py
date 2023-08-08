from constructs import Construct
from aws_cdk import (
    Stack,
    CfnOutput,
    aws_certificatemanager as acm,
    aws_ssm as ssm, 
)


class CertificateStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # create a certificate and store the ARN in SSM
        certificate = acm.Certificate(
            self,
            "ResumeCertificate",
            domain_name="resume.johnkevinlosito.com",
            validation=acm.CertificateValidation.from_dns(),
        )
        ssm.StringParameter(
            self, "ResumeCertificateARN",
            parameter_name="resume-arn",
            string_value=certificate.certificate_arn,
        )

        # Output the certificate ARN
        CfnOutput(self, "CertificateARN", value=certificate.certificate_arn)