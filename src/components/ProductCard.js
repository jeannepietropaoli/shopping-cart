import React from "react";
import "../styles/ProductCard.css"

export default function ProductCard(props) {
    const {product} = props
    const delay = `${props.index * 200}ms`
    const [shown, setShown] = React.useState(false)
    const [addedToCart, setAddedToCart] = React.useState(false)
    
    React.useEffect(() => {
        setShown(true)
    }, [])

    React.useEffect(() => {
        if(addedToCart) {
            const timeoutId = window.setTimeout(() => {
                setAddedToCart(false)
            }, 900)

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [addedToCart])

    return (
        <figure className={`card ${shown ? "shown" : ""}`} style={{"--delay" : delay}}>
            <img className="card--image" src={product.imgSrc} alt={product.name} />
            <figcaption className="card--infos">
                <span>{product.name}</span>
                <span>{product.price}$</span>
            </figcaption>
            <button
             onClick={() => {
                props.addToCart(product)
                setAddedToCart(true)
            }} 
            className="add-to-cart-button" >
                +
             </button>
            <span className={`added-dot ${addedToCart ? "visible" : ""}`}>✓</span>
        </figure>
    )
}