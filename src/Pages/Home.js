import React,{ useState, useEffect} from "react";
import MaterialTable from "material-table";
import { Container,Paper,Icon,Checkbox,Select,MenuItem } from '@material-ui/core';
import tableIcons from '../Components/MaterialTable/MaterialTableIcons'
import CustomRow from '../OwnerComponents/Staffs/Appointments/Appointments';
import './Home.css';

const Home = () => {
    const [data,setData] = useState([]);
    const [filteredData,setFilteredData]=useState(data)
    const [filter, setFilter]=useState(true);
    const [stats,setStats]=useState('Cancelled');
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


    useEffect(()=>{
        setFilteredData(data.filter(d=>d.appointmentStatus === 'Pending' ));
        
    },[data])

    // handle


    return (
        <Container className="home-container" component ="main" maxWidth="md">
            <h2 className="h2appointment">Appointments</h2>

        <MaterialTable 
            icons={tableIcons}
                title="Pending Appoinments"
                data={filteredData}
                columns={columns}
                components={{
                Row: props => <CustomRow {...props}/>
                }}
            
        />
        </Container>
    )
}

export default Home;