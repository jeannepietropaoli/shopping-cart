import React from "react";
import "../styles/ProductCard.css"

export default function ProductCard(props) {
    return (
        <figure className="card">
            <img className="card--image" src={props.imgSrc} alt={props.name} />
            <figcaption className="card--infos">
                <span>{props.name}</span>
                <span>{props.price}$</span>
            </figcaption>
            <button className="add-to-cart-button">+</button>
        </figure>
    )
}