import React, { useEffect, useState } from 'react'

const Counter = () => {
  
    const [counttime,setCount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000)
    },[]);   // Blank Array use to stop counting
  
    return (
    <>
    <h1>Set time out example using useEffect hooks</h1>
    <h1>stats count down {counttime}</h1>
    </>
  )
}

export default Counter
