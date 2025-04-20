import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext.jsx';
import './ProductDetails.css';
import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const [selectedSize, setSelectedSize] = useState(null);
  const { addProductToCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const product = products.find(p => p._id === id);

  if (!product) return <p>Product not found</p>;

  const chooseSize = (size) => {
    setSelectedSize(size);
  }

  const submitToCart = () => {
    addProductToCart(id, selectedSize);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  }

  return (
    <div className="product-details">
      <div className='img'></div>
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
        {/* {selectedSize && <p>You have choosen size {selectedSize}</p>} */}
        <button className="cart-btn" onClick={submitToCart}>Add to cart</button>
        {showConfirmation && (
          <p className='confirmation'>Product added to cart</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
