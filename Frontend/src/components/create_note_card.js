import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'
import config from '../config.json'
import { createNote } from '../utils/services';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

import PopupDialog from './popup_dialog';

export default function CreateNoteCard() {
    const requiredFieldsAlertText = "Todo note with empty title or content can't be stored. Please provide required fields. Thank You !"
    
    const [noteCreatedAlertText, setNoteCreatedAlertText] = useState('')
    const [title, setTitle] = useState('')
    const [noteContent, setNoteContent] = useState('')
    const [requiredFieldsAlertTextDialogOpen, setRequiredFieldsAlertTextDialogOpen] = useState(false)
    const [noteCreatedAlertTextDialogOpen, setNoteCreatedAlertTextDialogOpen] = useState(false)

    const changeTitle = (event)=>{
        setTitle(event.target.value)
    }
    const changeNoteContent = (event)=>{
        setNoteContent(event.target.value)
    }
    const uploadNote = async (e)=>{
        e.preventDefault()
        if( title.length === 0 || noteContent.length === 0){
            setRequiredFieldsAlertTextDialogOpen(true)
            return
        }
        const username = config.REACT_APP_USERNAME
        const res = await createNote(title, noteContent, username)
        
        if(res.status === 200){
            setNoteCreatedAlertText(res.data)
        }
        else{
            setNoteCreatedAlertText('Got an Error while saving your note.  :(')
            console.log(res)
        }
        setNoteCreatedAlertTextDialogOpen(true)
        setTitle('')
        setNoteContent('')
    }

    return (
        <div className='create-note-card'>
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <div className='create-note-card-content'>
                            <Typography gutterBottom variant="h5" component="div">
                                Create A Note
                            </Typography>
                            <TextField
                            id="outlined-title-input"
                            label="Title"
                            value={title}
                            inputProps={{ maxLength: 20 }}
                            onChange={changeTitle}
                            />
                            <TextField
                            id="outlined-content-input"
                            label="Note Content"
                            value={noteContent}
                            multiline
                            maxRows={10}
                            inputProps={{ maxLength: 200 }}
                            onChange={changeNoteContent}
                            />
                        </div>
                    </Box>
                    <PopupDialog dialogOpen={requiredFieldsAlertTextDialogOpen} closeDialogBox={()=>setRequiredFieldsAlertTextDialogOpen(false)} text={requiredFieldsAlertText} />
                    <PopupDialog dialogOpen={noteCreatedAlertTextDialogOpen} closeDialogBox={()=>setNoteCreatedAlertTextDialogOpen(false)} text={noteCreatedAlertText} />
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={uploadNote}>Upload</Button>
                </CardActions>
            </Card>
        </div>
    )
}