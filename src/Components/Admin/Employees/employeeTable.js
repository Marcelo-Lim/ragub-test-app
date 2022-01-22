import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import { Container} from "@material-ui/core";
import tableIcons from '../../MaterialTable/MaterialTableIcons';


const Employees =() =>{

    const [data,setData] = useState([]);

    const columns=[
        {
            title: "Employee Number", field:"StaffId" 
        },
        {
            title: "Last Name", field:"lastName" 
        },
        {
            title: "First Name", field:"firstName" 
        },
        {
            title: "Position", field:"position"
        },
        {
            title: "Contact Number", field:"contactNumber"
        },  {
            title: "Email", field:"email"
        },
        {
            title: "Actions"
        }]

        useEffect(()=>{
            fetch("http://localhost:5000/staff/staffdatas")
            .then(resp => resp.json())
            .then(resp => setData(resp))
        })

    return(
        <Container component="main" maxWidth="lg">
    
                   
              <MaterialTable  
                icons={tableIcons}
                title="Information"
                data={data}
                columns={columns}
            />
        </Container>
    )
}

export default Employees