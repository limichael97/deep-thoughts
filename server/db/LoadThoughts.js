const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
  region: 'us-east-2',
});
const dynamodb = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
});