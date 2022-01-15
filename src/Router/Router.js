import React,{useState} from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import NavMenu from '../Components/NavBar/NavMenu'

import Home from '../Pages/Home';
import Doctor from '../Pages/Doctors';
import Login from '../Pages/Login';
import Staff from '../Pages/Staff';
import DoctorHome from '../Pages/DoctorHome';
import ProfileDoctor from '../Pages/ProfileDoctor';


const PageRouter = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    return (
        
        <Router>    
            <NavMenu/>
            <Routes>
                <Route exact path='/home' element={<Home />} />
                
                {/* {user?.result} */}
                {/* <Login/> */}
               
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/' element={(user?.result ? (user?.result.level !== 'Staff' ? <DoctorHome/>:<ProfileDoctor/>): <Login/>)}/>
                
                <Route exact path='/Staff' element={<Staff/>}/>
                <Route exact path='/Doctor' element={<Doctor/>}/>
                <Route exact path='/DoctorHome' element={<DoctorHome/>}/>
                <Route exact path='/profile' element={<ProfileDoctor/>}/>
            </Routes>
        
        </Router>
    )
}

export default PageRouter;