import React, { useState } from 'react';
import useStyles from './Styles'
import { Avatar, Button,TextField, Paper, Grid, Typography, Container, 
    IconButton,InputAdornment } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import {signInStaff} from '../Connections/Action/staffs'

const initialState = { StaffId:'', password:''  };
const Login = () =>{
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [values,setValues] = useState(initialState);
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClickRepeatPassword = () => setShowPasswords(!showPasswords);
    const [showPasswords, setShowPasswords] = useState(false);
   const [locate, setLocate] =useState({level:''})
   
    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(values)
        dispatch(signInStaff(values,navigate))
      
        
        //handels();
    }
   
    const handels = ()=>{
        //e.preventDefault();
        setLocate({level: user?.result.firstName})
        console.log(locate)
        
    }
    const handleForgotPassword =() =>{
        console.log('DITO YUNG PASSWORD')
    }

    return(
        <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
  
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5"> Sign In</Typography>
            <form className={classes.form} autoComplete="off" onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                    <Grid item xs={12}> 
                        <TextField  name="StaffId" label="StaffId" 
                            type="StaffId" placeholder='Enter your ID Number' 
                            value={values.StaffId} onChange={handleChange} 
                            fullWidth  variant="outlined" />
                    </Grid>

                     <Grid item xs={12}>
                        <TextField  name="password" label="Password" type="password" placeholder='Enter your password'
                                value={values.password} onChange={handleChange} 
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
                <Button fullWidth type="submit" variant="contained" color="primary" className={classes.submit}>Login</Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={handleForgotPassword}>
                            Forgot Password?
                        </Button>
                    </Grid>
                </Grid>
             </form>
        </Paper>
        </Container>
    )
}
export default Login;