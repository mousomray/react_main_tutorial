import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const User = () => {

    const getUserdata = async () => {

        const userapiurl = 'https://tureappservar.onrender.com/alluser'
        const response = await axios.get(userapiurl)
        return response?.data?.data
    }

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['user'],
        queryFn: getUserdata
    })

    // For Loading 
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    // For Error
    if(isError){
        return <h1>{error.message}</h1>
    }

    return (
        <>
            <h1>User Page</h1>
            {
                data?.map((value) => {
                    return (
                        <>
                            <div key={value._id}>
                                <h1>{value?.name}</h1>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default User
