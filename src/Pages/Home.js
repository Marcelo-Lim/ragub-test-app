import React,{ useState, useEffect} from "react";
import MaterialTable from "material-table";
import { Container,Paper,Icon,Checkbox,Select,MenuItem } from '@material-ui/core';
import tableIcons from '../Components/MaterialTable/MaterialTableIcons'
//import CustomRow from '.';




const Home = () => {
    const [data,setData] = useState([])

    const columns=[
        {
            title: "Patient Name", field: "firstName"
        },
        {
            title: "Email", field:"email"
        },
        {
            title: "Contact Number", field: "contactNumber"
        },
        {
            title: "Date", field: "dateAndTime", type: 'date'
        },
        {
            title: "Time", field: "dateAndTime", type: 'time'
        },
        {
            title: "Status", field:"appointmentStatus"
        }
        

    ]
     
    useEffect(()=>{
        fetch("http://localhost:5000/appointment/appointmentsss")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })

    return (
        <Container component ="main" maxWidth="md">
            <h1>Home</h1>
            <h2>Appointments</h2>
          
        <MaterialTable 
            icons={tableIcons}
             title="Pending Appoinments"
             data={data}
             columns={columns}
             
            
         />
      
         </Container>
       
    )
}

export default Home;