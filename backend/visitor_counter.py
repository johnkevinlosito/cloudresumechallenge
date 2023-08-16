# Visitor counter to update the number of visitors in a dynamodb database
import os
import boto3
import json

# Create a DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])

def handler(event, context):

    # Update the item to the table
    response =table.update_item(
        Key={'id': 'resume'},
        UpdateExpression='ADD visitor_count :inc',
        ExpressionAttributeValues={':inc': 1},
        ReturnValues='UPDATED_NEW'
    )

    # Return the visitor count
    response_object = {
        'visitor_count': int(response['Attributes']['visitor_count'])
    }
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(response_object)
    }
