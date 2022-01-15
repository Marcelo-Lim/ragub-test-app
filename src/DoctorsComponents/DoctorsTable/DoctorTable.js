import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../../Components/MaterialTable/MaterialTableIcons'
import {useDispatch} from 'react-redux';
import { Container,Paper,Icon,Checkbox,Select,MenuItem,Typography } from '@material-ui/core';

const DoctorTable = ()=>{
    const [data,setData] = useState([]);
    const [filteredData,setFilteredData]=useState(data)
    const columns=[
        {
            title: "ID Number", field:"StaffId" 
        },
        {
            title: "Staff Last Name", field:"lastName" 
        },
        {
            title: "Staff First Name", field:"firstName" 
        },
        {
            title: "Specialization", field:"position"
        },
        {
            title: "Contact Number", field:"contactNumber"
        },]

                useEffect(()=>{
                    fetch("http://localhost:5000/staff/staffdatas")
                    .then(resp => resp.json())
                    .then(resp => setData(resp))
                })

                useEffect(()=>{
                    setFilteredData(data.filter(d=>d.level !== 'Staff' ));
                    
                },[data])

        return(
            <Container component ="main" maxWidth="md">
            
            
            <MaterialTable  
                icons={tableIcons}
                title="Doctor Information "
                data={filteredData}
                columns={columns}

            />

            </Container>
        )   
}
export default DoctorTable
