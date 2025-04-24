import OrderItem from "../../components/OrderItem/OrderItem";
import { useOrder } from "../../context/OrderContext";
import "./OrderPage.css";
import { useEffect } from "react";

const OrderPage = () => {
    const { orders, getMyOrder } = useOrder();

    useEffect(() => {
        setTimeout(getMyOrder, 500);
    }, []);

    return (
        <div className="order-page">
            <p>You have successfully placed your order</p>
            <h2>Order information</h2>
            <table>
                <tbody>
                    {orders.length > 0 && orders[orders.length - 1].products.map(item => (
                        <OrderItem key={item._id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderPage;
