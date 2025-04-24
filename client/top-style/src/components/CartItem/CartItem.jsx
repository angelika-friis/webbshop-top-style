import { useCart } from "../../context/CartContext";
import { RxCross2 } from "react-icons/rx";
import "./CartItem.css";

const CartItem = ({ item }) => {
    const { removeProductFromCart } = useCart();

    const removeItem = (id) => {
        removeProductFromCart(id);
        location.reload();
    }

    return (
        <tr className="cart-listing" key={item._id}>
            <td>{item.productId.productName}</td>
            <td>{item.productId.color}</td>
            <td>{item.size}</td>
            <td>{item.quantity}x</td>
            <td>{item.price} kr</td>
            <td></td>
            <td className="delete-btn" onClick={(e) => removeItem(item._id)}><RxCross2 /></td>
        </tr>
    )
}

export default CartItem;