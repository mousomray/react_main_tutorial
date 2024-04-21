import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'

const Axios_Nested_API = () => {

    const [piller, changable] = useState([]);
    const [loading, setloading] = useState(true);

    const fetchData = async () => {
        const response = await axios.get('https://dummyjson.com/carts')
        changable(response.data.carts);
        setloading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div class="container">
                <div class="row">

                    {piller?.map((pro) => {
                        return (
                            <div key={pro.id}>
                                {pro?.products?.map((value) => {
                                    return (
                                        <>
                                            <div class="col-md-6 mt-5" key={value.id}>
                                                {/*Cards start*/}
                                                <div class="card" style={{ width: '500px', height: '750px' }}>
                                                    <img src={value?.thumbnail} class="card-img-top" style={{ height: '500px' }} alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value?.title}</h5>
                                                        <p class="card-text">Price: {value.price}</p>
                                                        <p class="card-text">Quantity: {value.quantity}</p>
                                                        <p class="card-text">Total: {value.total}</p>
                                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>
                                                {/*Cards end*/}
                                            </div>

                                        </>
                                    )
                                })}
                            </div>
                        )
                    })}








                </div>
            </div>
        </>
    )
}

export default Axios_Nested_API
