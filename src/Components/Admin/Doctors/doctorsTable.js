import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../../MaterialTable/MaterialTableIcons'
import { Container} from "@material-ui/core";
import CustomRow from './index'
const DoctorsTable =()=>{
    const [data,setData] = useState([]);

    const columns=[
        {
            title: "Doctor's ID", field:"StaffId" 
        },
        {
            title: "Last Name", field:"lastName" 
        },
        {
            title: "First Name", field:"firstName" 
        },
        {
            title: "Middle Name", field:"middleName" 
        },
        {
            title: "Email", field:"email" 
        },
        {
            title: "Contact Number", field:"email" 
        },
        {
            title: "Specialization", field:"doctorsSpeciality" 
        },
       ]
       useEffect(()=>{
        fetch("http://localhost:5000/doctor/doctors/data")
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
              components={{
                  Row: props => <CustomRow {...props}/>
                }}
            />
         </Container>
    )
}
export default DoctorsTable