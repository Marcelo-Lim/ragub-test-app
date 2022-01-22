import React from 'react';
import ClientTB from './clients';
import { Typography, makeStyles,Button,
    Paper, Container, Grid,IconButton,InputAdornment, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,
    DialogTitle, TextField,FormControlLabel,} from "@material-ui/core";

const Clients = () =>{
    const classes = useStyles();
    return(
        <Container component="main" maxWidth="lg">
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">Client Information Module</Typography>
            </Paper>
            <ClientTB/>
        </Container>
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

export default Clients