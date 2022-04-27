import express from 'express'
import AWS from 'aws-sdk'

AWS.config.update({region: 'us-east-1' })
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const router = express.Router()

router.get('/note/:id', (req, res)=>{
    const noteId = req.params.id
    var params = {
        Key: {
            "datetime": {
            S: noteId
            }
        }, 
        TableName: process.env.TABLE_NAME,
    };

    ddb.getItem(params, function(err, data) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(data)
        }
    });
})

export default router