import React from "react";
import logo from "./assets/logo.png"
import Navbar from "./Navbar";
import "./Header.css"

export default function Header(props) {
    const logoStyles = {
        
    }
    return (
        <header>
            <div className="header--logo-container">
                <img className="logo-img" alt="Bean Barn logo" src={logo} />
                <h3 className="logo-text">BEAN BARN</h3>
            </div>
            <Navbar />
        </header>
    )
}