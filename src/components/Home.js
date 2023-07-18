import React from "react"
import { Link } from "react-router-dom";
import "../styles/Home.css"
import Header from "./Header"
import titleLogo from "../assets/title-logo.png"

export default function Home() {
    return (
        <div className="home">
            <main className="home--main">
                <div className="title-container">
                    <img alt="Bean Barn logo" src={titleLogo} />
                    <h1>BEAN BARN</h1>
                    <h4>YOUR COFFEE BEANS SUPPLIER</h4>
                    <h4>- FROM FARM TO BREW -</h4>
                    <button className="shop-button"><Link to="/shop">SHOP NOW</Link></button>
                </div>
                <div className="facts-container">
                    <div className="fact">
                        <span>10+</span>
                        <span>BEANS ORIGINS</span>
                    </div>
                    <div className="fact">
                        <span>2-DAY</span>
                        <span>SHIPPING</span>
                    </div>
                    <div className="fact">
                        <span>100%</span>
                        <span>HAPPY CUSTOMERS</span>
                    </div>
                </div>
            </main>
        </div>
    )
}