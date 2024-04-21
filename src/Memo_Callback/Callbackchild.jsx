import React , {memo}from 'react'

const Child = ({arr,myFunction}) => {

    console.log('I am Child componnent arr',arr);
    

  return (
    <>

        <h1>This is child component</h1>
        {
            Array.isArray(arr)&& arr.map((item,key)=>{
                return (
                    <>
                    <p> {item +key}</p>
                    
                    </>
                )
            })
        }
       

        <button onClick={myFunction}>update child</button>

    </>
  )
}

export default memo(Child) 