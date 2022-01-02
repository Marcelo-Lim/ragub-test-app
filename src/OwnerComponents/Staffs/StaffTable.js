import React,{useState,useEffect} from 'react';
import MaterialTable from "material-table";

import tableIcons from '../../Components/MaterialTable/MaterialTableIcons'
import { Container,Paper,Icon,Checkbox,Select,MenuItem } from '@material-ui/core';
import CustomRow from '.';



  

const StaffTable = () =>{
    const [data,setData] = useState([]);
    const columns=[
        {
            title: "Staff Name", field:"firstName"
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

            return(

                <Container component ="main" maxWidth="md">
            
            
            
                        <MaterialTable 
                            icons={tableIcons}  
                            title="Staff Informations"
                            data={data}
                            columns={columns}
                            components={{
                                Row: props => <CustomRow {...props}/>
                              }}
                        />

                 </Container>
            )
}
export default StaffTable;