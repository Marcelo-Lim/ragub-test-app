import React,{useState,useEffect} from 'react'
import FileBase64 from 'react-file-base64';
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, TextField, IconButton} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
const Profile_Admin = () =>{
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    // const [values,setValues] = useState()
    return (
        <Container component="main" maxWidth="sm">
           
            <Paper className={classes.paper} elevation={4}>
                <Paper className={classes.paper1} elevation={0}> 
                    <Typography component="h1" variant="h5">Profile Data</Typography>
                    </Paper>
               
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Typography >{"Employee Number: "}</Typography>
                        <Typography component="h1" variant="h6">{user?.result.StaffId}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography >Full Name:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.lastName},{user?.result.firstName}{user?.result.middleName}{user?.result.suffix}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Email Address:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.email}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography >Contact Number:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.contactNumber}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography >Type of Employee:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.employeetype}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography >Position:</Typography>
                        <Typography component="h1" variant="h6">{user?.result.position}</Typography>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary"> <EditIcon/>Edit</Button>
            </Paper>
        </Container>
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
  }));
export default Profile_Admin