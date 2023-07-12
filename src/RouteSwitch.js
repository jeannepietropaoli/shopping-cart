import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Shop from "./Shop"

export default function RouteSwitch() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
    )
}