import OrderItem from "../../components/ProductTableRow/ProductTableRow";
import { useOrder } from "../../context/OrderContext";

const OrderPage = () => {
    const { orders } = useOrder();
    console.log(orders);
    return (
        <div>
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
