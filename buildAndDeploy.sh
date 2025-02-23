#!/bin/bash
set -e

npm run build --prefix reactapp
cd aws
sam build && sam deploy --no-confirm-changeset
bucketname=$(aws cloudformation describe-stacks --stack-name portfolio-infrastructure --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" --output text)
aws s3 sync ../reactapp/build s3://$bucketname
aws cloudfront create-invalidation  --distribution-id $PORT_CLOUNDFRONT_ID --paths "/*"
echo "Deployment completed"