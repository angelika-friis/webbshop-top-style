import { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getMyOrder();
    }, []);

    const getMyOrder = async () => {
        try {
            const res = await fetch(`http://localhost:5050/api/orders/mine`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setOrders(data);
            console.log(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <OrderContext.Provider value={{
            orders,
            getMyOrder
        }}>
            {children}
        </OrderContext.Provider>
    );


};

export const useOrder = () => useContext(OrderContext);