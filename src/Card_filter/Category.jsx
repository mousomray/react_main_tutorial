import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

const Category = () => {

    const [category, setCategories] = useState([]);

    const getCatdata = async () => {
        // Fetch Category area
        try {
            const apiurl = 'https://dummyjson.com/products/categories'
            const response = await axios.get(apiurl);
            console.log("Fetching Category data...", response);
            setCategories(response?.data);
        } catch (error) {
            console.error('Error fetching categories data:', error);
        }
    }

    useEffect(() => {
        getCatdata()
    }, [])

    return (
        <>
            <div className="col-md-3 mt-5" style={{ border: '2px solid black', borderRadius: '30px', height: '1100px' }}>
                <div>
                    <h1 style={{ marginBottom: '30px' }}>Categories</h1>
                    <ul>
                        <li style={{marginBottom:'15px'}}><Link to='/'>All</Link></li>
                        {category?.map((value) =>{
                            return(
                                <>
                                <li style={{marginBottom:'15px'}}><Link to={`/categorydetails/${value?.slug}`}>{value?.name}</Link></li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Category
