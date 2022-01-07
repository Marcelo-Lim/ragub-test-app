import React,{useState,useEffect} from 'react';
import StaffTable from '../OwnerComponents/Staffs/StaffTable'
import { Container,Paper,Grid,TextField,Icon,Checkbox,Select,MenuItem ,Button,
Dialog,DialogTitle, Typography,} from '@material-ui/core';
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Input from '../OwnerComponents/Staffs/StaffInput'
import { newStaffData } from '../Components/Connections/Action/staffs';

const initialState = {
                        firstName:'',
                        lastName:'',
                        suffix:'',
                        contactNumber:'',
                        email:'',
                        position:'',
                        StaffId: '',
                       }

const Staff = () =>{
    const [data,setData] = useState([])
    const [open,setOpen] = useState(false);
    const [staffId,setStaffId] = useState([]);
    const numberId = 10000000;
    const dataNums = data.length;
    const [form,setForm] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClose = () =>{
        setOpen(false);
    }
    const handleClickOpen =()=>{
        setOpen(true);
        initialState.StaffId = numberId + dataNums +1;
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
         dispatch(newStaffData(form,navigate))
          console.log(form);
          alert(form)
          setOpen(false);
       
    }
    useEffect(()=>{
        fetch("http://localhost:5000/staff/staffdatas")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    return(
        <div>
        <h1> Adding Staff </h1>
        <Button onClick={handleClickOpen}>New Staff</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
           <Container component ="main" maxWidth="lg"> 
                <DialogTitle id="form-dialog-title">
                Add Staff    <Grid container justify="center">
                            <Button variant="contained" color="primary">X</Button>
                            </Grid>
                </DialogTitle>
                        <Paper  elevation={3}>
                            <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                            <Typography>{numberId + dataNums +1}</Typography>
                            <Input name="lastName" placeholder='Last Name' label='Last Name' handleChange={handleChange} autoFocus/>
                            <Input name="firstName" placeholder='FirstName' label='First Name' handleChange={handleChange}/>
                            <Input name="suffix" placeholder='Suffix' label='Suffix' handleChange={handleChange}/>
                            <Input name="contactNumber" placeholder='Contact Number' label='Contact Number' handleChange={handleChange}/>
                            
                            <Input name="email" placeholder='Email' label='Email' handleChange={handleChange}/>
                            <Input name="position" placeholder='Position' label='Position' handleChange={handleChange}/>
                           
                            </Grid>
                            <Grid container justify="center">
                            <Button type="submit" variant="contained" color="primary">Add</Button>
                            <Button variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
                            </Grid>
                            </form>
                        </Paper>


                    </Container>
        </Dialog>


        <StaffTable/>
        </div>
    )
}
export default Staff;