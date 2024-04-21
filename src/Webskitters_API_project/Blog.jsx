import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCards, setVisibleCards] = useState(2);



    const fetchData = async () => {

        const response = await fetch('https://restapinodejs.onrender.com/api/allBlog');
        const responseData = await response.json();
        setData(responseData.data);
        setLoading(false);

    };

    useEffect(() => {
        fetchData();
    }, []);


    const handleLoadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 2);
    };


    if (loading) {
        return <h1 style={{ fontSize: '100px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading....</h1>;
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {data?.slice(0, visibleCards).map((value) => {
                                return (
                                    <div className="col-md-12 mb-4" key={value._id}>
                                        <div className="card">
                                            <img src={`https://restapinodejs.onrender.com/api/blog/image/${value?._id}`} className="card-img-top" alt="Product Thumbnail" style={{ height: '500px', objectFit: 'cover' }} />
                                            <div className="card-body">
                                                <h5 className="card-title"><b>{value.title}</b></h5>
                                                <div className='card-text'>
                                                    <div dangerouslySetInnerHTML={{
                                                        __html: value.postText.slice(0, 200)
                                                    }} />

                                                    <Link to={`/readmore/${value?._id}`}>
                                                        See more ....
                                                    </Link>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* Button to load more cards */}
                        {visibleCards < data.length && (
                            <div className="text-center">
                                <button onClick={handleLoadMore} className="btn btn-primary mt-3">Load More</button>
                            </div>
                        )}
                    </div>
                    <div className="col-md-3">
                        <div className="card h-20">
                            <h5 className="card-header">Category</h5>
                            <div className="card-body">
                                <ul className="card-text">
                                    <li style={{ marginBottom: '20px' }}>Node</li>
                                    <li style={{ marginBottom: '20px' }}>React JS</li>
                                    <li style={{ marginBottom: '20px' }}>Comment</li>
                                    <li style={{ marginBottom: '20px' }}>Php</li>
                                    <li style={{ marginBottom: '20px' }}>C</li>
                                    <li style={{ marginBottom: '20px' }}>JS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
