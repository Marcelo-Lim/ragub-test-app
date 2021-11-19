import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About-Us';
import Contact from '../Pages/Contact-Us';

const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' component={Home}/>
                <Route exact path='/About' component={About}/>
                <Route exact path='/Contact' component={Contact}/>
            </Routes>
        </Router>
    )
}

export default PageRouter;