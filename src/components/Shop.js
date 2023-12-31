import React from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import productsData from "../productsData.js";
import "../styles/Shop.css"

export default function Shop(props) {
    const defaultSection = productsData[0]

    const [currentProductSection, setCurrentProductSection] = React.useState(defaultSection)

    function getProductData(category) {
        return productsData.find(productData => productData.category === category)
    }

    function getCurrentItems() {
        return currentProductSection.items
    }

    function getProductCategories() {
        return productsData.map(productCategory => ({name : productCategory.category, id : productCategory.id}))
    }

    function switchCategory(targetCategory) {
        setCurrentProductSection(getProductData(targetCategory))
    }

    const productsElements = getCurrentItems().map((product, index) => {
        return (<ProductCard index={index} key={product.id} product={product} addToCart={props.addToCart} />)
    })

    return (
        <div data-testid="shop-component" className="shop">
            <main className="shop--main">
                <Sidebar categories={getProductCategories()} switchCategory={switchCategory} />
                <section className="products">
                    {productsElements}
                </section>
            </main>
        </div>
    )
}