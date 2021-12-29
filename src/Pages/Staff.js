import React,{useState} from 'react';
import StaffTable from '../OwnerComponents/Staffs/StaffTable'
import { Container,Paper,Icon,Checkbox,Select,MenuItem ,Button,
Dialog,DialogTitle,} from '@material-ui/core';

const Staff = () =>{
    const [open,setOpen] = useState(false);
   
    const handleClose = () =>{
        setOpen(false);
    }
    const handleClickOpen =()=>{
        setOpen(true);
    }
    return(
        <div>
        <h1> Adding Staff </h1>
        <Button onClick={handleClickOpen}>New Staff</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                Add Staff   
                </DialogTitle>
                    <Container component ="main"> 
                        <Paper  elevation={3}>
                        </Paper>
                    </Container>
        </Dialog>


        <StaffTable/>
        </div>
    )
}
export default Staff;