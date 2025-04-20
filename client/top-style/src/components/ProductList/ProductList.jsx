import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext.jsx';
import './ProductList.css';

const ProductList = () => {
  const { products, error } = useProducts();

  if (error) return <p>Fel: {error}</p>;
  if (!products.length) return <p>Laddar produkter...</p>;

  return (
    <div className="product-list">
      {products.map(product => (
        <Link to={`/product/${product._id}`} key={product._id} className="product-card">
          <div className='prod-img'></div>
          <p>{product.productName}</p>
          <p><strong>{product.price} kr</strong></p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
