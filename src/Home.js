import React from "react";
import "./Home.css"
import Header from "./Header";
import titleLogo from "./assets/title-logo.png"

export default function Home() {
    return (
        <div className="home">
            <Header />
            <main>
                <div className="title-container">
                    <img alt="Bean Barn logo" src={titleLogo} />
                    <h1>BEAN BARN</h1>
                    <h4>YOUR COFFEE BEANS SUPPLIER</h4>
                    <h4>- FROM FARM TO BREW -</h4>
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