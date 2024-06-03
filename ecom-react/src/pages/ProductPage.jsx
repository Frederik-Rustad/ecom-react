import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from '../components/NavComponent';
import { CartContext } from '../context/CartContext';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const APIURL = `https://v2.api.noroff.dev/online-shop/${id}`;
      try {
        const response = await fetch(APIURL);
        if (!response.ok) {
          throw new Error('API response was not ok');
        }
        const data = await response.json();
        console.log('Fetched product data:', data);
        setProduct(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container">
      <NavComponent />
      {product && (
        <div className="row">
          <div className="col-md-6">
            <img src={product.image.url} alt={product.title} className="img-fluid productimg2 mt-3 rounded mx-auto d-block " />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Rating: {'⭐'.repeat(product.rating)}</p>
            <p>
              {product.discountedPrice < product.price ? (
                <span>
                  <strong className="text-danger">Discounted Price: ${product.discountedPrice}</strong>
                  <br />
                  <span className="text-muted text-decoration-line-through">
                    Original Price: ${product.price}
                  </span>
                </span>
              ) : (
                <strong>Price: ${product.price}</strong>
              )}
            </p>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
