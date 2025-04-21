import { createContext, useContext, useState, useEffect } from 'react';
import { getProducts } from '../services/productService';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const searchProducts = (condition) => {
    setSearchResult(products.filter((product) => product.productName.toLowerCase().match(condition.toLowerCase())))
  }

  return (
    <ProductContext.Provider value={{ products, searchResult, searchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
