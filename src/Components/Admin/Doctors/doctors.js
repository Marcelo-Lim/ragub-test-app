import React,{useEffect,useState} from 'react';
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,
    DialogTitle, TextField} from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import DoctorTable from './doctorsTable'
import {useDispatch} from 'react-redux';
import {newDoctorData} from '../../Connections/Action/doctors'

const options = ['Allergists/Immunologists','Anesthesiologists',
'Cardiologists','Colon and Rectal Surgeons','Critical Care Medicine Specialists',
'Dermatologists','Endocrinologists','Emergency Medicine Specialists',
'Family Physicians','Gastroenteronologists','Geriatic Medicine Specialists',
'Hermatologists','Hospice and Palliative Medicine Specialists','Infectios Disease Specialists',
'Internists',''];
const Doctors =()=>{
    const [open,setOpen] = useState(false);
    const [data,setData] =useState([])
    const dispatch = useDispatch();
    const numberId = 10000000;
    const count = data.length;
    const initialState={
        StaffId: '',
        firstName:'',
        lastName:'',
        middleName:'',
        suffix:'',
        doctorsSpeciality:'',
        contactNumber:'',
        email:'',
        password:''
    }
    const [values,setValues] = useState(initialState);
    
    const classes = useStyles();
    const handleClickedOpen=()=>{
        setOpen(true);
        setValues(values.StaffId=numberId+count);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setValues(values.StaffId=(numberId+count).toString());
        dispatch(newDoctorData(values))
        console.log(values.StaffId);
        setOpen(false);
    }
    useEffect(()=>{
        fetch("http://localhost:5000/doctor/doctors/data")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    return(
        <div>
        <Container component="main" maxWidth="lg">
           <Paper className={classes.paper} elevation={0}>
                <Typography component="h1" variant="h5">Doctors Information</Typography>
                <Button variant="contained" color="primary" onClick={handleClickedOpen} >Add Doctors</Button>
           </Paper>
           <DoctorTable/>
        </Container>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Container component ="main" maxWidth="lg">
            <DialogTitle>
                <Typography component="h1" variant="h5">Add Doctors</Typography>
            </DialogTitle>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography className={classes.numberid}>Employee Number: {numberId+count} </Typography>
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="lastName" label="Last Name" 
                            placeholder='Enter Last Name' required
                        // value={values.StaffId} 
                         onChange={handleChange} 
                            fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="firstName" label="First Name" 
                            placeholder='Enter First Name' required
                        // value={values.StaffId} 
                         onChange={handleChange} 
                            fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="middleName" label="Middle Name" 
                            placeholder='Enter Middle Name' required
                        // value={values.StaffId} 
                             onChange={handleChange} 
                            fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="suffix" label="Suffix" 
                            placeholder='Enter Suffix'
                        // value={values.StaffId} 
                        onChange={handleChange} 
                            fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="email" label="Email" 
                            placeholder='Enter Email' required
                        // value={values.StaffId} 
                        onChange={handleChange} 
                            fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="contactNumber" label="Contact Number" 
                            placeholder='Enter Contact Number' required
                        // value={values.StaffId} 
                        onChange={handleChange} 
                            fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <Autocomplete
                            id="combo-box-demo"
                            options={options}
                            sx={{ width: 550 }}
                            onChange={(evt,value) => setValues(prev =>({...prev, doctorsSpeciality:value}))}
                          
                            renderInput={(params) => <TextField {...params} label="Specification" />}
                            />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="password" label="Password" 
                            placeholder='Enter Password' required
                        // value={values.StaffId} 
                        onChange={handleChange} 
                            fullWidth  variant="outlined" />
                </Grid>
            </Grid>
            <Grid container justify="center">
                            <Button className={classes.addbtn} type="submit" variant="contained" color="primary">Add</Button>
                            <Button className={classes.cancelbtn} variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
        
                            </Grid>
            </form>
        </Container>
        </Dialog>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(1),
      
    },
    addbtn: {
        // backgroundColor: COLORS.BLUE,
         color: "white",
         width: "30%",
         marginTop: theme.spacing(6),
         marginRight: theme.spacing(6),
         marginBottom: theme.spacing(6),
     },
     numberid: {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1)
    },
 
     cancelbtn: {
         //backgroundColor: COLORS.BLUE,
         color: "white",
         width: "30%",
         marginTop: theme.spacing(6),
         marginRight: theme.spacing(6),
         marginBottom: theme.spacing(6),
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
  }));
export default Doctors;