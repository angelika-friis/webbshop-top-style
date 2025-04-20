import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import UserPage from './pages/UserPage/UserPage';
import Cart from './pages/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import OrderPage from './pages/OrderPage/OrderPage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route path='/user' element={<UserPage />}></Route>
        <Route path='/cart' element={<Cart />}> </Route>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
