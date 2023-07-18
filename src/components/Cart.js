import React from "react";
import "../styles/Cart.css"

export default function Cart(props) {
    const [cartItems, setCartItems] = React.useState([])
    const cartItemsElements = []
    
    return (
        <div className="cart-container">
            <div className="cart">
                <h2>Cart</h2>
                <div className="cart--items-container">
                    {cartItems.length === 0 && <p>- No item in your cart yet -</p>}
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