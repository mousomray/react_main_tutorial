import React, { useState, useEffect } from 'react';



const Trending = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCards, setVisibleCards] = useState(9);


    const fetchAPI = async () => {

        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=f2b86ca3d3ac43d689830404d4545385');
        const data = await response.json();
        setNews(data.articles);
        setLoading(false);

    };

    useEffect(() => {
        fetchAPI();
    }, []);

    const handleLoadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
    };


    if (loading) {
        return (
            <div style={{ fontSize: '100px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                Loading....
            </div>
        );
    }

    return (
        <div className="container bg-white">
            <h1 className="text-center mb-5 mt-5"></h1>
            <div className="row">
                {news.slice(0, visibleCards).map((value, index) => {
                    return (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <img src={value.urlToImage} className="card-img-top" alt="Product Thumbnail" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column">
                                    <p className='text-muted authorName'>
                                        Author:{" "}
                                        {value.author
                                            ? value.author
                                            : "Unknown"}
                                    </p>
                                    <p className='text-muted'>Date: {new Date(value.publishedAt).toLocaleDateString()}</p>
                                    <p className='text-muted'>Time: {new Date(value.publishedAt).toLocaleTimeString()}</p>
                                    <h5 className='card-title'>
                                        {value.title &&
                                            value.title.slice(
                                                0,
                                                35
                                            )}
                                        ...
                                    </h5>
                                    <p className='card-text'>
                                        {value.description &&
                                            value.description.slice(
                                                0,
                                                55
                                            )}
                                        ...
                                    </p>
                                    <a
                                        href={
                                            value.url
                                        }
                                        className='btn btn-primary'>
                                        READ MORE...
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {visibleCards < news.length ? (
                <div className="text-center mt-3">
                    <button className="btn btn-primary" onClick={handleLoadMore}>Load More</button>
                </div>
            ) : null}
        </div>
    );
};

export default Trending;
