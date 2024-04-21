import React, { useContext } from 'react'
import createcontex from './Createcontext'

const Student = () => {
    const mydata = useContext(createcontex)
    return (
        <div>
            <h1>Student Component</h1>

            <h3>{mydata.name}</h3>
            <h3>{mydata.email}</h3>
            <h3>{mydata.city}</h3>

        </div>
    )
}

export default Student
