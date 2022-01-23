import React,{useEffect,useState} from 'react';
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,
    DialogTitle, TextField} from "@material-ui/core";
import DoctorTable from './doctorsTable'


const Doctors =()=>{
    const [open,setOpen] = useState(false);
    const initialState={
        StaffId: '',
        firstName:'',
        lastName:'',
        middleName:'',
        suffix:'',
        doctorsSpeciality:'',
        contactNumber:'',
        email:''
    }
    const [values,setValues] = useState(initialState);
    const classes = useStyles();

    const handleClose=()=>{
        setOpen(false);
    }

    return(
        <div>
        <Container component="main" maxWidth="lg">
           <Paper className={classes.paper} elevation={0}>
                <Typography component="h1" variant="h5">Doctors Information</Typography>
                <Button variant="contained" color="primary" >Add Doctors</Button>
           </Paper>
           <DoctorTable/>
        </Container>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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