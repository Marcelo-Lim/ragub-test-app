import React,{ useState, useEffect} from "react";
import MaterialTable from "material-table";
import emailjs from 'emailjs-com'
import { Container,Paper,Icon,Checkbox,Select,MenuItem } from '@material-ui/core';
import tableIcons from '../Components/MaterialTable/MaterialTableIcons'
import CustomRow from '../OwnerComponents/Staffs/Appointments/Appointments';
import { cancelAppointment } from "../Components/Connections/Action/appointments";
import './Home.css';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [data,setData] = useState([]);
    const [filteredData,setFilteredData]=useState(data)
    const [appointmentStatus, setAppointmentStatus]=useState({ appointmentStatus:'Approved'})
    const dispatch = useDispatch();
    
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
        fetch("https://sdmc-clinic.herokuapp.com/appointment/appointmentsss")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })


    useEffect(()=>{
        setFilteredData(data.filter(d=>d.appointmentStatus === 'Pending' ));
        
    },[data])

   const handleEmailSubmit=(data)=>{
        emailjs.send('service_vdtmbb6','template_mbwqyzp',data,'user_Pja1vFlc7jtiv7rvHzl6w')
        //dispatch(cancelAppointment(data._id,{...appointmentStatus}))
        console.log(data);
    }

    return (
        <Container className="home-container" component ="main" maxWidth="md">
            <h2 className="h2appointment">Appointments</h2>

        <MaterialTable 
            icons={tableIcons}
                title="Pending Appoinments"
                data={filteredData}
                columns={columns}
                components={{
                Row: props => <CustomRow {...props} handleEmailSubmit={handleEmailSubmit}/>
                }}
            
        />
        </Container>
    )
}

export default Home;