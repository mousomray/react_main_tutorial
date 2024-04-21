import React from 'react'
import Numberchild from './Numberchild'

const Numberparent = () => {
  return (
   <>
   <h1>I am Number Parent</h1>
   <Numberchild add={5+4} mul={5*4}/>
   </>
  )
}

export default Numberparent
