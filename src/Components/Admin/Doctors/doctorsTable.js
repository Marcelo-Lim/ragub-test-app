import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../../MaterialTable/MaterialTableIcons'
import { Container} from "@material-ui/core";
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
            //   components={{
            //       Row: props => <CustomRow {...props} handleClickedOpen={handleClickedOpen} handleClickedOpenDelete={handleClickedOpenDelete} handleClickedOpenView={handleClickedOpenView}/>
            //     }}
            />
         </Container>
    )
}
export default DoctorsTable