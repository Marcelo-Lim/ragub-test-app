import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,
    DialogTitle, TextField} from "@material-ui/core";
import tableIcons from '../MaterialTable/MaterialTableIcons'

const Doctor =() =>{
    const classes = useStyles();
    



    return(
        <Container component="main" maxWidth="lg">
           <Paper className={classes.paper} elevation={1}>
                <Typography>Doctors Information</Typography>
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

export default Doctor