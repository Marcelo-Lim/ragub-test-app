import React,{useEffect,useState} from 'react';
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,
    DialogTitle, TextField,MenuItem} from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import ApprovedAppointments from './approvedAppointments';
import PendingAppointments from './pendingAppointment';
import CancelledAppointments from './cancelAppointments';



const options = ['Pending Appointments','Cancelled Appointments','Approved Appointment',
'Complete Appointment','Decline Appointment'];
const Appointments =() =>{
    const classes = useStyles()
   
    return(
        <Container component="main" maxWidth="lg">
            <Paper className={classes.paper}>
                <Paper className={classes.paper1} elevation={0}>
                    <Typography component="h1" variant="h5" className={classes.appointments}>Appointment Report</Typography>

                   
                </Paper>
                      <Typography component="h1" variant="h5" className={classes.appointmentdetails}> Pending Appointments</Typography>
                      <PendingAppointments/>
                      <Paper className={classes.paper1} elevation={0}>
                        <Typography component="h1" variant="h5" className={classes.appointmentdetails}> Approved Appointments</Typography>
                     </Paper>
                      <ApprovedAppointments/>
                      <Paper className={classes.paper1} elevation={0}>
                        <Typography component="h1" variant="h5" className={classes.appointmentdetails}>Cancelled Appointments</Typography>
                     </Paper>
                         <CancelledAppointments/>
            
                
            </Paper>
        </Container>
    )
}
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(1),
    
      
    },
    paper1:{
        marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    paper2:{
     marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    googleButton: {
      marginBottom: theme.spacing(2),
    },

    appointments: {
      fontSize: "35px",
      fontWeight: "bold",
    },

    appointmentdetails: {
      fontSize: "25px",
      fontWeight: "bold",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    }

  }));
export default Appointments;