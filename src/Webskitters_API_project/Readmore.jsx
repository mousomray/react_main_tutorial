import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Readmore = () => {
    const { id } = useParams();
    const [blogs, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const response = await fetch(`https://restapinodejs.onrender.com/api/blogdetails/${id}`);
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

            <h1>
                {blogs?.data?.title}
            </h1>
            <img src={`https://restapinodejs.onrender.com/api/blog/image/${id}`} style={{ marginLeft: "15%", width: "60%" }} />

            <div

                dangerouslySetInnerHTML={{ __html: blogs?.data.postText }} style={{ padding: "3rem" }}

            />

        </>
    )
}

export default Readmore
