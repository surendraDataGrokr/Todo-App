import axios from "axios";
import config from '../config.json'

const createNote = async (title, noteContent, username)=>{
    try {
        const response = await axios.post(config.REACT_APP_BASE_URL,{
            'title': title,
            'content': noteContent,
            'username': username
        })
        return response
    }
    catch (err){
        return err
    }
}

const deleteNote = async (username, note_id)=>{
    try {
        const response = await axios.delete(config.REACT_APP_BASE_URL+'delete_note', {
            data: {
                "username": username,
                "note_id": note_id
            }
        })
    
        return response
    }
    catch (err){
        return err
    }
    
}

const fetchAllNotes = async (username)=>{
    const response = await axios.post(config.REACT_APP_BASE_URL+'all-notes', {
        username: username
    })
    console.log(response.data.Items)
    
    return response 
}

export {
    createNote,
    deleteNote,
    fetchAllNotes
}