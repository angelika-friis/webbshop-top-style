import { createContext, useContext, useState, useEffect } from 'react';
import { getOrder } from '../services/orderService';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getMyOrder();
    }, []);

    const getMyOrder = async () => {
        try {
            const data = await getOrder();
            setOrders(data);
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