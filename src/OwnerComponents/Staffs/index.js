import React, { useState } from 'react'
import { Grid, IconButton } from '@material-ui/core'
import { MTableBodyRow } from 'material-table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import {deleteDeduction} from '../../Components/Connections/Action/staffs'

const CustomRow = (props) => {
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
            <IconButton title="Edit" onClick={()=>alert(props.index)}>
             <EditIcon />
               </IconButton>
               <IconButton title="Delete" onClick={()=>dispatch(deleteDeduction(props.data._id))}>
                    <DeleteIcon />
                </IconButton>
            </Grid>

        </Grid>}
       
        <MTableBodyRow {...props} />




    </Grid>
    )
}
 export default CustomRow