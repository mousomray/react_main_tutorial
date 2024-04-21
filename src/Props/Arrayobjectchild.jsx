import React from 'react'

const Arrayobjectchild = (props) => {
  return (
    <>
    <h1>I am Array Object Child</h1>
    <ul>
        {props.users.map((user,index)=>(
            <li key={index}>
                Name:{user.name}, Age:{user.age};
            </li>
        ))}
    </ul>
    </>
  )
}

export default Arrayobjectchild
