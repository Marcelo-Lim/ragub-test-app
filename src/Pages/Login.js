import React from 'react'
import { Container,Paper,Grid,TextField,Button,Typography, makeStyles,} from '@material-ui/core';
import { COLORS } from '../Styles/colors';

const Logins = ()=>{

    const classes = useStyles();

return(
        <Container component="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
                <Typography className={classes.logintxt} >Log in</Typography>

            <form className={classes.form}>
                <Grid container spacing={4} direction="column">
                    <Grid item>
                        <TextField className={classes.txtfield} name="email" label="Email" type="email" placeholder="Enter your email"
                        variant="outlined"></TextField>
                    </Grid>
                    <Grid item>
                        <TextField className={classes.txtfield} name="password" label="Password" type="password" placeholder="Enter your password"
                        variant="outlined"/>
                    </Grid>
                </Grid>

            </form>
            <Button className={classes.submit}> Log in</Button>
            </Paper>
        </Container>
)
};

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: "100px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        },

    typos:{
        fontSize: 'clamp(1.5rem,6vw,4rem)',
    },

    form:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "100px",
    
    },
    submit:{
        backgroundColor: COLORS.BLUE,
        color: "white",
        marginTop: "30px",
        marginBottom: "30px",
        width: "50%",
    },

    logintxt: {
        marginTop: "25px",
        fontSize: "45px",
        fontWeight: "bold",
        fontFamily: "Pathway Gothic One",
    },

    txtfield: {
        width: "100%",
        height: "100%",
    }

    
}))

export default Logins