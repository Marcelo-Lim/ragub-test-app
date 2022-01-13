import React,{Fragment} from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import NavMenu from '../Components/NavBar/NavMenu'

import Home from '../Pages/Home';
import Doctor from '../Pages/Doctors';
import Login from '../Pages/Login';
import Staff from '../Pages/Staff';
import DoctorHome from '../Pages/DoctorHome';


const PageRouter = () => {
    return (
        <Router>    
            <NavMenu/>
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/' element={<Login/>}/>
                <Route exact path='/Staff' element={<Staff/>}/>
                <Route exact path='/Doctor' element={<Doctor/>}/>
                <Route exact path='/DoctorHome' element={<DoctorHome/>}/>
            </Routes>
        
        </Router>
    )
}

export default PageRouter;