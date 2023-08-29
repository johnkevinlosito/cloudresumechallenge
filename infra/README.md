# Infra (CDK)

This directory contains the AWS CDK code for deploying infrastructure.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Usage

This project is set up like a standard Python project. The initialization process also creates a virtualenv within this project, stored under the .venv directory. To create the virtualenv
it assumes that there is a `python3` executable in your path with access to the `venv` package.
If for any reason the automatic creation of the virtualenv fails, you can create the virtualenv
manually once the init process completes.

- Navigate to the `infra` directory.

```bash
cd infra
```

- To manually create a virtualenv on MacOS and Linux:

```bash
python3 -m venv .venv
```

- After the init process completes and the virtualenv is created, you can use the following step to activate your virtualenv.

```bash
source .venv/bin/activate
```

If you are a Windows platform, you would activate the virtualenv like this:

```powershell
% .venv\Scripts\activate.bat
```

Once the virtualenv is activated, you can install the required dependencies.

```bash
pip install -r requirements.txt
```

At this point you can now synthesize the CloudFormation template for this code.

```bash
cdk synth
```

You can now begin exploring the source code.

To add additional dependencies, for example other CDK libraries, just add to
your requirements.txt file and rerun the `pip install -r requirements.txt`
command.

## Useful commands

- `cdk ls` list all stacks in the app
- `cdk synth` emits the synthesized CloudFormation template
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk docs` open CDK documentation
