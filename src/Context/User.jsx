import React, { useContext } from 'react'
import createcontex from './Createcontext'

const User = () => {
    const mydata = useContext(createcontex)
    return (
        <div>
            <h1>User Component</h1>

            <h3>{mydata.name}</h3>
            <h3>{mydata.email}</h3>
            <h3>{mydata.city}</h3>

        </div>
    )
}

export default User
