import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prevState) => [...prevState, item]);
  }

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
