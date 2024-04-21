import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom"; [For NavLink]

import React from 'react'

const Service = () => {
  return (
    <div>
      <h1>Service Page</h1>

      <Link to='/'>Home</Link><br />
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Service
