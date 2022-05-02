import express from 'express'
import AWS from 'aws-sdk'

AWS.config.update({region: 'us-east-1' })
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const router = express.Router()

router.post('/all-notes', async (req, res)=>{
    const username = req.body.username
    var params = {
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: 'username = :username',
        ExpressionAttributeValues: {
            ':username': {
                S: username
            }
        }
    };

    ddb.query(params, function(err, data) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(data)
        }
    });
})

export default router