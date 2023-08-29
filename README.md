# cloudresumechallenge

This project showcases the deployment of a static website, a visitor counter API, and continuous integration/continuous deployment (CI/CD) using AWS services, infrastructure as code(AWS CDK), and GitHub Actions. This is the output for [The Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/) by [Forrest Brazeal](https://forrestbrazeal.com/).

The Cloud Resume Challenge project demonstrates the following features:

- Deployment of a static website using AWS S3 and CloudFront.
- Implementation of a visitor counter API using AWS Lambda, API Gateway, and DynamoDB.
- Infrastructure as Code (IaC) using AWS CDK (Cloud Development Kit).
- CI/CD setup using GitHub Actions for automating deployment and testing.
- End-to-end testing using Cypress

The project includes the following components:

- `backend`: Contains the Lambda function code for the visitor counter API.
- `frontend`: Contains the static website files.
- `infra`: Contains the AWS CDK code for deploying infrastructure.

Detailed usage instructions can be found in the respective directories.

## Todos and Future Improvements

This project serves as a starting point with potential areas for improvement:

- [ ] implement account-level throttling and rate limiting on the API.
- [ ] Add additional tests.
- [ ] Add monitoring and logging for better visibility into application behavior.
- [ ] Replace CDK with Terraform
