import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom"; [For NavLink]

import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to='/about'>About</Link><br />
      <Link to='/service'>Service</Link>
    </div>
  )
}

export default Home
