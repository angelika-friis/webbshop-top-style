import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import UserPage from './pages/UserPage/UserPage';
import Cart from './pages/CartPage/CartPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import OrderPage from './pages/OrderPage/OrderPage';
import SearchPage from './pages/SearchPage/SearchPage';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="page-container">
      <Header />
      <main className="content-wrap">
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route path='/user' element={<UserPage />}></Route>
          <Route path='/cart' element={<Cart />}> </Route>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
