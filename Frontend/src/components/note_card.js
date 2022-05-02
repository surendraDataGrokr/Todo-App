import * as React from 'react';
import axios from 'axios'
import config from '../config.json'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NoteCard(props) {
  const deleteNote = async (e)=>{
    e.preventDefault()
    const response = await axios.delete(config.REACT_APP_BASE_URL+'delete_note', {
      "username": props.note.username.S,
      "note_id": props.note.note_id.S
    })
    console.log(props.note.note_id.S)
    console.log(response)
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
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteNote}>Delete</Button>
      </CardActions>
    </Card>
  );
}
