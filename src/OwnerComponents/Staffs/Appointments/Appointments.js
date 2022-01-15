import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Grid, IconButton } from '@material-ui/core'
import { MTableBodyRow } from 'material-table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import {cancelAppointment} from '../../../Components/Connections/Action/appointments';
const CustomRow = (props) => {
    const [appointmentStatus, setAppointmentStatus]=useState({ appointmentStatus:'Approved'})
    const dispatch = useDispatch();
   
 const [show,setShow]=useState(true);
 
 
    const overlayStyle = { width: "100%", position: "absolute" }



    
    return (
    <Grid style={{ display: "contents" }} 
    onMouseOver={()=>setShow(true)}
    onMouseLeave={()=>setShow(false)}
    >
        {show&&<Grid align="right" style={overlayStyle}>

             <Grid sm={2} align="center" style={{ background: "#ffffff" }}>
            <IconButton title="Edit" onClick={()=>dispatch(cancelAppointment(props.data._id,{...appointmentStatus})) && props.handleEmailSubmit(props.data)}>
             <EditIcon />
               </IconButton>
               <IconButton title="Delete" onClick={()=>console.log(props.index)}>
                    <DeleteIcon />
                </IconButton>
            </Grid>

        </Grid>}
       
        <MTableBodyRow {...props} />




    </Grid>
    )
}
 export default CustomRow