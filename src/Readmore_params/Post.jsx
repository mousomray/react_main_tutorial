import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCards, setVisibleCards] = useState(6);
    const [visibleWords, setVisibleWords] = useState(30);

    const fetchPosts = async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);

    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleLoadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
    };

    const handleReadMore = () => {
        setVisibleWords(prevVisibleWords => prevVisibleWords + 30);
    };

    if (loading) {
        return (
            <h1 style={{ fontSize: '100px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                Loading....
            </h1>
        );
    }

    return (
        <div className="container bg-white">
            <h1 className="text-center mb-5 mt-5">Posts</h1>
            <div className="row">
                {posts.slice(0, visibleCards).map(post => (
                    <div className="col-md-6 mb-4" key={post.id}>
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title"><b>{post.title}</b></h5>

                                {post?.body?.slice(0, visibleWords)}
                                ...
                                <Link to={`/readmore/${post.id}`}>
                                    <p className="card-text">
                                        {visibleWords < post?.body?.length && (
                                            <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleReadMore}> Read more...</span>
                                        )}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCards < posts.length && (
                <div className="text-center mt-3">
                    <button className="btn btn-primary" onClick={handleLoadMore}>Load More</button>
                </div>
            )}
        </div>
    );
};

export default Post;
