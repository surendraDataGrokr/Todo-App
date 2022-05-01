import * as React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button } from '@mui/material';


export default function PopupDialog(props){
    return(
        <Dialog
        open={props.dialogOpen}
        onClose={props.closeDialogBox}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Alert !!!"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeDialogBox}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}