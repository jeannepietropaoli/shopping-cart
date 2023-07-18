import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar--list">
                <li className="navbar--list-item animate"><Link to="/">HOME</Link></li>
                <li className="navbar--list-item animate"><Link to="/shop">SHOP</Link></li>
                <li className="navbar--list-item animate"><Link>CART</Link></li>
                <li className="navbar--list-item animate"><Link>SEARCH</Link></li>
            </ul>
        </div>
    )
}