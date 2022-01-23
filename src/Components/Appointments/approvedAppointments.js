import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import { Container} from "@material-ui/core";
import tableIcons from '../MaterialTable/MaterialTableIcons';
import CustomRow from './index2'

const ApprovedAppointments =() =>{
    const [data,setData] = useState([]);
    const [filteredData,setFilteredData]=useState(data)
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
        },
        {
            title:"Action"
        }
    ]
    useEffect(()=>{
        fetch("http://localhost:5000/appointment/appointmentsss")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })
    useEffect(()=>{
        setFilteredData(data.filter(d=>d.appointmentStatus === 'Approved' ));
        
    },[data])
    return (
        <Container component="main" maxWidth='xl'>
             <MaterialTable 
            icons={tableIcons}
                title="Approved Appoinments"
                data={filteredData}
                columns={columns}
                components={{
                Row: props => <CustomRow {...props}/>
                }} 
        />
        </Container>
    )
}
export default ApprovedAppointments