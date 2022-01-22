import React,{useState,useEffect} from 'react';
import { Typography, makeStyles,Button,
    Paper, Container, Grid,IconButton,InputAdornment, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,
    DialogTitle, TextField,FormControlLabel,} from "@material-ui/core";
     import Autocomplete from '@mui/material/Autocomplete';

import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {newStaffData} from '../../Connections/Action/staffs'

import EmployeeTable from './employeeTable';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const options = ['Administrator','Employee'];
const option2 = ['Nurse','Receptionist', 'Radiologist','Medical Technologist'];

const EmployeePanel = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPasswords, setShowPasswords] = useState(false);
    const handleClickRepeatPassword = () => setShowPasswords(!showPasswords);
    const [open,setOpen] = useState(false);
    const numberId = 20000000;
    //const dataNums = data.length;
    const initialState = {
        firstName:'',
        lastName:'',
        suffix:'',
        middleName:'',
        contactNumber:'',
        email:'',
        position:'',
        StaffId:'',
        password:'',
        employeetype:''
    }
    const [values, setValues] = useState(initialState)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setValues(values.StaffId=numberId.toString());
        dispatch(newStaffData(values,navigate))
        console.log(values)
        setOpen(false);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const handleClickOpen =()=>{
        setOpen(true);
        // // initialState.StaffId =numberId + dataNums +1;
        setValues(values.StaffId=numberId);
        //console.log(form)
    }
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    return(
        <div>
        <Container component="main" maxWidth="lg">
            <Paper className={classes.paper} elevation={0}>
                <Typography component="h1" variant="h5">Employee Information</Typography>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>Add Employee</Button>
            </Paper>
            <EmployeeTable/>
        </Container>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Container component ="main" maxWidth="lg"> 
            <DialogTitle id="form-dialog-title">
                    <Typography component="h1" variant="h5" className={classes.addstaff}>Add Employee </Typography>     
            </DialogTitle>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography className={classes.numberid}>Employee Number: {numberId} </Typography>
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
                         placeholder='Enter Middle Name'  required
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
                    <TextField  name="contactNumber" label="Contact Number" 
                         placeholder='Enter Contact Number' required
                       // value={values.StaffId} 
                       onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="email" label="Email" type="email"
                         placeholder='Enter Email Address' required
                       // value={values.StaffId} 
                       onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <Autocomplete
                            id="combo-box-demo"
                            options={option2}
                            sx={{ width: 550 }}
                            onChange={(evt,value) => setValues(prev =>({...prev, employeetype:value}))}
                          
                            renderInput={(params) => <TextField {...params} label="Type of Employee" />}
                            />
                </Grid>
                <Grid item xs={12}> 
                    <Autocomplete
                            id="combo-box-demo"
                            options={options}
                            sx={{ width: 550 }}
                            onChange={(evt,value) => setValues(prev =>({...prev, position:value}))}
                           
                            renderInput={(params) => <TextField {...params} label="Position" />}
                            />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="password" label="Password" 
                         placeholder='Enter Password' 
                       // value={values.StaffId} 
                       onChange={handleChange} 
                        fullWidth  variant="outlined" 
                        type={showPasswords ? "text" : "password"} 
                        //onChange={someChangeHandler}
                        InputProps={{endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickRepeatPassword}
                                >
                                {showPasswords ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            )
                        }}/>
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
      marginTop: theme.spacing(4),
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

    cancelbtn: {
        //backgroundColor: COLORS.BLUE,
        color: "white",
        width: "30%",
        marginTop: theme.spacing(6),
        marginRight: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    buttons:{
        display: 'flex',
        alignItems: 'right',
        flexDirection: 'row',
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
    numberid: {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1)
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

export default EmployeePanel