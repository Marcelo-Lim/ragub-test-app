import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Typography, Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, TextField} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { COLORS } from "../Styles/colors";
import MaterialTable from "material-table";
import tableIcons from '../Components/MaterialTable/MaterialTableIcons'

const Doctor = () => {

const classes = useStyles();
const [searchData,setSearchData]= useState('');
const [data,setData] =useState([])
useEffect(function () {
    fetch("https://sdmc-clinic.herokuapp.com/appointment/appointmentsss")
    .then(resp=>resp.json())
    .then(resp=>setData(resp))

})

const columns = [
    { field: 'firstName', title: 'Name', width: 160 },
    { field: 'concerns', title: 'Concern', width: 200 },
    { field: 'concernType', title: 'Concern Type', width: 150 },
    {
        field: 'dateAndTime',
        title: 'Date and Time',
        width: 150,
    },
    {
        field: 'appointmentStatus',
        title: 'Status',
        sortable: false,
        width: 100,
    },
];





    return (
        <div>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={5}>
                    <Typography className={classes.typo1}>Doctor's Patient Records</Typography>
                        {/* <InputBase
                            className={classes.input}
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="..Search Patient"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(event)=>{
                                setSearchData(event.target.value);
                            }}
                        /> */}
                        {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon className={classes.icon} />
                        </IconButton>
                        {data.filter((appointment)=>{
                            if(searchData==''){
                                return appointment
                            }
                            else if(appointment.firstName.toLowerCase().includes(searchData.toLowerCase())){
                                return appointment
                            }
                        }).map((appointment,index) => (

                            
                        ) )} */}

<div style={{ height: 400, width: '100%' }}>
                            <MaterialTable  
                            icons={tableIcons}
                            title="Staff Information "
                            data={data}
               
                            columns={columns}
                            
                        />
                            </div>

                </Paper> 
            </Container>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({

    typo1: {
        fontSize: "40px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
        paddingTop: "10px",
        marginBottom: "25px",
    },

    paper: {
        marginTop: "50px",
        marginLeft: "50px",
        marginRight: "50px",
        textAlign: "center",
        backgroundColor: COLORS.WHITE,
    },

    container: {
        marginBottom: "100px",
    },

    input: {
        border: "1px solid",
        backgroundColor: COLORS.WHITE,
        marginBottom: "50px",
        
    },

    icon: {
        
        color: COLORS.BLACK,
        width: "100%",
    },

    card1: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }

}))
export default Doctor;