
import "../styles/shop.css"

import { ProductList } from "../components/ProductList"
import { useState } from "react"

export const Products = () => {
    const [category, setCategory] = useState<string>("all")

    return (
        <div className="product-list-wrapper">
        <div className="filter-wrapper">
            <button className="filter-btn" onClick={() => setCategory("all")}>All Snacks</button>
            <button className="filter-btn" onClick={() => setCategory("Chocolate")}>Chocolate</button>
            <button className="filter-btn" onClick={() => setCategory("Candy")}>Candy</button>
            <button className="filter-btn" onClick={() => setCategory("Nuts")}>Nuts</button>
            <button className="filter-btn" onClick={() => setCategory("Dried Fruit")}>Dried Fruit</button>
        </div>
        <ProductList category={category} />
        </div>
    )
}