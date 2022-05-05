import * as React from 'react';
import { useState } from 'react';
import { deleteNote } from '../utils/services';
import PopupDialog from './popup_dialog';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NoteCard(props) {
  const noteDeletedAlertText = "Note deleted successfully !"
  const noteDeleteErrorAlertText = "Got an error, while deleting the note !"

  const [noteDeletedDialogOpen, setNoteDeletedDialogOpen] = useState(false)
  const [noteDeleteErrorDialogOpen, setNoteDeleteErrorDialogOpen] = useState(false)

  const handleDeleteNote = async (e)=>{
    e.preventDefault()
    const res = await deleteNote(props.note.username.S, props.note.note_id.S)
    
    if (res.status === 200){
      setNoteDeletedDialogOpen(true)
    }
    else {
      console.log(res)
      setNoteDeleteErrorDialogOpen(true)
    }
  }
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.note.title.S}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.note.content.S}
        </Typography>
        <PopupDialog dialogOpen={noteDeletedDialogOpen} closeDialogBox={()=>setNoteDeletedDialogOpen(false)} text={noteDeletedAlertText} />
        <PopupDialog dialogOpen={noteDeleteErrorDialogOpen} closeDialogBox={()=>setNoteDeleteErrorDialogOpen(false)} text={noteDeleteErrorAlertText} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDeleteNote}>Delete</Button>
      </CardActions>
    </Card>
  );
}
