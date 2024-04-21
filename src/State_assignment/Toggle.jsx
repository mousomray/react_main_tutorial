import React from 'react'
import { useState } from 'react'

const Toggle = () => {
 
    const [piller,changable] = useState('Mousom');
 
    const change =() =>{
        if(piller === 'Mousom'){
            changable('Sudip');
        }else{
            changable('Mousom');
        }
    }
 
 
    return (
    <>
    <h1>My name is {piller}</h1>
    <button className='btn' style={{backgroundColor:'blue',color:'white'}} onClick={change}>Change</button>
    </>
  )
}

export default Toggle
