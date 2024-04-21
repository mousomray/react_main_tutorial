import React from 'react'
import createcontext from './Createcontext'

const Getcontext = ({children}) => {
    const user={
        name: "Mousom",
        phone: '9903419235',
        email:"mousom@gmail.com",
        city:"Kolkata"
    }


  return (
    <>
      <createcontext.Provider value={user}>
        {children}
      </createcontext.Provider>
    </>
  )
}

export default Getcontext
