import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Userprops = (props) => {

    const [visibleCards, setVisibleCards] = useState(4);

    const handleLoadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
    };

    return (
        <>
            <div className="container mt-2 bg-white ddd">
                <h1 className="text-center mb-5">Users</h1>
                <div className="row">
                    {props.data.slice(0, visibleCards).map((value, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Name: {value.name}</h5>
                                    <p className="card-text">Username : {value.username}</p>
                                    <Link to={`/details/${value.id}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {visibleCards < props.data.length ? (
                    <div className="text-center mt-3">
                        <button className="btn btn-primary" onClick={handleLoadMore}>Load More</button>
                    </div>
                ) : null}
                
            </div>
        </>
    );
}

export default Userprops;
