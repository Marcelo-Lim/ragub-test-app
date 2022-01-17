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

const Reports = () => {
const classes = useStyles();
const [searchData,setSearchData]= useState('');
const [data,setData] =useState([])
useEffect(function () {
    fetch("http://localhost:5000/appointment/appointmentsss")
    .then(resp=>resp.json())
    .then(resp=>setData(resp))
})

const options = ['Pending Appointments', 'Approved Appointments', 'Declined Appointments'];

const [open, setOpen] = React.useState(false);
const anchorRef = React.useRef(null);
const [selectedIndex, setSelectedIndex] = React.useState(0);

const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
};

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


    return (
        <div>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={5}>
                    <Typography className={classes.typo1}>Reports</Typography>
                        <InputBase
                            className={classes.input}
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="..Search Patient"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(event)=>{
                                setSearchData(event.target.value);
                            }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon className={classes.icon} />
                        </IconButton>

                        <Grid className={classes.splitbtngrid}>
                        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
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


                        {data.filter((appointment)=>{
                            if(searchData==''){
                                return appointment
                            }
                            else if(appointment.firstName.toLowerCase().includes(searchData.toLowerCase())){
                                return appointment
                            }
                        }).map((appointment,index) => (
                            

                            <Grid item key={index} xs={12} >
                    {appointment.appointmentStatus === 'Approved' ?
                    (

                <Card className={classes.card1 }>
                    
                    <CardContent>
                    <Typography className={classes.typo4} >{appointment.firstName},{appointment.lastName}</Typography>
                    <Typography className={classes.typo4} >{appointment.concerns}</Typography>
                    <Typography className={classes.typo4} >{appointment.concernType}</Typography>
                        <Typography className={classes.typo4}>{moment(appointment.dateAndTime).format('D MMM YYYY')}</Typography>
                        <Typography className={classes.typo4} >{moment(appointment.dateAndTime).format('h:mm a')}</Typography>
                        {/* <Typography className={classes.typo4}>{appointment.appointmentStatus}</Typography>
                        <Typography className={classes.typoIcon}>
                        {appointment.dateAndTime === new Date().toISOString() ? <Typography>Green</Typography>:<Typography>Red</Typography>}
                        <Button  variant="contained" >See Details</Button>
                            
                        </Typography>*/}
                </CardContent>
            </Card>
                ):  null}
                    </Grid>
                        ) )}
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
    }

}))
export default Reports;