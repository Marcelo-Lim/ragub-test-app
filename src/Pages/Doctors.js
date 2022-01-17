import React,{useState,useEffect} from 'react';
import DoctorTable from '../DoctorsComponents/DoctorsTable/DoctorTable'
import { Container,Paper,Grid,TextField,Icon,Checkbox,Select,MenuItem ,Button,
Dialog,DialogTitle, Typography, makeStyles,} from '@material-ui/core';
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { COLORS } from '../Styles/colors';
import Input from '../OwnerComponents/Staffs/StaffInput'
import './Doctors.css';
import { newStaffData } from '../Components/Connections/Action/staffs';

const Doctor = ()=>{
    const classes = useStyles();
    const [data,setData] = useState([])
    const numberId = 10000000;
    const dataNums = data.length;
    const initialState = {
        firstName:'',
        lastName:'',
        suffix:'',
        middleName:'',
        contactNumber:'',
        email:'',
        position:'',
        StaffId:'',
        password:'',
        level: '' 

    }
    const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(()=>{
        fetch("http://localhost:5000/staff/staffdatas")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })
    const [form,setForm] = useState(initialState);
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const [open,setOpen] = useState(false);
    const handleClose = () =>{
        setOpen(false);
    }
    const handleClickOpen =()=>{
        setOpen(true);
        {console.log(data.length)}
         
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setForm(form.StaffId=(numberId + dataNums +1).toString(),form.level='Doctor');
          dispatch(newStaffData(form,navigate))
            console.log(form);
            setOpen(false);
    }
    return(
        <div className="container-doctor">
        <h1 className={classes.h1}>Doctors</h1>
        <Button className={classes.newdoctorbtn} onClick={handleClickOpen}>New Doctor</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Container component ="main" maxWidth="lg"> 

        <DialogTitle id="form-dialog-title"> 
        <Typography className={classes.typodoctor}> Doctor </Typography>  
        </DialogTitle>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3} item xs={12}>
                                <Typography className={classes.numberid}>Number ID: {numberId + dataNums +1}</Typography>
                                <Input name="lastName" placeholder='Last Name' label='Last Name' handleChange={handleChange} autoFocus/>
                                <Input name="firstName" placeholder='FirstName' label='First Name' handleChange={handleChange}/>
                                <Input name="middleName" placeholder='MiddleName' label='Middle Name' handleChange={handleChange}/>
                                <Input name="suffix" placeholder='Suffix' label='Suffix' handleChange={handleChange}/>
                                <Input name="contactNumber" placeholder='Contact Number' label='Contact Number' handleChange={handleChange}/>
                            
                                <Input name="email" placeholder='Email' label='Email' handleChange={handleChange}/>
                                <Input name="position" placeholder='Specialization' label='Specialization' handleChange={handleChange}/>
                                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />

                            </Grid>
                            <Grid container justify="center">
                                <Button className={classes.addbtn} type="submit" variant="contained" color="primary">Add</Button>
                                <Button className={classes.cancelbtn} variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
                            
                            </Grid>
                        </form>


        </Container>
        </Dialog>
        <DoctorTable/>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({

    h1: {
        marginTop: "25px",
        marginBottom: "25px",
        fontSize: "50px",
        fontWeight: "bold",
    },

    newdoctorbtn: {
        marginBottom: "35px",
        backgroundColor: COLORS.BLUE,
        color: "white",
    },

    addbtn: {
        backgroundColor: COLORS.BLUE,
        color: "white",
        width: "30%",
        marginTop: "25px",
        marginRight: "25px",
        marginBottom: "25px",
    },

    cancelbtn: {
        backgroundColor: COLORS.BLUE,
        color: "white",
        width: "30%",
        marginTop: "25px",
        marginRight: "25px",
        marginBottom: "25px",
    },

    numberid: {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "15px",
        marginLeft: "15px"
    },

    typodoctor: {
        
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "25px",
            marginTop: "15px",
    }

}));
export default Doctor