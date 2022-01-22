import React,{useState} from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Admin } from '../Components/Admin/Admin/admin';
import Login from '../Components/Login/Login';
import Admins from '../Components/Admin/Admin/admin'
import NavMenu from '../Components/NavBar/NavMenu'
import MiddleAcc from  '../Components/Middleware.js/index';
import Employee from '../Components/Admin/Employees/employees'
import Doctor from '../Components/Doctors/doctor';
import EmployeeHomes from '../Components/Employee/Employee/employeeHome';
import ClientHome from '../Components/Admin/Clients/clients'


const PageRouter = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
   
    if(!user?.result){
   
        return (
            
            <Router>  
                 <NavMenu/>
                <Routes>
                <Route exact path='/'  element={<Login/>}/>
                <Route exact path='/login'  element={<Login/>}/>
                <Route exact path='/admin' element={<Admins/>}/>
                <Route exact path='/employee' element={<EmployeeHomes/>}/>
                <Route exact path='/middles' element={<MiddleAcc/>}/>
                </Routes>
            
            </Router>
        )
    }
    else if(user?.result){
      
        return(
        <Router>
            <NavMenu/>    
            <Routes>
               <Route exact path='/'  element={<Admins/>}/>
               <Route exact path='/home'  element={<Admins/>}/>
               <Route exact path='/login'  element={<Login/>}/>
               <Route exact path='/middles' element={<MiddleAcc/>}/>
               <Route exact path='/employee' element={<EmployeeHomes/>}/>
               <Route exact path='/doctorsPanel' element={<Doctor/>}/>
               <Route exact path='/employeePanel' element={<Employee/>}/>
               <Route exact path='/clientsPanel' element={<ClientHome/>}/>
            </Routes>
        
        </Router>
        )
       
    }
    
}

export default PageRouter;