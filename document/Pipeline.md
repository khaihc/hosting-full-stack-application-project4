# Udagram Dependencies
    The developer commits code, which triggers a new pipeline in CircleCI.
    The first job of the pipeline is to build the project:
    Prepare the environment, including the Node.js runtime and environment variables, and install the required packages for both the frontend and backend.
    Run linting to ensure coding conventions are followed.
    Build all repositories (API and frontend).
    After the build process, the pipeline will pause and wait for approval.
    Finally, the application will be deployed to AWS:
    Prepare the necessary environment, including setting environment variables, installing the Node.js runtime on the EC2 instance, and deploying the application.

## Pipeline flow
![Pipeline](/document/pipeline.png)