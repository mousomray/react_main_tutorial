import { useState } from 'react'

const State = () => {
    const defaultName = "Mousom"

    const [myName, setMyName] = useState(defaultName)

    const changeName = () => {
        setMyName("Virat")
    }

    const revertName = () => {
        setMyName(defaultName)
    }

    return (
        <>
            <h1>Use State Hooks {myName}</h1>
            <button className='btn' onClick={changeName}>Click-me</button>
            <button className='btn' onClick={revertName}>Revert</button>
        </>
    )
}

export default State
