import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../MaterialTable/MaterialTableIcons';
import CustomRow from './index'
import { useDispatch } from "react-redux";
import moment from 'moment';
import emailjs from 'emailjs-com';
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
    const [datatwo,setDatatwo]= useState([])
    const [openSendEmail,setOpenSendEmail] = useState(false)
    const [openAnother, setOpenAnother]= useState(false);
    const [openPendingStats, setOpenPendingStats] = useState(false)
    const [dx,setDxs]= useState([])
    const [drops,setDrops] = useState([]);
    const [filteredData,setFilteredData]=useState(data)
    const [openPending,setOpenPending]= useState(false)
    const [openPreviewDetails, setOpenPreviewDetails] = useState(false)
    const initialState={
        doctorsName:'',
        doctorsIdNumber:'',
        dates: new Date(),
        timess: new Date(),
        lastName:'',
        firstName:'',
        email:''
    }
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    
   const [values,setValues] = useState(initialState)
    const [open,setOpen] = useState(false);

  
    // const [val,setVal]= useState({
    //     firstName:'',
    //     lastName:'',
    //     dateAndTime: new Date()
    // })
    const columns=[ 
        {
            title: "Patient Name", field: "firstName"
        },
        {
            title: "Patient Name", field: "lastName"
        },
        {
            title: "Concern", field: "concerns",
        },
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
       setValues(data)
       console.log(values)
       setOpen(true)

            
    }

    const handleClose=()=>{
        setOpen(false);
        setOpenAnother(false);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(values);
        dispatch(doctorForAppointment(values._id,{...values}))
        setOpen(false);
    }
    const handleSendEmail =()=>{
        // setValues();
        console.log(values)
        emailjs.send('service_vdtmbb6', 'template_mbwqyzp', values, 'user_Pja1vFlc7jtiv7rvHzl6w')
       
    }
    const handleOpenEmail=(data)=>{
        if(data.doctorsStatus === 'Approved'){
            setOpenSendEmail(true);
            
            setValues({ firstName: data.firstName,
            lastName: data.lastName,
            dates: moment(data.dateAndTime).format('D MMM YYYY'),
            timess: moment(data.dateAndTime).format('h:mm a'),
            email: data.email})
            console.log(data)
        }
    }

    // const dtFormat = new Intl.DateTimeFormat('en-US',{
    //     hour: 'numeric',
    //     minute: 'numeric'
    // })
    const handleCloseEmail=()=>{
        setOpenPendingStats(false);
        setOpenSendEmail(false);
        setOpenPending(false)
    }
    const HandleOpenView =(data)=>{
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
                Row: props => <CustomRow {...props} handleOpen={handleOpen} handleOpenEmail={handleOpenEmail} HandleOpenView={HandleOpenView}/>
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
                                    <MenuItem key={datas._id} value={datas._id}>
                                      {/* value={datas.suffix===undefined? datas.lastName+"," +" "+ datas.firstName +" "+ datas.middleName: datas.lastName +" "+datas.suffix+", "+ datas.firstName +" "+ datas.middleName}> */}
                                        <Grid container>
                                            {/* {setValues.doctorsIdNumber=datas._id} */}
                                            <Grid item xs={12}>
                                           Name:<h5> {datas.lastName} {datas.suffix}, {datas.firstName} {datas.middleName} </h5>
                                            </Grid>
                                            <Grid item xs={12}>
                                            Specialization: <h5> {datas.doctorsSpeciality}</h5> 
                                            </Grid>
                                        </Grid>
                                        {/* {setValues(values.doctorsIdNumber === datas._id)} */}
                                    </MenuItem>
                                  
                                ))}
                                </TextField>
                                 </Grid>
                                 <Grid>
                                    <h1> {datatwo.firstName}</h1>
                                 </Grid>
                </Grid>
              
                <Grid container spacing={1} justify="center">
                    <Button type="submit" variant="contained" className={classes.submit} color="primary" onClick={handleSubmit}>SUBMIT</Button>
                    <Button variant="contained" color="secondary" className={classes.submit} onClick={handleClose}>Cancel</Button>
                </Grid>
                </Container>
            </Dialog>

            <Dialog open={openPending} onClose={handleCloseEmail} aria-labelledby="form-dialog-title">
                <DialogTitle>Sending Email</DialogTitle>
                <DialogContent>
                    <Typography>Please wait for the doctor to confirm the appointment</Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleCloseEmail}>Close</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openSendEmail} onClose={handleCloseEmail} aria-labelledby="form-dialog-title">
                <DialogTitle>Sending Email</DialogTitle>
                <DialogContent>
                    <Typography>This appointment is already approved.</Typography>
                    <Typography>Please notify the patient for this appointment</Typography>
                    <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleSendEmail}>Send Email</Button>
                </DialogActions>
                </DialogContent>
            </Dialog>
            <Dialog open={openPendingStats} onClose={handleCloseEmail} aria-labelledby="form-dialog-title">
                <DialogTitle>Sending Email</DialogTitle>
                <DialogContent>
                <Typography>This appointment has been decline by the doctor</Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleCloseEmail}>Decline</Button>
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
                            <Typography>{moment(values.dateAndTime).format('D MMM YYYY')}</Typography>
                            <Typography>Appointment Time:</Typography>
                            <Typography>{moment(values.dateAndTime).format('h:mm a')}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <Typography>Doctor's Name:</Typography>
                        {drops.map((doctors)=>(
                            <Grid key={doctors._id} item xs={12}>
                                
                                {values.doctorsName === doctors._id?(
                                    <Typography>{doctors.suffix===undefined? doctors.lastName+"," +" "+ doctors.firstName +" "+ doctors.middleName: doctors.lastName +" "+doctors.suffix+", "+ doctors.firstName +" "+ doctors.middleName}</Typography>
                                ):null
                                }
                            </Grid>
                        ))}
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