import "./LandingPage.css";
import ProductList from "../../components/ProductLIst/ProductList";

const LandingPage = () => {
    return (
        <>
        <div id="hero">
            <h1>Shop for spring</h1>
        </div>
        <ProductList />
        <div id="aboutUs">
            <h2>About us</h2>
            <p>We get you your warderobe basics that you can use year in and out. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure nostrum unde voluptas! Minima, corporis totam magni sed a earum fuga! Error fugiat, laboriosam hic eius nostrum quae qui sequi!</p>
        </div>
        </>
    )
}

export default LandingPage;