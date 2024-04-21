import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.github.com/users');
            setUserData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="container mt-2 bg-white">
            <h1 className="text-center mb-5">GitHub Users</h1>

            <div className="row">
                {userData.map((user) => {
                    return (
                        <div className="col-md-4 mb-3" key={user.id}>
                            <div className="card" style={{ height: '100%' }}>
                                <img src={user.avatar_url} className="card-img-top" alt="User Avatar" />
                                <div className="card-body">
                                    <h5 className="card-title">{user.login}</h5>
                                    <p className="card-text">GitHub ID: {user.id}</p>
                                    <a href={user.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Profile</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Loading;
