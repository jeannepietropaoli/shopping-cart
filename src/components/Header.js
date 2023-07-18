import React from "react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo.png"
import logoDark from "../assets/title-logo-black.png"
import Navbar from "./Navbar";
import "../styles/Header.css"

export default function Header(props) {
    const styles = {
        color: props.color,
        backgroundColor: props.backgroundColor,
        boxShadow : props.boxShadow
    }

    return (
        <header style={styles}>
            <div className="header--logo-container">
                <img className="logo-img" alt="Bean Barn logo" src={props.logo === "dark" ? logoDark : logoLight} />
                <h3 className="logo-text">BEAN BARN</h3>
                <Link to="/"></Link>
            </div>
            <Navbar />
        </header>
    )
}

Header.defaultProps = {
    logo : "light",
    color: "white",
    backgroundColor: '#036B66',
    boxShadow : "2px 2px 2px lightgrey"
}