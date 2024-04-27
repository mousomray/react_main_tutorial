import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
    const [myProducts, setMyProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCards, setVisibleCards] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchData = async () => {
        try {
            const apiurl = 'https://dummyjson.com/products?skip=0&limit=100'
            const productsResponse = await axios.get(apiurl);
            setMyProducts(productsResponse.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products data:', error);
            setLoading(false);
        }

        try {
            const categoriesResponse = await axios.get('https://dummyjson.com/products/categories');
            setCategories(categoriesResponse.data);
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

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const filteredProducts = selectedCategory
        ? myProducts.products.filter(product => product.category === selectedCategory)
        : myProducts.products;

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
                                <button className="btn btn-danger" onClick={() => handleCategoryClick(null)}>
                                    <b>All</b>
                                </button>
                            </li>
                            {categories.map((category, index) => (
                                <li key={index} style={{ marginBottom: '10px' }}>
                                    <button className="btn btn-danger" onClick={() => handleCategoryClick(category)}>
                                        <b>{category}</b>
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
