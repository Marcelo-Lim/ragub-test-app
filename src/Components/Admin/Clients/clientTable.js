import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import { Container} from "@material-ui/core";
import tableIcons from '../../MaterialTable/MaterialTableIcons';
import CustomRow from './index';

const ClientsTB = () =>{
    const [data,setData] = useState([]);
    const columns=[
        {
            title: "Last Name", field:"lastName" 
        },
        {
            title: "First Name", field:"firstName" 
        },
        {
            title: "Email", field:"email"
        },
        {
            title: "Contact Number", field:"contactNumber"
        },
        {
            title: "Actions",width: "3%"
        }]

        useEffect(()=>{
            fetch("http://localhost:5000/user/info")
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
export default ClientsTB