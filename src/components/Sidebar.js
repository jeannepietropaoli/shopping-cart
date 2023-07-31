import React from "react";
import "../styles/Sidebar.css"

export default function Sidebar(props) {
    const categoriesElements = props.categories.map(category => {
        return (<li key={category.id} className="sidebar--item" onClick={() => props.switchCategory(category.name)}>{category.name}</li>)
    })
    return (
        <aside data-testid="sidebar-component">
            <ul className="sidebar--list">
                {categoriesElements}
            </ul>
        </aside>
    )
}