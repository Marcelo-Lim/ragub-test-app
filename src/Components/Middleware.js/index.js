import React,{useState} from 'react'
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, TextField} from "@material-ui/core";

import { useNavigate, useNavigationType } from 'react-router';
import Admin from '../../Components/Admin/Admin/admin'
import EmployeeHome from '../Employee/Employee/employeeHome.js';

const MiddleAccess = () =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   
       if(user?.result.position === 'Administrator'){
        return( 
            <Admin/>
        )
         }
       else if(user?.result.position !== 'Administrator'){
            return(
                <EmployeeHome/>
            )
        }
}
export default MiddleAccess;