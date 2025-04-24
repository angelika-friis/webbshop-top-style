import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext.jsx';
import './ProductDetails.css';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find(p => p._id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <div className='img'></div>
      <ProductInfo product={product} id={id} />
    </div>
  );
};

export default ProductDetail;
