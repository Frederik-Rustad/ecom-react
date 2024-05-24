import React from 'react';
import onButtonClick from './buttonEvent.jsx';

function Card(props) {
  const priceClass = props.isDiscounted ? 'text-danger' : '';
  const saleText = props.isDiscounted ? 'On Sale!' : '';

  return (
    <div className="card m-2 col-8">
      <div className="card-container d-flex">
        <img src={props.image} className="card-img-top productimg" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <p className={`card-text ${priceClass}`}>Price: {props.price}</p>
          <a href={props.link} className="btn btn-dark" onClick={onButtonClick}>View Product</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
