import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Grid, IconButton } from '@material-ui/core'
import { MTableBodyRow } from 'material-table'
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import BeenhereTwoToneIcon from '@mui/icons-material/BeenhereTwoTone';
import PreviewIcon from '@mui/icons-material/Preview';
import { useDispatch } from 'react-redux';

const CustomRow = (props) => {
    const dispatch = useDispatch();
    const [show,setShow]=useState(true);
    const overlayStyle = { width: "100%", position: "absolute" }
    const [open,setOpen] = useState(false);
    return(
        <Grid style={{ display: "contents" }} 
            onMouseOver={()=>setShow(true)}
            onMouseLeave={()=>setShow(true)}
            >
              {show&&<Grid align="right" style={overlayStyle}>

                    <Grid sm={2} align="center" style={{ background: "#ffffff" }}>
                      
                        <IconButton title="Doctor Search" onClick={()=>props.handleOpen(props.data)}>
                        <PersonSearchIcon/>
                        </IconButton>
                        <IconButton title="Approve Appointment" onClick={()=>props.handleOpenEmail(props.data)}>
                        <BeenhereTwoToneIcon/>
                        </IconButton>
                        <IconButton title="View Appointment" onClick={()=>props.handleOpenView(props.data)}>
                        <PreviewIcon/>
                        </IconButton>
                       
                      </Grid>
                 </Grid>}
              <MTableBodyRow {...props} />
         </Grid>
    )
}
export default CustomRow