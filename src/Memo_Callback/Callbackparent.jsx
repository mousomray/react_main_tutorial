import React, { useCallback, useState } from 'react'
import Child from './Callbackchild'

const Parent = () => {
    const [count, setCount] = useState(0)
    let [arr, setArr] = useState([])

    const increment = () => {
        setCount(count + 1)
    }
    // console.log(count);

    // let myFunction = useCallback(() => {
    //     setArr((data) => [...data, `my name is ...`])
    // }, [arr])

    const myFunction=()=>{
        setArr((data)=> [...data,`my name is ...`])
    }


    return (
        <>

            <h1>This is Parent Component</h1>


            <Child arr={arr} myFunction={myFunction} /><hr />


            <h2>{count}</h2>

            <button onClick={increment}>Increasehkghdsf</button>


        </>
    )
}

export default Parent