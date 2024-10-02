import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Home from './Home'
import Trending from './Trending'

const Newsparent = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/trending' element={<Trending />} />
                </Routes>
            </Router>
        </>
    )
}

export default Newsparent
