import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext.jsx';
import './ProductList.css';

const ProductList = ({ products }) => {
  const { error } = useProducts();

  if (error) return <p>Fel: {error}</p>;
  if (!products || !products.length) return <p>Laddar produkter...</p>;

  return (
    <div className="product-list">
      {products && products.length && products.map(product => (
        <Link to={`/product/${product._id}`} key={product._id} className="product-card">
          <div className='product-img'></div>
          <p>{product.productName}</p>
          <p><strong>{product.price} kr</strong></p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
