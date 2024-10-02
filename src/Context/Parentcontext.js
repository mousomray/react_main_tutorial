import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Getcontext from './Getcontext';
import Nav from './Nav'
import User from './User';
import Student from './Student';

const Parentcontext = () => {
    return (
        <>
            <Getcontext>
                <Router>
                    <Nav />
                    <Routes>
                        <Route path='/' element={<User />} />
                        <Route path='/student' element={<Student />} />
                    </Routes>
                </Router>
            </Getcontext>
        </>
    )
}

export default Parentcontext
