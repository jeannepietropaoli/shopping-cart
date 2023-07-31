import React from "react";
import "../styles/Cart.css"

export default function Cart(props) {
    function calculateItemTotalPrice(item) {
        return item.price * item.quantity
    }

    function calculateCartTotal() {
        return props.cartItems.reduce((total, currentItem) => total + calculateItemTotalPrice(currentItem), 0)
      }

    const cartItemsElements = props.cartItems.map(item => {
        return (
            <div key={item.id} className="cart--product" data-testid="cart-product">
                <div className="cart--product-image-container">
                    <img data-testid="cart--product-image" src={item.imgSrc} alt={item.name} />
                    <span data-testid="cart-product-quantity" className="cart--product-quantity">{item.quantity}</span>
                </div>
                <span className="cart--product-name">{item.name}</span>
                <div className="cart--product-counter">
                    <span data-testid="increment" onClick={() => props.increment(item.id)}>+</span>
                    <span data-testid="decrement" onClick={() => props.decrement(item.id)}>-</span>
                </div>
                <span className="cart--product-price">{item.price}$<small>/u</small></span>
            </div>
        )
    })

    function getAppOffsetHeight() {
        return document.querySelector(".app").offsetHeight
    }
    
    return (
        <div style={{minHeight : getAppOffsetHeight()}} className="cart-container">
            <div className="cart-empty-section" onClick={props.closeCart}></div>
            <div data-testid="cart-component" className="cart">
                <h2>Cart</h2>
                <div className="cart--items-container">
                    {cartItemsElements.length === 0 && <p>- No item in your cart yet -</p>}
                    {cartItemsElements}
                </div>
                <div className="cart--total-container">
                    <h2>Total</h2>
                    <h2 data-testid="cart-total">{calculateCartTotal()}$</h2>
                </div>
                <button className="cart--checkout-button">Checkout</button>
                <button data-testid="cart-close" onClick={props.closeCart} className="cart--close-button">x</button>
            </div>
        </div>
    )
}