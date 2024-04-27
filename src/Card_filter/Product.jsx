import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCards, setVisibleCards] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState('');

    const fetchData = async () => {

        // Fetch Product area 
        try {
            const apiurl = 'https://dummyjson.com/products?skip=0&limit=100'
            const response = await axios.get(apiurl);
            setProducts(response.data.products);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products data:', error);
            setLoading(false);
        }

        // Fetch Category area
        try {
            const apiurl = 'https://dummyjson.com/products/categories'
            const response = await axios.get(apiurl);
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLoadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
    };

    // Handle for category click
    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    // Handle for all category
    const handleShowAll = () => {
        setSelectedCategory('');
    }

    // Filter Product
    const filteredProducts = selectedCategory
        ? products.filter(item => item.category === selectedCategory)
        : products;

    if (loading) {
        return <h1 style={{ fontSize: '100px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading....</h1>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 mt-5" style={{ border: '2px solid black', borderRadius: '30px', height: '1100px' }}>
                    <div>
                        <h1 style={{ marginBottom: '30px' }}>Categories</h1>
                        <ul>
                            <li style={{ marginBottom: '10px' }}>
                                <button className="btn btn-danger" onClick={handleShowAll}>
                                    <b>All</b>
                                </button>
                            </li>
                            {categories.map((value,index) => (
                                <li key={index} style={{ marginBottom: '10px' }}>
                                    <button className="btn btn-danger" onClick={() => handleCategoryClick(value)}>
                                        <b>{value}</b>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {filteredProducts.slice(0, visibleCards).map(product => (
                            <div className="col-md-4" key={product.id}>
                                <div className="card mb-5 mt-5" style={{ height: '600px' }}>
                                    <img src={product.thumbnail} className="card-img-top" alt="..." style={{ height: '300px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <Link to={`/productdetails/${product.id}`} className="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {visibleCards < filteredProducts.length && (
                <div className="text-center mt-3">
                    <button className="btn btn-success" onClick={handleLoadMore}>Load More</button>
                </div>
            )}
        </div>
    );
};

export default Product;
