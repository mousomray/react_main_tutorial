import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Cards from './Cards'
import Details from './Details'

const Nestedparent = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/details/:id1/:id2' element={<Details />} />
        </Routes>
      </Router>
    </>
  )
}

export default Nestedparent
