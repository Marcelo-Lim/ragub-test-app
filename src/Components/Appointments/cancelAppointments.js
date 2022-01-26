import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import { Typography, makeStyles,Button,
    Paper, Container, Grid,IconButton,InputAdornment, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,
    DialogTitle, TextField,FormControlLabel,MenuItem} from "@material-ui/core";
import tableIcons from '../MaterialTable/MaterialTableIcons';
import CustomRow from './index3'
import moment from 'moment';


const CancelledAppointments =() =>{
    const [data,setData] = useState([]);
    const [filteredData,setFilteredData]=useState(data)
    const [values,setValues]= useState([]);
    const [open,setOpen] = useState(false);
    
    const columns=[ 
        {
            title: "Patient Name", field: "firstName"
        },
        {
            title: "Email", field:"email"
        },
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
        fetch("https://sdmc-clinic.herokuapp.com/appointment/appointmentsss")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })
    useEffect(()=>{
        setFilteredData(data.filter(d=>d.appointmentStatus === 'Cancelled' ));
        
    },[data])
    const handleOpen =(data)=>{
        setOpen(true);
        setValues(data)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    return (
        <Container component="main" maxWidth='lg'>
             <MaterialTable 
            icons={tableIcons}
                title="Cancelled Appoinments"
                data={filteredData}
                columns={columns}
                components={{
                Row: props => <CustomRow {...props} handleOpen={handleOpen}/>
                }} 
        />
        </Container>
    )
}
export default CancelledAppointments