import React from "react";
import "../styles/ProductCard.css"

export default function ProductCard(props) {
    const {product} = props
    const delay = `${props.index * 200}ms`
    const [shown, setShown] = React.useState(false)
    
    React.useEffect(() => {
        setShown(true)
    }, [])

    return (
        <figure className={`card ${shown ? "shown" : ""}`} style={{"--delay" : delay}}>
            <img className="card--image" src={product.imgSrc} alt={product.name} />
            <figcaption className="card--infos">
                <span>{product.name}</span>
                <span>{product.price}$</span>
            </figcaption>
            <button onClick={() => props.addToCart(product)} className="add-to-cart-button">+</button>
        </figure>
    )
}