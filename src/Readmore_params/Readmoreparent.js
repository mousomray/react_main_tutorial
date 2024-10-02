import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Post from './Post'
import Readmore from './Readmore'

const Readmoreparent = () => {
  return (
    <>
      <Router>
       <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/readmore/:id' element={<Readmore/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Readmoreparent
