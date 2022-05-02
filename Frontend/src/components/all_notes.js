import * as React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../config.json'
import { Grid } from '@mui/material'
import NoteCard from './note_card'

export default function AllNotes(){
    const [notes, setNotes] = useState([])

    useEffect( ()=>{
        // fetch all notes for the username
        async function fetchAllNotes(){
            const response = await axios.post(config.REACT_APP_BASE_URL+'all-notes', {username: 'surendra_kumar'})
            console.log(response.data.Items)
            if( response.status === 200){
                setNotes(response.data.Items)
            }
        }
        fetchAllNotes()
    }, [])
    return(
        <Grid container>
            {
                notes.map((note, i)=>{
                    return (<NoteCard key={i} note={note} />)
                })
            }
        </Grid>
    )
}