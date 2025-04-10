import { Link } from "react-router"
import { ProductList } from "../components/ProductList"
import  chocolate  from "../assets/chocolate.png"
import  candy  from "../assets/candy.png"
import  nuts  from "../assets/nuts.png"
import  driedFruit  from "../assets/dried-fruit.png"
import easter from "../assets/easter-banner.png"

export const Home = () => {

    return (
        <div className="home">
          <div id="hero">
            <img src={easter}/>
            <span>HAPPY EASTER</span>
          </div>
          <div className="home-categories">
            <Link to="/products?category=Chocolate" className="category-link">
                <img src={chocolate} alt="chocolate"/>
                <span className="category-text">Chocolate</span>
            </Link>
            <Link to="/products?category=Candy" className="category-link">
                <img src={candy} alt="candy"/>
                <span className="category-text">Candy</span>
            </Link>
            <Link to="/products?category=Nuts" className="category-link">
                <img src={nuts} alt="nuts"/>
                <span className="category-text">Nuts</span>
            </Link>
            <Link to="/products?category=Dried Fruit" className="category-link">
                <img src={driedFruit} alt="dried fruit"/>
                <span className="category-text">Dried fruit</span>
            </Link>
          </div>
          <div className="title-container">
            <h2 className="section-title">Recommended</h2>
            <Link to="/products">More</Link>
          </div>

        <ProductList limit={10} />
        </div>
    )
}