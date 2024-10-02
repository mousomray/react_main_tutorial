import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Blog from './Blog'
import Readmore from './Readmore'

const Blogparent = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Blog />} />
                    <Route path='/readmore/:id' element={<Readmore />} />
                </Routes>
            </Router>
        </>
    )
}

export default Blogparent
