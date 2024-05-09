import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const productTitle = "Coconut";
  const productPrice = 2.5;
  const productCurrency = "USD";
  const salesTax = 0.5;
  const productCart = { productTitle, productPrice, productCurrency, salesTax };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1>Product Details</h1>
          <ul className="list-unstyled">
            <li>{productCart.productTitle}</li>
            <li>{productCart.productPrice} {productCart.productCurrency}</li>
            <li>{productCart.salesTax} {productCart.productCurrency}</li>
            <li>Total: {productCart.productPrice + productCart.salesTax} {productCart.productCurrency}</li>
          </ul>
          <img 
            src="https://i.pinimg.com/564x/b2/8f/4f/b28f4f30e63cad83e5a17b01b3b2962f.jpg" 
            alt="Coconut"
            className="img-fluid"  // Ensures the image is responsive
          />
        </div>
      </div>
    </div>
  );
}

export default App;
