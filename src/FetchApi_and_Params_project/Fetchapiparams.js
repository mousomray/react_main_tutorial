import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Product from './Product';
import Productdetails from './Productdetails';

const Fetchapiparams = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/productdetails/:id" element={<Productdetails />} />
                </Routes>
            </Router>
        </>
    )
}

export default Fetchapiparams
