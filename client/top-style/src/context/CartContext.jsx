import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const fetchCart = async () => {
        try {
            const res = await fetch('http://localhost:5050/api/cart', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message);
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
            const res = await fetch(`http://localhost:5050/api/cart`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ productId: id, size })
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message);
        } catch (error) {
            console.error(error.message);
        }
    };

    const removeProductFromCart = async (id) => {
        try {
            const res = await fetch(`http://localhost:5050/api/cart/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setCart(data.cart);
            setCartTotal(data.cartTotal);
        } catch (error) {
            console.log(error.message);
        }
    };

    const checkoutCart = async () => {
        try {
            const res = await fetch(`http://localhost:5050/api/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

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