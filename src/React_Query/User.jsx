import React from 'react'
import { useQuery } from '@tanstack/react-query' // Import for useQuery 
import axios from 'axios'

const User = () => {

    const getUserdata = async () => {
        const apiurl = 'https://tureappservar.onrender.com/alluser'
        const response = await axios.get(apiurl)
        console.log("Fetching User data", response);
        return response?.data?.data // You have to put return because there is no state
    }

    const { isLoading, isError, data: mydata, error } = useQuery({
        queryKey: ['user'], // You can write any name in the place of user 
        queryFn: getUserdata // This line of code work as same as useEffect()
    })

    // For Loading 
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    // For Error
    if (isError) {
        return <h1>{error.message}</h1>
    }

    // Css Area
    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const itemStyle = {
        backgroundColor: '#ecf0f1',
        margin: '10px 0',
        padding: '15px',
        borderRadius: '8px',
        width: '80%',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const imgStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px'
    };

    const nameStyle = {
        fontSize: '18px',
        color: '#34495e',
        fontFamily: 'Arial, sans-serif'
    };

    return (
        <>

            <h1 style={{ textAlign: 'center', color: '#2c3e50', fontFamily: 'Arial, sans-serif', marginTop: '80px' }}>User Page</h1>
            <ol style={listStyle}>
                {mydata?.slice(0, mydata.length).reverse().map((value, index) => {
                    return (
                        <>
                            <li key={index} style={itemStyle}>
                                <img src={value?.image} alt="User Photo" style={imgStyle} />
                                <div style={nameStyle}>Name : {value?.name}</div>
                                <div style={nameStyle}>City : {value?.city}</div>
                                <div style={nameStyle}>Email : {value?.email}</div>
                                <div style={nameStyle}>Phone : {value?.phone}</div>
                            </li>
                        </>
                    )
                })}
            </ol>


        </>
    )
}

export default User
