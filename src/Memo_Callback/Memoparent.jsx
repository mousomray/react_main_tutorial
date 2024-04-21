import React, { useState } from 'react'
import Child from './Memochild'

const Parent = () => {
    const[count, addCount] = useState(0);

const increase = () =>{
    addCount(count + 1);
}
  return (
    <>
      <h1>I am Parent</h1>
      <Child name="pritam"/>



      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </>
  )
}

export default Parent


