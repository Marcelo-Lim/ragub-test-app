import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import { Typography, makeStyles,Button,
    Paper, Container, Grid,IconButton,InputAdornment, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,
    DialogTitle, TextField,FormControlLabel,MenuItem} from "@material-ui/core";
import tableIcons from '../../MaterialTable/MaterialTableIcons';
import CustomRow from './index';

const ClientsTB = () =>{
    const [data,setData] = useState([]);
    const classes = useStyles()
    const [open,setOpen] = useState(false);
    const [values,setValues] = useState([])

    const handleOpen=(data)=>{
        setOpen(true)
        setValues(data)
    }
    const handleClose=()=>{
        setOpen(false)
    }
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
                Row: props => <CustomRow {...props} handleOpen={handleOpen}/>
              }}
             />

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <Container component="main" maxWidth='lg'>
                        <DialogTitle>
                            <div className={classes.division}>
                            <Typography className={classes.details}>Client's Information</Typography>
                            </div>
                        </DialogTitle>
                        <Grid container spacing={2} justify="center">
                        
                        <Grid item xs={12} >
                           
                            <Typography className={classes.subdetails}> Name:</Typography>
                            <Typography > {values.suffix === 'undefined'? values.lastName +", "+ values.firstName +" "+values.middleName:values.lastName +" "+values.suffix+", "+ values.firstName +" "+values.middleName}</Typography>
                            <Typography className={classes.subdetails}>Contact Number:</Typography>
                            <Typography >{values.contactNumber}</Typography>
                            <Typography className={classes.subdetails}>Email Address:</Typography>
                            <Typography >{values.email}</Typography>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Typography className={classes.subdetails}>Doctor's Specification:</Typography>
                            <Typography >{values.doctorsSpeciality}</Typography>
                        </Grid> */}
                    </Grid>
                    <DialogActions>
                            <Button variant="contained" color="primary" onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </Container>
            </Dialog>
        </Container>
    )
}
const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 1, 2),
      },
      details: {
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "bold",
    },

    division: {
        borderBottom: "3px solid red"
    },

    subdetails: {
        fontWeight: "bold",
    },
  }));
export default ClientsTB