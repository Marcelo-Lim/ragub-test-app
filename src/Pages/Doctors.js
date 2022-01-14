import React,{useState} from 'react';
import DoctorTable from '../DoctorsComponents/DoctorsTable/DoctorTable'
import { Container,Paper,Grid,TextField,Icon,Checkbox,Select,MenuItem ,Button,
Dialog,DialogTitle, Typography,} from '@material-ui/core';
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';


const Doctor = ()=>{
    const [open,setOpen] = useState(false);
    const handleClose = () =>{
        setOpen(false);
    }
    const handleClickOpen =()=>{
        setOpen(true);
        
    }
    return(
        <div>
        <h1>Doctor</h1>
        <Button onClick={handleClickOpen}>New Doctor</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Container component ="main" maxWidth="lg"> 

        <DialogTitle id="form-dialog-title"> Doctor </DialogTitle>

        </Container>
        </Dialog>
        <DoctorTable/>
        </div>
    )
}
export default Doctor