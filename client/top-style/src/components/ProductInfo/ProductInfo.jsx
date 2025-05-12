import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const ProductInfo = ({ product, id }) => {
      const { addProductToCart } = useCart();
      const [selectedSize, setSelectedSize] = useState(null);
      const [showConfirmation, setShowConfirmation] = useState(false);
      const { user } = useAuth();

    const chooseSize = (size) => {
        setSelectedSize(size);
      }
    
      const submitToCart = () => {
        addProductToCart(id, selectedSize);
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 5000);
      }

    return (
        <div className='product-info'>
            <h2>{product.productName}, {product.color} </h2>
            <p className='price'>{product.price} kr</p>
            <p className='info'>Material: {product.material}</p>
            <div>
                {product.availableSizes.map((size) =>
                    <button
                        className={selectedSize === size ? "size-btn selected" : "size-btn"}
                        key={size}
                        onClick={(e) => chooseSize(size)}>{size}
                    </button>
                )}
            </div>
            {user && <button className="cart-btn" onClick={submitToCart}>Add to cart</button>}
            {showConfirmation && (
                <p className='confirmation'>Product added to cart</p>
            )}
        </div>
    )
}

export default ProductInfo;