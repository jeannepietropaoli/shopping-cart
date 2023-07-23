import React from "react";
import "../styles/Cart.css"

export default function Cart(props) {
    const cartItemsElements = props.cartItems.map(item => {
        return (
            <div key={item.id} className="cart--product">
                <div className="cart--product-image-container">
                    <img src={item.imgSrc} alt={item.name} />
                    <span className="cart--product-quantity">{item.quantity}</span>
                </div>
                <span className="cart--product-name">{item.name}</span>
                <span className="cart--product-price">{item.price}$</span>
            </div>
        )
    })
    
    return (
        <div className="cart-container">
            <div className="cart-empty-section" onClick={props.closeCart}></div>
            <div className="cart">
                <h2>Cart</h2>
                <div className="cart--items-container">
                    {cartItemsElements.length === 0 && <p>- No item in your cart yet -</p>}
                    {cartItemsElements}
                </div>
                <div className="cart--total-container">
                    <h2>Total</h2>
                    <h2>0$</h2>
                </div>
                <button className="cart--checkout-button">Checkout</button>
                <button onClick={props.closeCart} className="cart--close-button">x</button>
            </div>
        </div>
    )
}