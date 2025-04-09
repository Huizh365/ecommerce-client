import { useEffect, useState } from "react"
import { useProducts } from "../hooks/useProducts"
import "../styles/shop.css"
import { useCart } from "../hooks/useCart"
import { CartItem } from "../models/CartItem"
import { ICartActionType } from "../reducers/CartReducer"
import { IProduct } from "../types/Product"

export const Products = () => {
    const {products, fetchProductsHandler, isLoading, error, navigate} = useProducts()
    const {dispatch} = useCart()
    const [category, setCategory] = useState<string>("all")
    
    useEffect (() => {
        fetchProductsHandler()
    },[])

    const handleClick = (id:number) => {
        navigate(`/products/${id}`)
    }
    const addToCart = (product: IProduct, quantity: number) => {
        dispatch({
            type: ICartActionType.ADD_ITEM,
            payload: new CartItem(product, quantity)
        })
    }
    
    const filteredProducts = category === "all" 
        ? products 
        : products.filter(p => p.category === category)

    return (
        <div className="product-list-wrapper">
        <div className="filter-wrapper">
            <button className="filter-btn" onClick={() => setCategory("all")}>All Snacks</button>
            <button className="filter-btn" onClick={() => setCategory("Chocolate")}>Chocolate</button>
            <button className="filter-btn" onClick={() => setCategory("Candy")}>Candy</button>
            <button className="filter-btn" onClick={() => setCategory("Nuts")}>Nuts</button>
            <button className="filter-btn" onClick={() => setCategory("Dried Fruit")}>Dried Fruit</button>
        </div>
        <div className="products">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {
            filteredProducts.map((p) =>(
                <div 
                    className="product-item" 
                    key={p.id}
                >
                    <img src={p.image} alt={p.name} onClick={() => handleClick(p.id)}></img>
                    <p>{p.name}</p>
                    <div className="card-last-line">
                        <p>Price: {p.price} kr</p>
                        <button className="small-add-btn" onClick={()=> addToCart(p, 1)}>+</button>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
    )
}