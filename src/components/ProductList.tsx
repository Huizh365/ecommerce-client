import { useEffect } from "react"
import { useCart } from "../hooks/useCart"
import { useProducts } from "../hooks/useProducts"
import { CartItem } from "../models/CartItem"
import { ICartActionType } from "../reducers/CartReducer"
import { IProduct } from "../types/Product"

interface IProductListProps {
    limit?: number
    category?: string
}

export const ProductList = ({limit, category}:IProductListProps) => {
    const {products, fetchProductsHandler, isLoading, error, navigate} = useProducts()
    const {dispatch} = useCart()
        
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

    const getFilteredProducts = () => {
        let filteredProducts = products
        if (category) {
            filteredProducts = category === "all" 
                ? products 
                : products.filter(p => p.category === category)
        }
        if (limit) {
            filteredProducts = filteredProducts.slice(0, limit)
        }
        return filteredProducts
    }
    const shownProducts = getFilteredProducts()
    
        return (
            <div className="products">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {
                shownProducts.map((p) =>(
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
        )
}