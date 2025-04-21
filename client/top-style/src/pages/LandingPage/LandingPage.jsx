import "./LandingPage.css";
import ProductList from "../../components/ProductLIst/ProductList";
import { useProducts } from "../../context/ProductContext";

const LandingPage = () => {
    const { products } = useProducts();
    return (
        <>
        <div id="hero">
            <h1>A pedibus usque ad caput</h1>
        </div>
        <ProductList products={products}/>
        <div id="aboutUs">
            <h2>About us</h2>
            <p>We get you your warderobe basics that you can use year in and out. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure nostrum unde voluptas! Minima, corporis totam magni sed a earum fuga! Error fugiat, laboriosam hic eius nostrum quae qui sequi!</p>
        </div>
        </>
    )
}

export default LandingPage;