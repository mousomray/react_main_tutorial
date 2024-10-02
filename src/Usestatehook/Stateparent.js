import React from 'react'
 import State from './State';
 import Counter from './Counter';
 import Changecolor from './Changecolor';

const Stateparent = () => {
  return (
    <>
      <State/>
      <Counter/>
      <Changecolor/>
    </>
  )
}

export default Stateparent
