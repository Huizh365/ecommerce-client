import { Outlet } from "react-router"
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { CartProvider } from "../contexts/CartContext";
import { SearchProvider } from "../contexts/SearchContext";

export const Layout = () => {
    return (
        <SearchProvider>
        <CartProvider>
        <header>
            < Nav />
        </header>
        <main>
            < Outlet />
        </main>
        <footer>
            < Footer />
        </footer>
        </CartProvider>
        </SearchProvider>
      
    );
  };