import React from 'react'
import { useReducer } from 'react'

const Counter = () => {

    
    const reducer = (state, action) => {
        switch (action.type) {
            case "incriment":
                return state + 3
            case "decriment":
                return state - 1
            case "mult":
                return state * 2
            default:
                throw new Error()
        }
    }

    const initialstate = 1;
    const [state, dispach] = useReducer(reducer, initialstate)

    return (
        <>
            <h1>Use Reducer hooks</h1>

            <h1> {state}</h1>

            <button onClick={() => dispach({ type: "incriment" })}>Incriment</button>
            <button onClick={() => dispach({ type: "decriment" })}>DecIncriment</button>
            <button onClick={() => dispach({ type: "mult" })}>Mult</button>
        </>
    )
}

export default Counter
