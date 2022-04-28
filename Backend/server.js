import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

// app config
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// DB config

//models

// routers
import CreateNote from "./routes/create_note.js"
import ReadNote from "./routes/read_note.js"
import FetchNotes from "./routes/fetch_notes.js"

app.use(CreateNote)
app.use(ReadNote)
app.use(FetchNotes)

// listner
const port = process.env.PORT || 8001;
app.listen(port, ()=>{
    console.log('Your server is running on port ' + port)
})