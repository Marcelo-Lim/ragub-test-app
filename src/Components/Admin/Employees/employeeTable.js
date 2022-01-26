import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import { Typography, makeStyles,Button,
    Paper, Container, Grid,IconButton,InputAdornment, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,
    DialogTitle, TextField,FormControlLabel,} from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import tableIcons from '../../MaterialTable/MaterialTableIcons';
import CustomRow from './index'
import { useDispatch } from "react-redux";

import {updateStaffInfo,deleteDeduction} from '../../Connections/Action/staffs'

const options = ['Administrator','Employee'];
const option2 = ['Nurse','Receptionist', 'Radiologist','Medical Technologist'];
const Employees =() =>{
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [openDelete,setOpenDelete] = useState(false);
    const [openView,setOpenView] = useState(false);
    const dispatch = useDispatch();
    const [data,setData] = useState([]);
    const initialState = {
       // StaffId: '',
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
    const [values,setValues] = useState(initialState);
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const columns=[
        {
            title: "Employee Number", field:"StaffId" 
        },
        {
            title: "Last Name", field:"lastName" 
        },
        {
            title: "First Name", field:"firstName" 
        },
        {
            title: "Middle Name", field:"middleName" 
        },
        {
            title: "Email", field:"email"
        },
        {
            title: "Contact Number", field:"contactNumber"
        },  
         {
            title: "Position", field:"position"
        },
        {
            title: "Actions"
        }]

        useEffect(()=>{
            fetch("https://sdmc-clinic.herokuapp.com/staff/staffdatas")
            .then(resp => resp.json())
            .then(resp => setData(resp))
        })


        const handleClickedOpen = (data)=>{
            setOpen(true);
            setValues(data)
        }
        const handleClose = () =>{
             setOpen(false);
           
        }
        const handleClickedOpenDelete=(data)=>{
            setOpenDelete(true)
            setValues(data)
        }
        const handleCloseDelete = (data) =>{
            setOpenDelete(false);
       }
       const handleClickedOpenView=(data)=>{
            setOpenView(true);
            setValues(data)
        }
        const handleCloseView = () =>{
            setOpenView(false);
         }

         const handleSubmit=(e)=>{
             e.preventDefault()
             console.log(values._id)
             dispatch(updateStaffInfo(values._id,{...values}))
             setOpen(false)
         }
         const deleteData=(e)=>{
             e.preventDefault();
             dispatch(deleteDeduction(values._id))
             setOpenDelete(false) 
         }

    return(
        <div>
        <Container component="main" maxWidth="lg">
    
                   
              <MaterialTable  
                icons={tableIcons}
                title="Information"
                data={data}
                columns={columns}
                components={{
                    Row: props => <CustomRow {...props} handleClickedOpen={handleClickedOpen} handleClickedOpenDelete={handleClickedOpenDelete} handleClickedOpenView={handleClickedOpenView}/>
                  }}
            />
           
        </Container>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <Container component ="main" maxWidth="lg">
            <DialogTitle id="form-dialog-title">
                    <Typography component="h1" variant="h5"  className={classes.addstaff}>Employee </Typography>     
            </DialogTitle>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className={classes.numberid} >Employee Number: {values.StaffId} </Typography>
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="lastName" label="Last Name" 
                         placeholder='Enter Last Name' required
                        value={values.lastName} 
                          onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="firstName" label="First Name" 
                         placeholder='Enter First Name' required
                        value={values.firstName} 
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="middleName" label="Middle Name" 
                         placeholder='Enter Last Name' required
                        value={values.middleName} 
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="suffix" label="Suffix" 
                         placeholder='Enter Suffix' 
                        value={values.suffix} 
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="email" label="Email" 
                         placeholder='Enter Email' required
                        value={values.email} 
                        type="email"
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="contactNumber" label="Contact Number" 
                         placeholder='Enter Contact Number' required
                        value={values.contactNumber} 
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <Autocomplete
                            id="combo-box-demo"
                            options={options}
                            sx={{ width: 550 }}
                            value={values.position}
                            onChange={(evt,value) => setValues(prev =>({...prev, position:value}))}
                            variant="outlined"
                            renderInput={(params) => <TextField {...params} label="Position" />}
                            />
                </Grid>
                <Grid item xs={12}> 
                    <Autocomplete
                            id="combo-box-demo"
                            options={option2}
                            sx={{ width: 550 }}
                            value={values.employeetype}
                            onChange={(evt,value) => setValues(prev =>({...prev, employeetype:value}))}
                          
                            renderInput={(params) => <TextField {...params} label="Type of Employee" />}
                            />
                </Grid>
            </Grid>
                     {/* </Grid> */}
           
                            <Grid container justify="center">
                            <Button className={classes.addbtn} type="submit" variant="contained" color="primary">Update</Button>
                            <Button className={classes.cancelbtn} variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
        
                            </Grid>
            </form>
            </Container>
            </Dialog>


                  <Dialog open={openDelete} onClose={handleCloseDelete} aria-labelledby="form-dialog-title">
                      <DialogTitle>
                          <Typography component="h1" variant="h5"  className={classes.addstaff}>Delete Information</Typography>
                      </DialogTitle>'
                      <Container component ="main" maxWidth="sm">
                      <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography component="h3" variant="h6"  >Are you sure you want to delete this information?</Typography>
                            </Grid>
                            <Grid item xs={12}>
                        <Typography component="h3" variant="h6">Employee Number: {values.StaffId}</Typography>
                        </Grid>
                      </Grid>
                      <DialogActions>
                          
                      <Button   variant="contained" color="primary" onClick={deleteData}>Yes</Button>
                        <Button  variant="contained" color="secondary" onClick={handleCloseDelete}>No</Button>
                      </DialogActions>
                      </Container>
                  </Dialog>

                  <Dialog open={openView} onClose={handleCloseView} aria-labelledby="form-dialog-title">
                     <DialogTitle>
                         <Typography component="h1" variant="h5"  className={classes.addstaff}>Employee Details </Typography>     
                    </DialogTitle>
                    <Container component="main" maxWidth="md">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography component="h2" variant="h5">Full Name:</Typography>
                                <Typography component="h1" variant="h5"  className={classes.addstaff}>{values.lastName},{values.firstName}  {values.middleName} {values.suffix}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="h2" variant="h5">Contact Number:</Typography>
                                <Typography component="h1" variant="h5"  className={classes.addstaff}>{values.contactNumber}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="h2" variant="h5">Email Address:</Typography>
                                <Typography component="h1" variant="h5"  className={classes.addstaff}>{values.email}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="h2" variant="h5">Type of Employee:</Typography>
                                <Typography component="h1" variant="h5"  className={classes.addstaff}>{values.employeetype}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="h2" variant="h5">Position:</Typography>
                                <Typography component="h1" variant="h5"  className={classes.addstaff}>{values.position}</Typography>
                            </Grid>
                        </Grid> 
                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={handleCloseView}>Done</Button>
                        </DialogActions>
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

export default Employees