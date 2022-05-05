import express from 'express'
import AWS from 'aws-sdk'

AWS.config.update({region: 'us-east-1' })
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const router = express.Router()

router.delete('/delete_note', (req, res)=>{
    
    const note_id = req.body.note_id
    const username = req.body.username
    
    var params = {
        Key: {
            "username": {
                S: username
            },
            "note_id": {
                S: note_id
            }
        }, 
        TableName: process.env.TABLE_NAME,
    };
    
    ddb.deleteItem(params, function(err, data) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(data)
        }
    });
})

export default router