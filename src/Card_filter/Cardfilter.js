import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Product from './Product'
import Productdetails from './Productdetails'
import Categorydetails from './Categorydetails';

const Cardfilter = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Product />} />
                    <Route path='/productdetails/:id' element={<Productdetails />} />
                    <Route path='/categorydetails/:slug' element={<Categorydetails />} />
                </Routes>
            </Router>
        </>
    )
}

export default Cardfilter
