import React from 'react'

const Pc = (props) => {
  return (
    <>
    <h1>I am child</h1>
    <h4>{props.add.map((value,index)=>(
        <div key={index}>
            Name is {value.name} and age is  {value.age} and lived in {value.city}
        </div>

    ))}
    </h4>
    </>
  )
}

export default Pc
