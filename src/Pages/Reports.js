import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Typography, Button,
    Paper, Container, Grid, Card,CardContent,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, TextField} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { COLORS } from "../Styles/colors";
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MaterialTable from "material-table";
import tableIcons from '../Components/MaterialTable/MaterialTableIcons'

const Reports = () => {
const classes = useStyles();
const [searchData,setSearchData]= useState('');
const [data,setData] =useState([])
const [appointment,setAppointment] =useState([])
useEffect(function () {
    fetch("https://sdmc-clinic.herokuapp.com/appointment/appointmentsss")
    .then(resp=>resp.json())
    .then(resp=>setData(resp))
    .then(setAppointment(data))
})

const options = ['Pending Appointments', 'Approved Appointments', 'Declined Appointments'];

const [open, setOpen] = React.useState(false);
const anchorRef = React.useRef(null);
const [selectedIndex, setSelectedIndex] = React.useState(0);

const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
};

const handleToggle = () => {
    
    setOpen((prevOpen) => !prevOpen);
};

const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    return;
    }

    setOpen(false);
};

const setFilter = (filter) => {
    var length = appointment.length
    var report = []
    for (var i = 0; i < length; i++) {
        var status = appointment[i].appointmentStatus + " Appointments"
        if(filter == status) {
            report.push(appointment[i])
        }
    }
    setData(report)
    console.log(data)

};

const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    setFilter(`${options[selectedIndex]}`)
};

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
        lookup: { Pending: 'Pending', Approved: 'Approved', Cancelled: "Cancelled" },
    },
    
];




    return (
        <div>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={5}>
                    <Typography className={classes.typo1}>Reports</Typography>
                        <Grid className={classes.splitbtngrid}>
                        <ButtonGroup className={classes.btngroup} variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="Appointments"
            aria-haspopup="menu"
            onClick={handleToggle}
        >
            <ArrowDropDownIcon />
        </Button>
        </ButtonGroup>
        <div className={classes.materialtbl} style={{ height: 400, width: '100%',  }}>
                            <MaterialTable  
                            icons={tableIcons}
                            title="Staff Information "
                            data={data}
                            columns={columns}
                            options={{
                                filtering: true
                            }}
                            
                        />
                            </div>

        <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        >
        {({ TransitionProps, placement }) => (
            <Grow
            {...TransitionProps}
            style={{
                transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
            >
            <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                    ))}
                </MenuList>
                </ClickAwayListener>
            </Paper>
            </Grow>
        )}

        </Popper>

        </Grid> 
                                
               
                
                        
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

    splitbtngrid: {
        marginBottom: "25px",
    },

    btngroup: {
        zIndex: "-1",
    },

    materialtbl: {
        marginTop: "50px",
        zIndex: "-1",
    }

}))
export default Reports;