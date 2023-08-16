#!/usr/bin/env python3

import aws_cdk as cdk
from infra.certificate_stack import CertificateStack
from infra.backend_stack import BackendStack
from infra.infra_stack import InfraStack


app = cdk.App()

# Deploy CertificateStack
CertificateStack(app, "cloudresume-certificate", env=cdk.Environment(region="us-east-1"))

# Deploy BackendStack
BackendStack(app, "cloudresume-backend", env=cdk.Environment(region="ap-southeast-1"))

# Deploy InfraStack (Frontend)
InfraStack(app, "cloudresume-infra", env=cdk.Environment(region="ap-southeast-1"))

app.synth()
