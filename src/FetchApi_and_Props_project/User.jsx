import React, { useState, useEffect } from 'react';
import Userprops from './Userprops';

const User = () => {
    const [piller, changable] = useState([]);
    const [loading, setLoading] = useState(true);


    const getproduct = async () => {

        const respoinse = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await respoinse.json();
        changable(data);
        setLoading(false);
    }


    useEffect(() => {
        getproduct();
    }, []);

    if (loading) {
        return <h1 style={{ fontSize: '100px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading....</h1>;
    }

    return (
        <>
            <Userprops data={piller} />
        </>
    );
}

export default User;
