import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState(6);

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const responseData = await response.json();
    setData(responseData.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
  };



  if (loading) {
    return <h1 style={{ fontSize: '100px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading....</h1>;
  }



  return (
    <>
      <div className="container bg-white">
        <h1 className="text-center mb-5">Products</h1>
        <div className="row">
          {data?.slice(0, visibleCards).map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img src={product.thumbnail} className="card-img-top" alt="Product Thumbnail" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title"><b>{product.title}</b></h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/productdetails/${product.id}`} className="btn btn-primary mt-auto">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCards < data.length ? (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleLoadMore}>Load More</button>
          </div>
        ) : null}


      </div>
    </>
  );
};

export default Product;
