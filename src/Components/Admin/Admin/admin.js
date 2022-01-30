import React,{useState,useEffect} from "react";
import FileBase64 from 'react-file-base64';
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, TextField} from "@material-ui/core";

const Admin =() =>{
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [values,setValues]=useState([])
     //const [data,setData] =useState([])
     const [filtered,setFilteredDatas]= useState([])
    const [filteredtu,setFilteredDatatu]= useState([])
    const [filteredDate,setFilteredDataDate]= useState([])
    const [data,setData] =useState([])
    const [open,setOpen]= useState(false)
    const [drops,setDrops] = useState([])
    const [filteredData,setFilteredData]=useState(data)
    const dates = filteredDate.length
    const pendingNumb = filteredData.length
    const docs = drops.length
    const  [client,setClient] = useState([])
    const clientNo = client.length
    const handleOpen=(data)=>{
      setOpen(true)
      setValues(data)
    }
    const handleClose=()=>{
      setOpen(false)
    }

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    useEffect(()=>{
      fetch("https://sdmc-clinic.herokuapp.com/doctor/doctors/data")
      .then(resp => resp.json())
      .then(resp => setDrops(resp))
  })
  useEffect(()=>{
    fetch("https://sdmc-clinic.herokuapp.com/user/info")
    .then(resp => resp.json())
    .then(resp => setClient(resp))
})
    useEffect(function () {
      fetch("https://sdmc-clinic.herokuapp.com/appointment/appointmentsss")
      .then(resp=>resp.json())
      .then(resp=>setData(resp)) 
    })
    useEffect(()=>{
      setFilteredData(data.filter(d=>d.appointmentStatus === 'Pending' ));
  },[data])

// useEffect(()=>{
//     setFilteredDatas(data.filter(d=>d.doctorsName === user?.result._id));
// },[data])

useEffect(()=>{
    setFilteredDatatu(data.filter(d=>d.doctorsStatus === 'Approved'));
},[data])
useEffect(()=>{
    setFilteredDataDate(filteredtu.filter(d=>d.dateAndTime.split("T")[0] === new Date().toISOString().split("T")[0]));
},[filteredtu])

    return(
        <Container component="main" maxWidth="xl" >
             <Paper className={classes.paper} elevation={0}>
                <Grid container>
                    <Grid item sm={3}>
                        <Paper className={classes.paper1}  elevation={4}>
                        <Typography component="h1" variant="h6">Appointments Today</Typography>
                        <Typography component="h1" variant="h6">{dates}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.paper1} elevation={4}>
                        <Typography component="h1" variant="h6">Pending Appointments</Typography>
                        <Typography component="h1" variant="h6">{pendingNumb}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.paper1} elevation={4}>
                        <Typography  component="h1" variant="h6">Available Doctors</Typography>
                        <Typography component="h1" variant="h6">{docs}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.paper1} elevation={4}>
                        <Typography component="h1" variant="h6">Number of Clients</Typography>
                        <Typography component="h1" variant="h6">{clientNo}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      
      alignItems: 'center',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(10),
      
    },
    paper1:{
        marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100px',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
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

export default Admin