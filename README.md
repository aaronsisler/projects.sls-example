# Simple HTTP Endpoint Example

This example demonstrates how to setup a simple HTTP GET endpoint. Once you ping it, it will reply with the current time. While the internal function is name `isAlive` the HTTP endpoint is exposed as `johnny5`.

## Use Cases

- Wrapping an existing internal or external endpoint/service

## Invoke the function locally

```bash
serverless invoke local --function isAlive
```

## Deploy

In order to deploy the endpoint, simply run:

```bash
serverless deploy
```

The expected result should be similar to:

```bash
Serverless: Packaging service…
Serverless: Uploading CloudFormation file to S3…
Serverless: Uploading service .zip file to S3…
Serverless: Updating Stack…
Serverless: Checking Stack update progress…
...........................
Serverless: Stack update finished…

Service Information
service: serverless-simple-http-endpoint
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  GET - https://2e16njizla.execute-api.us-east-1.amazonaws.com/dev/johnny5
functions:
  serverless-simple-http-endpoint-dev-isAlive: arn:aws:lambda:us-east-1:488110005556:function:serverless-simple-http-endpoint-dev-isAlive
```

## Usage

You can now invoke the Lambda directly and even see the resulting log via

```bash
serverless invoke --function isAlive --log
```

or as send an HTTP request directly to the endpoint:

```bash
https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/johnny5
```
