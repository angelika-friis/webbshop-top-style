import { createContext, useContext, useState, useEffect } from 'react';
import { getCart, addToCart, removeFromCart, makeOrder } from '../services/cartService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const fetchCart = async () => {
        try {
            const data = await getCart();
            setCart(data.cart);
            setCartTotal(data.cartTotal);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const refreshCart = fetchCart;

    const addProductToCart = async (id, size) => {
        try {
            const data = await addToCart(id, size);
            setCart(data.cart);
            setCartTotal(data.cartTotal);
        } catch (error) {
            console.error(error.message);
        }
    };

    const removeProductFromCart = async (id) => {
        try {
            const data = await removeFromCart(id);
            setCart(data.cart);
            setCartTotal(data.cartTotal);
        } catch (error) {
            console.log(error.message);
        }
    };

    const checkoutCart = async () => {
        try {
            const data = await makeOrder();
            setCart([]);
            setCartTotal(0);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            cartTotal,
            refreshCart,
            addProductToCart,
            removeProductFromCart,
            checkoutCart,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);