import React,{useState,useEffect} from 'react';
import StaffTable from '../OwnerComponents/Staffs/StaffTable'
import { Container,Paper,Grid,Icon,Checkbox,Select,MenuItem ,Button,
Dialog,DialogTitle,} from '@material-ui/core';
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';
import Input from '../OwnerComponents/Staffs/StaffInput'
import { newStaffData } from '../Components/Connections/Action/staffs';

const initialState = {firstName:'',
                        lastName:'',
                        suffix:'',
                        contactNumber:'',
                        email:'',
                        position:''}

const Staff = () =>{
    const [open,setOpen] = useState(false);
    const [staffId,setStaffId] = useState([]);
    const [form,setForm] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClose = () =>{
        setOpen(false);
    }
    const handleClickOpen =()=>{
        setOpen(true);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(newStaffData(form,navigate))
      console.log(form);
       
    }

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
                            
                            <Input name="lastName" placeholder='Last Name' label='Last Name' handleChange={handleChange} autoFocus/>
                            <Input name="firstName" placeholder='FirstName' label='First Name' handleChange={handleChange}/>
                            <Input name="suffix" placeholder='Suffix' label='Suffix' handleChange={handleChange}/>
                            <Input name="contactNumber" placeholder='Contact Number' label='Contact Number' handleChange={handleChange}/>
                            
                            <Input name="email" placeholder='Email' label='Email' handleChange={handleChange}/>
                            <Input name="position" placeholder='Position' label='Position' handleChange={handleChange}/>
                           
                            </Grid>
                            <Grid container justify="center">
                            <Button type="submit" variant="contained" color="primary">Add</Button>
                            <Button variant="contained" color="primary">Cancel</Button>
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