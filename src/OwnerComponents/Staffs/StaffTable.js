import React,{useState,useEffect} from 'react';
import MaterialTable from "material-table";

import tableIcons from '../../Components/MaterialTable/MaterialTableIcons'
import { Container,Paper,Icon,Checkbox,Select,MenuItem,Typography } from '@material-ui/core';
import CustomRow from '.';
import { useDispatch } from 'react-redux';
import {deleteDeduction} from '../../Components/Connections/Action/staffs';

  

const StaffTable=()=> {
    const [data,setData] = useState([])
    const dispatch = useDispatch();
    const numberId = 10000000;
    const dataNums = data.length;

    const columns=[
        {
            title: "Staff Name", field:"StaffId" 
        },
        {
            title: "Staff Last Name", field:"lastName" 
        },
        {
            title: "Email", field:"email"
        },
        {
            title: "Contact Number", field:"contactNumber"
        },
       
        

    ]
    useEffect(()=>{
        fetch("http://localhost:5000/staff/staffdatas")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })
     const handleDelete = (_id) =>{
         alert(_id);
     }
            return(

                <Container component ="main" maxWidth="md">
            
                    <Typography>{dataNums + numberId + 1}</Typography>
            
                        <MaterialTable  
                            icons={tableIcons}
                            title="Staff Information "
                            data={data}
               
                            columns={columns}
                            components={{
                               Row: props => <CustomRow {...props} handleDelete={handleDelete}/>
                             }}
                        />

                 </Container>
            )
}
export default StaffTable;