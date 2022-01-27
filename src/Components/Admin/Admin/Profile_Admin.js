import React,{useState,useEffect} from 'react'
import FileBase64 from 'react-file-base64';
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, TextField, IconButton} from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from "react-redux";

import {updateStaffInfo,} from '../../Connections/Action/staffs'


const Profile_Admin = () =>{
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [open,setOpen] = useState(false);
    const dispatch = useDispatch();
    const [data,setData] = useState([]);

    const handleClickedOpen = (data)=>{
      setOpen(true);
      setValues(data)
  }
  const handleClose = () =>{
       setOpen(false);
     
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(values._id)
    dispatch(updateStaffInfo(values._id,{...values}))
    setOpen(false)
}


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
}
const [values,setValues] = useState(initialState);
const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });


useEffect(()=>{
  fetch("https://sdmc-clinic.herokuapp.com/staff/staffdatas")
  .then(resp => resp.json())
  .then(resp => setData(resp))
})


    // const [values,setValues] = useState()
    return (
      <div>
        <Container component="main" maxWidth="sm">
           
            <Paper className={classes.paper} elevation={4}>
                <Paper className={classes.paper1} elevation={0}> 
                  <div className={classes.division}>
                    <Typography component="h1" variant="h5" className={classes.profile}>Profile Data</Typography>
                    </div>
                    </Paper>
               
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Typography className={classes.profiledetails} >{"Employee Number: "}</Typography>
                        <Typography component="h1" variant="h6">{user?.result.StaffId}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.profiledetails}>Full Name:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.lastName},{user?.result.firstName}{user?.result.middleName}{user?.result.suffix}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.profiledetails}>Email Address:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.email}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.profiledetails} >Contact Number:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.contactNumber}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.profiledetails} >Type of Employee:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.employeetype}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.profiledetails} >Position:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.position}</Typography>
                    </Grid>
                </Grid>
                <Button className={classes.editbtn} variant="contained" color="primary" onClick={handleClickedOpen}> <EditIcon/>Edit</Button>
            </Paper>
        </Container>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <Container component ="main" maxWidth="lg">
            <DialogTitle id="form-dialog-title">
                    <div className={classes.division}>
                    <Typography component="h1" variant="h5"  className={classes.addstaff}>Employee </Typography>
                    </div>     
            </DialogTitle>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className={classes.numberid} >Employee Number: {user?.result.StaffId} </Typography>
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="lastName" label="Last Name" 
                         placeholder='Enter Last Name' required
                        value={user?.result.lastName} 
                          onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="firstName" label="First Name" 
                         placeholder='Enter First Name' required
                        value={user?.result.firstName} 
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="middleName" label="Middle Name" 
                         placeholder='Enter Last Name' required
                        value={user?.result.middleName} 
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="suffix" label="Suffix" 
                         placeholder='Enter Suffix' 
                        value={user?.result.suffix} 
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="email" label="Email" 
                         placeholder='Enter Email' required
                        value={user?.result.email} 
                        type="email"
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
                </Grid>
                <Grid item xs={12}> 
                    <TextField  name="contactNumber" label="Contact Number" 
                         placeholder='Enter Contact Number' required
                        value={user?.result.contactNumber} 
                      onChange={handleChange} 
                        fullWidth  variant="outlined" />
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
      marginBottom: theme.spacing(10),
      textAlign:'center'
    },
    grids:{
        display: 'flex',
      
    },
    paper1:{
        marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(3),
    //   marginLeft: theme.spacing(2),
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

    addstaff: {
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "bold",
    },


    numberid: {
      fontSize: "20px",
      fontWeight: "bold",
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(1)
  },

  division: {
    borderBottom: "3px solid red"
},

  profile: {
    fontSize: "30px",
    fontWeight: "bold",
  },

  profiledetails: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },

  editbtn: {
    width: "35%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },



  }));
export default Profile_Admin