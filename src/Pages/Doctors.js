import React,{useState} from 'react';
import DoctorTable from '../DoctorsComponents/DoctorsTable/DoctorTable'
import { Container,Paper,Grid,TextField,Icon,Checkbox,Select,MenuItem ,Button,
Dialog,DialogTitle, Typography, makeStyles,} from '@material-ui/core';
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { COLORS } from '../Styles/colors';
import './Doctors.css';

const Doctor = ()=>{
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const handleClose = () =>{
        setOpen(false);
    }
    const handleClickOpen =()=>{
        setOpen(true);
        
    }
    return(
        <div className="container-doctor">
        <h1 className={classes.h1}>Doctors</h1>
        <Button className={classes.newdoctorbtn} onClick={handleClickOpen}>New Doctor</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Container component ="main" maxWidth="lg"> 

        <DialogTitle id="form-dialog-title"> Doctor </DialogTitle>

        </Container>
        </Dialog>
        <DoctorTable/>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({

    h1: {
        marginTop: "25px",
        marginBottom: "25px",
        fontSize: "50px",
        fontWeight: "bold",
    },

    newdoctorbtn: {
        marginBottom: "35px",
        backgroundColor: COLORS.BLUE,
        color: "white",
    }

}));
export default Doctor