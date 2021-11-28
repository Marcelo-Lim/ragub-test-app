import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import NavMenu from '../Components/NavBar/NavMenu'

import Home from '../Pages/Home';
import About from '../Pages/About-Us';
import Contact from '../Pages/Contact-Us';
import Login from '../Pages/Login'

const PageRouter = () => {
    return (
        <Router>
            <NavMenu/>
            <Routes>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/' element={<Login/>}/>
                <Route exact path='/About' element={<About/>}/>
                <Route exact path='/Contact' component={Contact}/>
            </Routes>
        </Router>
    )
}

export default PageRouter;