import React from 'react';
import onButtonClick from './buttonEvent.js';



function Card(props) {
    return (
        <div className="card m-2 col-4">
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <p className="card-text">Price: {props.price}</p>
                <a href={props.link} className="btn btn-dark" onClick={onButtonClick}>View Product</a>
            </div>
        </div>
    );
}
export default Card;