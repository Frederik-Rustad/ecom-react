import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccess';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
