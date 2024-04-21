import React, { memo } from 'react'


const Child = (name) => {

console.log("I am child",name);

  return (
    <>
      <h1>I am Child</h1>
      
    </>
  )
}

export default memo(Child)


