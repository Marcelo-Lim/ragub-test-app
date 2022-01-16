import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Grid, IconButton } from '@material-ui/core'
import { MTableBodyRow } from 'material-table'
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from 'react-redux';
import {cancelAppointment} from '../../../Components/Connections/Action/appointments';
const CustomRow = (props) => {
    const [appointmentStatus, setAppointmentStatus]=useState({ appointmentStatus:'Approved'})
    const dispatch = useDispatch();
   
 const [show,setShow]=useState(false);
 
 
    const overlayStyle = { width: "100%", position: "absolute" }



    
    return (
    <Grid style={{ display: "contents" }} 
    onMouseOver={()=>setShow(true)}
    onMouseLeave={()=>setShow(false)}
    >
        {show&&<Grid align="right" style={overlayStyle}>

                <Grid sm={2} align="center" style={{ background: "#ffffff" }}>
            <IconButton title="Edit" onClick={()=>dispatch(cancelAppointment(props.data._id,{...appointmentStatus})) && props.handleEmailSubmit(props.data)}>
             <CheckIcon />
               </IconButton>
               {/* <IconButton title="Delete" onClick={()=>console.log(props.index)}>
                    <CancelIcon />
                </IconButton> */}
            </Grid>

        </Grid>}
       
        <MTableBodyRow {...props} />




    </Grid>
    )
}
 export default CustomRow