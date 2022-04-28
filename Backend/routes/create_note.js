import express from 'express'
import AWS from 'aws-sdk'

AWS.config.update({region: 'us-east-1' })
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const router = express.Router()

router.post('/', async (req, res)=>{
    const body = req.body
    var params = {
        Item: {
            "title": {
                S: body.title
            },
            "content": {
                S: body.content
            },
            "username": {
                S: body.username
            },
            "note_id": {
                S: new Date().valueOf().toString()
            },
            "datetime": {
                S: new Date().toDateString()
            }
        }, 
        TableName: process.env.TABLE_NAME,
    };

    ddb.putItem(params, function(err, data) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send('Note created successfully.')
        }
    });
})

export default router