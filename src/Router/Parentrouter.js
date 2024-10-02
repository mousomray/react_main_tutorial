import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Service from './Service';

const Parentrouter = () => {
    return (
        <>
            <Router>
                {/* Put Nav always this area */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/service' element={<Service />} />
                </Routes>
                {/* Put Footer always this area */}
            </Router>
        </>
    )
}

export default Parentrouter
