import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Category from './Category';
import { useParams } from 'react-router-dom';

const Categorydetails = () => {
    const {slug} = useParams();
    const [pro, setProducts] = useState([]); // For to fetch Products
    const [loading, setLoading] = useState(true); // For to make loading  
    const [visibleCards, setVisibleCards] = useState(6); // For Loadmore button 


    const fetchData = async () => {
        // Fetch Product area 
        try {
            const apiurl = `https://dummyjson.com/products/category/${slug}`
            const response = await axios.get(apiurl);
            console.log("Fetching Cat Details Data...", response);
            setProducts(response?.data?.products);
            setLoading(false);
        } catch (error) {
            console.error('Error Fetching Cat Details data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [slug]);

    const handleLoadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
    };



    if (loading) {
        return <h1 style={{ fontSize: '100px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading....</h1>;
    }
    console.log("asasasas", pro);


    return (
        <div className="container mt-5">
            <div className="row">
                <Category />
                <div className="col-md-9">
                    <div className="row">
                        {pro?.slice(0, visibleCards)?.map((value) => {
                            return (
                                <>
                                    <div className="col-md-4">
                                        <div className="card mt-5" style={{ height: '650px' }}>
                                            <img src={value.thumbnail} className="card-img-top" alt="..." style={{ height: '300px' }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{value?.title}</h5>
                                                <p className="card-text">{value?.description}</p>
                                                <Link to={`/productdetails/${value?.id}`} className="btn btn-primary">Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            {visibleCards < pro?.length && (
                <div className="text-center mt-3">
                    <button className="btn btn-success" onClick={handleLoadMore}>Load More</button>
                </div>
            )}
        </div>
    );
};

export default Categorydetails;
