import React,{useState,useEffect} from "react";
import FileBase64 from 'react-file-base64';
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, TextField} from "@material-ui/core";

const Admin =() =>{
    const classes = useStyles();
    return(
        <Container component="main" maxWidth="xl" >
             <Paper className={classes.paper} elevation={0}>
                <Grid container>
                    <Grid item sm={3}>
                        <Paper className={classes.paper1}  elevation={4}>
                        <Typography component="h1" variant="h6">Appointments Today</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.paper1} elevation={4}>
                        <Typography component="h1" variant="h6">Pending Appointments</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.paper1} elevation={4}>
                        <Typography  component="h1" variant="h6">Available Doctors</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.paper1} elevation={4}>
                        <Typography component="h1" variant="h6">Number of Clients</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      
      alignItems: 'center',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(10),
      
    },
    paper1:{
        marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100px',
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

export default Admin