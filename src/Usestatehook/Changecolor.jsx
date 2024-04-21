import React from 'react'
import { useState } from 'react'

const Changecolor = () => {

    const[piller,changable] = useState('black'); {/*useState always stored in first variable  in this case 'piller'*/}

    const red = () =>{
        changable('red');
    }

    const orange = () =>{
        changable('orange');
    }

    const back = () =>{
        changable('black');
    }
  
  
    return (
    <>
    <div style={{backgroundColor:piller,height:'200px'}}>

    </div>
    <button className='btn' onClick={red}>Red</button>
    <button className='btn' onClick={orange}>Orange</button>
    <button className='btn' onClick={back}>Back</button>
    </>
  )
}

export default Changecolor
