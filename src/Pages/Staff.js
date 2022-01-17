import React,{useState,useEffect} from 'react';
import StaffTable from '../OwnerComponents/Staffs/StaffTable'
import { Container,Paper,Grid,TextField,Icon,Checkbox,Select,MenuItem ,Button,
Dialog,DialogTitle, Typography, makeStyles} from '@material-ui/core';
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Input from '../OwnerComponents/Staffs/StaffInput'
import { newStaffData } from '../Components/Connections/Action/staffs';
import "./Staff.css";
import { COLORS } from '../Styles/colors';



const Staff = () =>{
    const classes = useStyles();
    const [data,setData] = useState([])
    const [open,setOpen] = useState(false);
    const [staffId,setStaffId] = useState([]);

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

    const [form,setForm] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClose = () =>{
        setOpen(false);
    }
    const handleClickOpen =()=>{
        setOpen(true);
        // initialState.StaffId =numberId + dataNums +1;
        setForm(form.StaffId=numberId + dataNums +1);
        console.log(form)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setForm(form.StaffId=(numberId + dataNums +1).toString(),form.level='Staff');
          dispatch(newStaffData(form,navigate))
            console.log(form);
            setOpen(false);
    }
    useEffect(()=>{
        fetch("https://sdmc-clinic.herokuapp.com/staff/staffdatas")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    return(
        <div>
        <div className="add-staff">
        <Button className={classes.newstaffbtn} onClick={handleClickOpen}>New Staff</Button>
        </div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <Container component ="main" maxWidth="lg"> 
                <DialogTitle id="form-dialog-title">
                    <Typography className={classes.addstaff}>    Add Staff    </Typography>
                    <Grid container justify="center">
                            
                            </Grid>
                </DialogTitle>
                        
                            <form onSubmit={handleSubmit}>
                            <Grid container spacing={3} item xs={12}>
                            <Typography className={classes.numberid}>Number ID: {numberId + dataNums +1}</Typography>
                            <Input required name="lastName" placeholder='Last Name' label='Last Name' handleChange={handleChange} autoFocus/>
                            <Input name="firstName" placeholder='FirstName' label='First Name' handleChange={handleChange}/>
                            <Input name="middleName" placeholder='MiddleName' label='Middle Name' handleChange={handleChange}/>
                            <Input name="suffix" placeholder='Suffix' label='Suffix' handleChange={handleChange}/>
                            <Input name="contactNumber" placeholder='Contact Number' label='Contact Number' handleChange={handleChange}/>
                            
                            <Input name="email" placeholder='Email' label='Email' handleChange={handleChange}/>
                            <Input name="position" placeholder='Position' label='Position' handleChange={handleChange}/>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />

                            </Grid>
                            <Grid container justify="center">
                            <Button className={classes.addbtn} type="submit" variant="contained" color="primary">Add</Button>
                            <Button className={classes.cancelbtn} variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
        
                            </Grid>
                            </form>
                        
                    </Container>
        </Dialog>


        <StaffTable/>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({

    newstaffbtn: {
        backgroundColor: COLORS.BLUE,
        color: "white",
        marginTop: "25px",
        marginBottom: "25px",
    },

    addstaff: {
        fontSize: "30px",
        textAlign: "center",
        marginBottom: "25px",
        marginTop: "15px",
    },

    numberid: {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "15px",
        marginLeft: "15px"
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

    xbtn: {
        backgroundColor: COLORS.BLUE,
        color: "white",
        width: "20%",
        marginBottom: "15px"
        
    },

}))
export default Staff;