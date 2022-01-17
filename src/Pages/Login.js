import React,{useState} from 'react'
import { Container,Paper,Grid,TextField,Button,Typography, makeStyles,} from '@material-ui/core';
import { COLORS } from '../Styles/colors';
import { signInStaff } from '../Components/Connections/Action/staffs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../constant';

const Logins = ()=>{
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [form,setForm]=useState({ StaffId:'', password: ''})
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleChange = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
        // setErrors(validateInfo(values));
    };

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(form);
        dispatch(signInStaff(form,navigate))
        

       
    }

return(
        <Container component="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
                <Typography className={classes.logintxt} >Log in</Typography>

            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={4} direction="column">
                    <Grid item>
                       <TextField className={classes.txtfield} name="StaffId"  label="ID Number" 
                        placeholder='Enter your ID Number'  autoFocus
                        value={form.StaffId} onChange={handleChange} 
                        variant="outlined" />
                    </Grid>
                    <Grid item>
                    <TextField  className={classes.txtfield} name="password" label="Password" type="password" placeholder='Enter your password'
                    value={form.password} onChange={handleChange} 
                    fullWidth  variant="outlined"  />
                    </Grid>
                </Grid>
                <Button type='submit'className={classes.submit}> Log in</Button>
            </form>
           
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
        fontSize: "50px",
        fontWeight: "bold",
        fontFamily: "Pathway Gothic One",
    },

    txtfield: {
        width: "100%",
        height: "100%",
    }

    
}))

export default Logins