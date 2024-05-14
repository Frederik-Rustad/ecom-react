import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/navComponent.js';
import Footer from './components/footer.js';
import Card from "./components/card.js";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v2.api.noroff.dev/online-shop');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Check the fetched data in the console
        setAllProducts(data.data); // Access the 'data' array from the response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log("Type of allProducts:", typeof allProducts);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-16 text-center">
          <NavComponent />
          <h2>Products</h2>
          {allProducts.map(product => (
            <Card
              key={product.id}
              title={product.title}
              text={product.description}
              image={product.image.url} // Access the 'url' property from the 'image' object
              price={product.price} // Access the 'price' property
            />
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
