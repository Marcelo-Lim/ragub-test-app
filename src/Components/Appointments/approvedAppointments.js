import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import moment from 'moment'
import tableIcons from '../MaterialTable/MaterialTableIcons';
import CustomRow from './index2'
import { Typography, makeStyles,Button,
    Paper, Container, Grid,IconButton,InputAdornment, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,
    DialogTitle, TextField,FormControlLabel,MenuItem} from "@material-ui/core";

const ApprovedAppointments =() =>{
    const [data,setData] = useState([]);
    const [open,setOpen] = useState(false);
    const [filteredData,setFilteredData]=useState(data)
    const classes = useStyles()
    const [values,setValues]= useState([])
    const columns=[ 
        {
            title: "Patient Name", field: "firstName"
        },
        // {
        //     title: "Email", field:"email"
        // },
        {
            title: "Contact Number", field: "contactNumber"
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
            title:"Action"
        }
    ]
    useEffect(()=>{
        fetch("http://localhost:5000/appointment/appointmentsss")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })
    useEffect(()=>{
        setFilteredData(data.filter(d=>d.appointmentStatus === 'Approved' ));
        
    },[data])
    const handleClickedOpen =(data)=>{
        setOpen(true);
        setValues(data)
    }
    const handleClose =()=>{
        setOpen(false);
    }
    return (
        <Container component="main" maxWidth='xl'>
             <MaterialTable 
            icons={tableIcons}
                title="Approved Appoinments"
                data={filteredData}
                columns={columns}
                components={{
                Row: props => <CustomRow {...props} handleClickedOpen={handleClickedOpen}/>
                }} 
        />


                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <Container component="main" maxWidth='lg'>
                        <DialogTitle>
                            <Typography>Appointment Details</Typography>
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
                            <Button variant="contained" color="primary" onClick={handleClose}>Close</Button>
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
export default ApprovedAppointments