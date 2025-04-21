const OrderItem = ({ item }) => {
    return (
        <tr className="product-listing" key={item._id}>
            <td>{item.productId.productName}</td>
            <td>{item.productId.color}</td>
            <td>{item.size}</td>
            <td>{item.quantity}x</td>
            <td>{item.productId.price} kr</td>
        </tr>
    )
}

export default OrderItem