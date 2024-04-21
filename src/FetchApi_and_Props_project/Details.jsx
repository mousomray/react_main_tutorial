import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1 style={{ fontSize: '100px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading....</h1>;
    }

    return (
        <>

            <p style={{fontSize:'30px'}}><b>Name :</b> {data?.name}</p>
            <p style={{fontSize:'30px'}}><b>Username :</b> {data?.username}</p>
            <p style={{fontSize:'30px'}}><b>Email :</b> {data?.email}</p>
            <p style={{fontSize:'30px'}}><b>Address :</b> {data?.address?.street}, {data?.address?.suite}, {data?.address?.city}, {data?.address?.zipcode}, {data?.address?.geo?.lat}, {data?.address?.geo?.lag}</p>
            <p style={{fontSize:'30px'}}><b>Phone :</b> {data?.phone}</p>
            <p style={{fontSize:'30px'}}><b>Website :</b> {data?.website}</p>
            <p style={{fontSize:'30px'}}><b>Company name :</b> {data?.company?.name}</p>
            <p style={{fontSize:'30px'}}><b>CatchPhrase :</b> {data?.company?.catchPhrase}</p>
            <p style={{fontSize:'30px'}}><b>BS :</b> {data?.company?.bs}</p>
            
        </>
    )
}

export default Details
