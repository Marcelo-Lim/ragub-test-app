import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../../MaterialTable/MaterialTableIcons'
import { Typography, makeStyles,Button,
    Paper, Container, Grid,IconButton,InputAdornment, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,
    DialogTitle, TextField,FormControlLabel,} from "@material-ui/core";
    import { useDispatch } from "react-redux";
import CustomRow from './index'
import { updateDoctorStat } from '../../Connections/Action/doctors';
const DoctorsTable =()=>{
   const dispatch = useDispatch(); 
    const classes= useStyles()
    const [data,setData] = useState([]);
    const [filteredData,setFilteredData]=useState(data)
    const [openDelete,setOpenDelete] = useState(false)
    const [openView,setOpenView] = useState(false);
    const [stats,setStats] = useState({doctorStats:'Deactivate'})
    const [values,setValues]= useState([])

    const handleOpenDelete =(data)=>{
        setOpenDelete(true);
        setValues(data)
    }
    const handleCloseDelete =(data)=>{
        setOpenDelete(false)
    }
    const handleDelete=()=>{
      dispatch(updateDoctorStat(values._id,{...stats}))
      
    }
    const handleOpenView =(data)=>{
        setOpenView(true)
        setValues(data)
    }
    const handleCloseView =()=>{
        setOpenView(false)
    }

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
        {
            title: "Email", field:"email" 
        },
        {
            title: "Contact Number", field:"email" 
        },
        {
            title: "Specialization", field:"doctorsSpeciality" 
        },
       ]
       useEffect(()=>{
        fetch("https://sdmc-clinic.herokuapp.com/doctor/doctors/data")
        .then(resp => resp.json())
        .then(resp => setData(resp))
    })
    useEffect(()=>{
      setFilteredData(data.filter(d=>d.doctorStats === 'Active' ));
      
  },[data])

    return(
        <Container component="main" maxWidth="lg">          
            <MaterialTable  
            icons={tableIcons}
            title="Information"
            data={filteredData}
            columns={columns}
              components={{
                  Row: props => <CustomRow {...props} handleOpenDelete={handleOpenDelete} handleOpenView={handleOpenView}/>
                }}
            />

        <Dialog open={openDelete} onClose={handleCloseDelete} aria-labelledby="form-dialog-title">
        <DialogTitle>
                          <Typography component="h1" variant="h5"  className={classes.addstaff}>Delete Information</Typography>
                      </DialogTitle>'
                      <Container component ="main" maxWidth="sm">
                      <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography component="h3" variant="h6"  >Are you sure you want to delete this information?</Typography>
                            </Grid>
                            <Grid item xs={12}>
                        <Typography component="h3" variant="h6">Employee Number: {values.StaffId}</Typography>
                        </Grid>
                      </Grid>
                      <DialogActions>
                          
                      <Button   variant="contained" color="primary" onClick={handleDelete}>Yes</Button>
                        <Button  variant="contained" color="secondary" onClick={handleCloseDelete}>No</Button>
                      </DialogActions>
                      </Container>
    </Dialog>
        <Dialog open={openView} onClose={handleCloseView} aria-labelledby="form-dialog-title">
        <Container component="main" maxWidth='lg'>
                        <DialogTitle>
                            <div className={classes.division}>
                            <Typography className={classes.details}>Doctor's Information</Typography>
                            </div>
                        </DialogTitle>
                        <Grid container spacing={2} justify="center">
                        
                        <Grid item xs={12} >
                            <Typography className={classes.subdetails}> Doctors ID Number:</Typography>
                            <Typography>{values.StaffId}</Typography>
                            <Typography className={classes.subdetails}> Name:</Typography>
                            <Typography > {values.suffix === 'undefined'? values.lastName +", "+ values.firstName +" "+values.middleName:values.lastName +" "+values.suffix+", "+ values.firstName +" "+values.middleName}</Typography>
                            <Typography className={classes.subdetails}>Contact Number:</Typography>
                            <Typography >{values.contactNumber}</Typography>
                            <Typography className={classes.subdetails}>Email Address:</Typography>
                            <Typography >{values.email}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.subdetails}>Doctor's Specification:</Typography>
                            <Typography >{values.doctorsSpeciality}</Typography>
                        </Grid>
                    </Grid>
                    <DialogActions>
                            <Button variant="contained" color="primary" onClick={handleCloseView}>Close</Button>
                        </DialogActions>
                    </Container>
                  </Dialog>
         </Container>
    )
}
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(1),
      
    },
    addbtn: {
       // backgroundColor: COLORS.BLUE,
        color: "white",
        width: "30%",
        marginTop: theme.spacing(6),
        marginRight: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },

    cancelbtn: {
        //backgroundColor: COLORS.BLUE,
        color: "white",
        width: "30%",
        marginTop: theme.spacing(6),
        marginRight: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    buttons:{
        display: 'flex',
        alignItems: 'right',
        flexDirection: 'row',
    },
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
    paper1:{
        marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    numberid: {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1)
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    googleButton: {
      marginBottom: theme.spacing(2),
    },
  }));
export default DoctorsTable