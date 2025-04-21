import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import './CartPage.css';
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const { cart, cartTotal, refreshCart, checkoutCart } = useCart();

  useEffect(() => {
    refreshCart();
  }, [])

  const checkout = () => {
    checkoutCart();
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {!cart || cart.length === 0
        ? <p>Your cart is empty</p>
        : (
          <>
            <table>
              <tbody>
                {cart.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </tbody>
            </table>
            <p>Total: {cartTotal} kr</p>
            <Link to={'/order'} >
              <button onClick={checkout}>Checkout</button>
            </Link>
          </>
        )
      }
    </div>
  )
}

export default Cart;