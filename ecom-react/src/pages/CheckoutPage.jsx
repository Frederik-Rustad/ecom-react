import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from '../components/NavComponent';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';

function CheckoutPage() {
  const { cartItems, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleCheckout = () => {
    const { name, email, address } = customerDetails;
    if (!name || !email || !address) {
      setError('Please fill in all fields.');
      return;
    }
    // Handle the checkout process (e.g., send details to an API)
    // For now, we'll just navigate to the success page
    navigate('/checkout-success');
  };

  return (
    <div className="container">
      <NavComponent />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1>Checkout</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <h2>Order Summary</h2>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="my-0">{item.title}</h6>
                  <small className="text-muted">{item.description}</small>
                </div>
                <span className="text-muted">${item.price}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${totalAmount}</strong>
            </li>
          </ul>
          <h2>Customer Details</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={customerDetails.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={customerDetails.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={customerDetails.address}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
