import React, { useState } from 'react'
import { Grid, IconButton } from '@material-ui/core'
import { MTableBodyRow } from 'material-table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PreviewIcon from '@mui/icons-material/Preview';

const CustomRow = (props) => {
    const [show,setShow]=useState(true);
    const overlayStyle = { width: "100%", position: "absolute" }

    return(
        <Grid style={{ display: "contents" }} 
        onMouseOver={()=>setShow(true)}
        onMouseLeave={()=>setShow(true)}
        >
            {show&&<Grid align="right" style={overlayStyle}>
    
                <Grid sm={2} align="center" style={{ background: "#ffffff" }}>
                <IconButton title="Edit" onClick={()=>alert(props.index)}>
                    <PreviewIcon/>
                </IconButton>
                </Grid>
            </Grid>}
            <MTableBodyRow {...props} />
        </Grid>
    )
}
export default CustomRow