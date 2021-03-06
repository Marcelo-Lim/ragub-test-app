import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../DoctorsComponents/Home.css'
import moment from 'moment';
import { useDispatch } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import { Typography, Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, TextField} from "@material-ui/core";
    const initialState={
        concerns:'',
        concernType:'',
        dateAndTime: new Date()
    }
const ProfileDoctor = () =>{
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [current,setCurrent] = useState(false);
   const classes = useStyles;
  
    const [appointments,setAppointments] = useState([])
    
    const [open,setOpen] = useState(false);
    const [values,setValues]=useState(initialState);
    const [cancelOpen,setCancelOpen] = useState(false);
    const handleCancelOpen = (appointment) =>{
        setCancelOpen(true);
        setCurrent(appointment);
    
    }
    const handleCancelClose = () =>{
        setCancelOpen(false);
    }
    const handleOpen = (appointment) =>{
        setOpen(true);
        setCurrent(appointment)
    }
    const handleClose= () =>{
        setOpen(false);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('ewan ko na ')
    //    dispatch(updateAppointment(current._id(...value)))
   
    }
    useEffect(function () {
        fetch("https://sdmc-clinic.herokuapp.com/appointment/appointmentsss")
        .then(resp=>resp.json())
        .then(resp=>setAppointments(resp))
    
    })

    return(
        <div class="d-flex flex-column justify-content-center align-items-center">
            <Paper className={classes.paper + " col-11 mr-0 mt-5"} elevation={6}>
                <Typography className={classes.typo1}>Welcome {user?.result.lastName}, {user?.result.firstName}</Typography>
                <Typography className={classes.typo2}>Contact number: {user?.result.contactNumber}</Typography>
                <Typography className={classes.typo2}>Email address: {user?.result.email}</Typography>
            </Paper>
            <Paper className={classes.paper2 + " col-11 mr-0 mt-5"} variant="outlined" elevation={6}>
                <Typography className={classes.typo3}>My Appointments</Typography>
                
                    <Grid container>

            {appointments.map((appointment,index) => (
                  

                      <Grid item key={index} xs={12} >
                        {appointment.appointmentStatus === 'Approved' ?
                    (
                  
                    //    return(
                          
                    <Card className={classes.card1 }>
                        <CardContent>
                        <Typography className={classes.typo4} >{appointment.concerns}</Typography>
                        <Typography className={classes.typo4} >{appointment.concernType}</Typography>
                            <Typography className={classes.typo4}>{moment(appointment.dateAndTime).format('D MMM YYYY')}</Typography>
                            <Typography className={classes.typo4} >{moment(appointment.dateAndTime).format('h:mm a')}</Typography>
                            <Typography className={classes.typo4}>{appointment.appointmentStatus}</Typography>
                            <Typography className={classes.typoIcon}>
                            {appointment.dateAndTime === new Date().toISOString() ? <Typography>Green</Typography>:<Typography>Red</Typography>}
                             <Button  variant="contained" >See Details</Button>
                                
                            </Typography>           

                    
                          
                    
                   


                  
                    </CardContent>
                </Card>
                        
                        
                    //    )
                    ):  null}
                    {/* {!appointment.length?<Typography className={classes.typo4} >No record</Typography>: null } */}
            </Grid>
           

                   

            ) )}
            
        {!appointments.length ?<Typography className={classes.typo4} >No record</Typography>: null }
            </Grid>
                        
                    
                
            </Paper>




        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    
    paper: {
        
        textAlign: "left"
    },

    typo1: {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "50px",
        paddingLeft: "20px",
        fontFamily: "Montserrat",
    },

    typo2: {
        fontSize: "15px",
        fontWeight: "100",
        marginTop: "5px",
        paddingLeft: "20px",
        fontFamily: "Montserrat",
    },

    paper2: {
        
        padding: "15px",
        textAlign: "center",
        height: "100%",
        
    },

    typo3: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
        marginBottom: "50px"
    },

    container: {
        marginBottom: "10px"
    },

    card: {
        textAlign: "center"
    },

    typoIcon: {
        marginTop: "20px"
    },

    typo4: {
        fontSize: "15px",
        fontWeight: "100",
        marginTop: "5px",
        fontFamily: "Montserrat",
    },

    card1: {
        width: "100%",
        height: "250px",
        marginBottom: "20px",
        marginLeft: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto"
    },
    
    grid: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },

    dialog: {
        height: "100%",
    }
}))
export default ProfileDoctor