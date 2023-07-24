import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoLight from "../assets/logo.png"
import logoDark from "../assets/title-logo-black.png"
import Navbar from "./Navbar";
import "../styles/Header.css"

export default function Header(props) {
    const [test,setTest] = React.useState(true)
    const homeHeaderStyles = {
        logo : "light",
        color : "white",
        backgroundColor : "transparent",
        boxShadow : "none"
    }
    const shopHeaderStyles = {
        logo : "light",
        color : "white",
        backgroundColor : "#036B66", 
        boxShadow : "2px 2px 2px lightgrey"
    }
    const location = useLocation()
    const [styles, setStyles] = React.useState(getRightStyles())

    React.useEffect(() => {
        setStyles(getRightStyles())
    },
    [location.pathname]) 

    function getRightStyles() {
        const isHomeActive = location.pathname === "/"
        return isHomeActive ? homeHeaderStyles : shopHeaderStyles
    }

    return (
        <header style={styles} >
            <div className="header--logo-container">
                <img className="logo-img" alt="Bean Barn logo" src={props.logo === "dark" ? logoDark : logoLight} />
                <h3 className="logo-text">BEAN BARN</h3>
                <Link to="/"></Link>
            </div>
            <Navbar openCart={props.openCart} numberOfItems={props.numberOfItems} />
        </header>
    )
}