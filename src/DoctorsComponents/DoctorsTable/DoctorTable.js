import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../../Components/MaterialTable/MaterialTableIcons'
import {useDispatch} from 'react-redux';
import { Container,Paper,Icon,Checkbox,Select,MenuItem,Typography } from '@material-ui/core';

const DoctorTable = ()=>{
  
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
                },]
        return(
            <Container component ="main" maxWidth="md">
            
              
            
            <MaterialTable  
                icons={tableIcons}
                title="Doctor Information "
               // data={data}
   
                columns={columns}
               
            />

     </Container>
        )   
}
export default DoctorTable
