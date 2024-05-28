import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/navComponent.jsx';
import Footer from './components/footer.jsx';
import Card from "./components/card.jsx";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const APIURL = 'https://v2.api.noroff.dev/online-shop';
    const fetchData = async () => {
      try {
        const response = await fetch(APIURL);
        console.log(response);
        if (!response.ok) {
          throw new Error('API response was not ok');
        }
        const data = await response.json();        
        setAllProducts(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-16 text-center">
          <NavComponent />
          <h2>Products</h2>
          <div className="d-flex flex-wrap justify-content-center">

            {allProducts.map(product => {
              const { id, title, description, image, price, discountedPrice } = product;
              const isDiscounted = price !== discountedPrice; // not sure if === or !== is the correct discount 
              
              return (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  text={description}
                  image={image.url}
                  price={price}
                  link={product.link}
                  isDiscounted={isDiscounted}
                  discountedPrice={discountedPrice}
                />
              );

            })}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
