import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom"; [For NavLink]

import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>

      <Link to='/'>Home</Link><br />
      <Link to='/service'>Service</Link>
    </div>
  )
}

export default About
