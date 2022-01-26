import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../MaterialTable/MaterialTableIcons';
import CustomRow from './index'
import { useDispatch } from "react-redux";
import moment from 'moment';
import { Typography, makeStyles,Button,
    Paper, Container, Grid,IconButton,InputAdornment, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,
    DialogTitle, TextField,FormControlLabel,MenuItem} from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import {doctorForAppointment} from '../Connections/Action/appointments'

const PendingAppointments =() =>{
    const classes = useStyles()
    const dispatch = useDispatch()
    const [data,setData] = useState([]);
    const [openSendEmail,setOpenSendEmail] = useState(false)
    const [openAnother, setOpenAnother]= useState(false);
    const [openPendingStats, setOpenPendingStats] = useState(false)
    const [drops,setDrops] = useState([]);
    const [filteredData,setFilteredData]=useState(data)
    const [openPreviewDetails, setOpenPreviewDetails] = useState(false)
    const initialState={
        doctorsName:''
    }
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    
   const [values,setValues] = useState(initialState)
    const [open,setOpen] = useState(false);

    const columns=[ 
        {
            title: "Patient Name", field: "firstName"
        },
        {
            title: "Patient Name", field: "lastName"
        },
        // {
        //     title: "Patient Name", field: "email"
        // },
       
        {
            title: "Date", field: "dateAndTime", type: 'date'
        },
        {
            title: "Time", field: "dateAndTime", type: 'time'
        },
        {
            title: "Status", field:"appointmentStatus"
        },
        {
            title: "Doctor's Name", field:"doctorsName"
        },
        {
            title: "Doctor's Approval", field:"doctorsStatus"
        },
        
        {
            title:"Action"
        }
    ]
    useEffect(()=>{
        fetch("https://sdmc-clinic.herokuapp.com/appointment/appointmentsss")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })
    useEffect(()=>{
        setFilteredData(data.filter(d=>d.appointmentStatus === 'Pending' ));
    },[data])

    useEffect(()=>{
        fetch("https://sdmc-clinic.herokuapp.com/doctor/doctors/data")
        .then(resp => resp.json())
        .then(resp => setDrops(resp))
    })
    const handleOpen=(data)=>{
        // if(data.doctorsName === ''){
            setOpen(true);
            setValues(data)
            console.log(data)
          
        // }
        // else{
        //     setOpenAnother(true);
        //     setValues(data)
        //     console.log(data)
        // }
       
    }
    const handleClose=()=>{
        setOpen(false);
        setOpenAnother(false);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(values);
        dispatch(doctorForAppointment(values._id,{...values}))
    }
    const handleSendEmail =(data)=>{
        setValues(data);
        console.log(values)
    }
    const handleOpenEmail=(data)=>{
        if(data.doctorsStatus !== 'Approved'){
            setOpenPendingStats(true);
            setValues(data)
            console.log(data)
        }
        else{
            setOpenSendEmail(true);
           
        }
       
    }
    const handleCloseEmail=()=>{
        setOpenPendingStats(false);
        setOpenSendEmail(false);
    }
    const handleOpenView =(data)=>{
        setOpenPreviewDetails(true);
        setValues(data);
    }
    const handleCloseView=()=>{
        setOpenPreviewDetails(false);
    }

    return (
      
            <Container component="main" maxWidth="lg">  
             <MaterialTable 
                icons={tableIcons}
                title="Pending Appoinments"
                data={filteredData}
                columns={columns}
                components={{
                Row: props => <CustomRow {...props} handleOpen={handleOpen} handleOpenEmail={handleOpenEmail} handleOpenView={handleOpenView}/>
                }} 
             />
     



        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          
            <Container component ="main" maxWidth="lg">
            <DialogTitle><Typography component="h1" variant="h5">Doctors Available</Typography></DialogTitle>
            <Grid container spacing={3}>
            <Grid item xs={12}> 
             <TextField
                             fullWidth
                             label="Select a Doctor"
                             variant="outlined"
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                select
                                name="doctorsName"
                                value={values.doctorsName}
                                onChange={handleChange}
                                >
                                {drops.map((datas)=>(
                                    <MenuItem key={datas._id} value={datas.suffix===undefined? datas.lastName+"," +" "+ datas.firstName +" "+ datas.middleName: datas.lastName +" "+datas.suffix+", "+ datas.firstName +" "+ datas.middleName}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                           Name:<h5> {datas.lastName} {datas.suffix}, {datas.firstName} {datas.middleName} </h5>
                                            </Grid>
                                            <Grid item xs={12}>
                                            Specialization: <h5> {datas.doctorsSpeciality}</h5> 
                                            </Grid>
                                        </Grid>
                                    </MenuItem>
                                   
                                ))}
                                </TextField>
                                 </Grid>
                </Grid>
              
                <Grid container spacing={1} justify="center">
                    <Button type="submit" variant="contained" className={classes.submit} color="primary" onClick={handleSubmit}>SUBMIT</Button>
                    <Button variant="contained" color="secondary" className={classes.submit} onClick={handleClose}>Cancel</Button>
                </Grid>
                </Container>
              
        
            </Dialog>
              
            {/* <Dialog open={openAnother} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle>Doctors</DialogTitle>
                    <DialogContent>Already choosed a doctor for the appointment</DialogContent>
                    <DialogContent>Please wait for the doctor's confirmation</DialogContent>
                </Dialog> */}

            <Dialog open={openSendEmail} onClose={handleCloseEmail} aria-labelledby="form-dialog-title">
                <DialogTitle>Sending Email</DialogTitle>
            </Dialog>
            <Dialog open={openPendingStats} onClose={handleCloseEmail} aria-labelledby="form-dialog-title">
                <DialogTitle>Status is still pending</DialogTitle>
                <DialogContent>
                <Typography>Please be sure that the doctor you appointed, confirmed this appointment</Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleCloseEmail}>Close</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openPreviewDetails} onClose={handleCloseView} aria-labelledby="form-dialog-title">
                <Container component="main" maxWidth="md">
                <DialogTitle>
                    <Typography>Pending Details</Typography>
                </DialogTitle>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={12}>
                            <Typography>Client Details</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography> Name:</Typography>
                            <Typography> {values.suffix === 'undefined'? values.lastName +", "+ values.firstName +" "+values.middleName:values.lastName +" "+values.suffix+", "+ values.firstName +" "+values.middleName}</Typography>
                            <Typography>Contact Number:</Typography>
                            <Typography>{values.contactNumber}</Typography>
                            <Typography>Email Address:</Typography>
                            <Typography>{values.email}</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography>Appointment Details</Typography>
                        </Grid>
                        <Grid item xs={12} >
                             <Typography>Concern</Typography>
                             <Typography>{values.concerns}</Typography>
                            <Typography>Type of Consultation</Typography>
                            <Typography>{values.concernType}</Typography>
                            <Typography>Appointment Date:</Typography>
                            <Typography>{moment(values.dataAndTime).format('D MMM YYYY')}</Typography>
                            <Typography>Appointment Time:</Typography>
                            <Typography>{moment(values.dataAndTime).format('h:mm a')}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Doctor's Confirmation Status:</Typography>
                            <Typography>{values.doctorsStatus}</Typography>
                        </Grid>
                    </Grid>
                    <DialogActions>
                            <Button variant="contained" color="primary" onClick={handleCloseView}>Close</Button>
                        </DialogActions>
                </Container>
            </Dialog>


        </Container>
    )
}
const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 1, 2),
      },
  }));
export default PendingAppointments