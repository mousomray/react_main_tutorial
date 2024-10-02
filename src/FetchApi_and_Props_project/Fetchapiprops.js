import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import User from './User';
import Details from './Details';

const Fetchapiprops = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/user' element={<User />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </Router>
        </>
    )
}

export default Fetchapiprops
