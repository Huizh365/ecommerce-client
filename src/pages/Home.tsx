import { ProductList } from "../components/ProductList"

export const Home = () => {
    return (
        <>
        <ProductList limit={10} />
        </>
    )
}