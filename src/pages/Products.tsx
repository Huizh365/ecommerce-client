
import "../styles/shop.css"
import { ProductList } from "../components/ProductList"
import { useSearchParams } from "react-router"

export const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const categoryURL = searchParams.get("category") ?? "all"

    const handleFilter = (selectedFilter: string) => {
        if (selectedFilter === "all") {
            searchParams.delete("category")
        } else {
            searchParams.set("category", selectedFilter)
        }
        setSearchParams(searchParams)
    }

    return (
        <div className="product-list-wrapper">
        <div className="filter-wrapper">
            <button 
                className={ categoryURL === "all" ? "active" :"filter-btn" }
                onClick={() => handleFilter("all")}
            >All Snacks</button>
            <button 
                className={ categoryURL === "Chocolate" ? "active" :"filter-btn" }
                onClick={() => handleFilter("Chocolate")}
            >Chocolate</button>
            <button 
                className={ categoryURL === "Candy" ? "active" :"filter-btn" }
                onClick={() => handleFilter("Candy")}
            >Candy</button>
            <button 
                className={ categoryURL === "Dried Fruit" ? "active" :"filter-btn" }
                onClick={() => handleFilter("Dried Fruit")}
            >Dried Fruit</button>
        </div>
        <ProductList category={categoryURL} />
        </div>
    )
}