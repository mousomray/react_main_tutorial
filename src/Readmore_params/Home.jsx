import React, { useState, useEffect } from 'react';


const Home = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCards, setVisibleCards] = useState(6);

    const fetchPhotos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setPhotos(data);
        setLoading(false);

    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    const handleLoadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
    };

    if (loading) {
        return <h1 style={{ fontSize: '100px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading....</h1>;
    }

    return (
        <>
            {/*Slider section start */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {photos?.map((photo, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={photo.url} className="d-block w-100" style={{ height: '500px' }} alt='' />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/*Slider section end */}

            {/* <!-- Card Section start --> */}
            <div className="container bg-white">
                <h1 className="text-center mb-5 mt-5">Image</h1>
                <div className="row">
                    {photos.slice(0, visibleCards).map((photo) => (
                        <div className="col-md-4 mb-4" key={photo.id}>
                            <div className="card h-100">
                                <img src={photo.thumbnailUrl} className="card-img-top" alt="Product Thumbnail" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title"><b>{photo.title}</b></h5>
                                    <p className="card-text">{photo.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCards < photos.length ? (
                    <div className="text-center mt-3">
                        <button className="btn btn-primary" onClick={handleLoadMore}>Load More</button>
                    </div>
                ) : null}


            </div>



            {/* <!-- Card Section end --> */}
        </>
    );
};

export default Home;
