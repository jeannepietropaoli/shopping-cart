import React from "react";

export default function Cart() {
    const cartItemsElements = []
    return (
        <div className="cart">
            <h2>Cart</h2>
            <div className="cart--items-container">
                {cartItemsElements}
            </div>
            <div className="cart--total-container">
                <h2>Total</h2>
                <h2>0$</h2>
            </div>
            <button className="cart--checkout-button">Checkout</button>
            <button className="cart--close-button">x</button>
        </div>
    )
}