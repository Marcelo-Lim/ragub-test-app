import React from 'react'
import {Container,Paper,Typography,Grid, TextField,Button} from '@mui/material'
import useStyles from '../Components/Login/Style'
const Login = ()=>{

    const classes = useStyles();

 return(
     <Container component="main" maxWidth="sm">
         <Paper className={classes.paper} elevation={3}>
         <Typography component="h1" variant="h5" >Login</Typography>

            <form className={classes.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField name="email" label="Email" type="email" placeholder='Enter your email'
                        fullWidth variant="outlined"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="password" label="Password" type="password" placeholder='Enter your password'
                        fullWidth variant="outlined"/>
                    </Grid>
                </Grid>


                    <Button fullWidth variant="contained" color="primary" className={classes.submit}> Login</Button>



            </form>

         </Paper>
     </Container>
 )
}
export default Login;