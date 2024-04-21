import React from 'react'
import Pc from './Pc'

const PP = () => {
    const user = [
        {name:'Mousom',age:'23',city:'UPA'},
        {name:'Sourav',age:'24',city:'Makla'},
        {name:'Rabi',age:'20',city:'Kolkata'},
        {name:'Wasim',age:'21',city:'Khamargachi'}
    ];
  return (
   <>
   <h1>I am Parent</h1>
   {user.length > 0 ? <Pc add={user}/> : <p>Module not found</p>}


   </>
  )
}

export default PP
