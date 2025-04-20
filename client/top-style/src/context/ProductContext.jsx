import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5050/api/products');
        const data = await res.json();

        if (!res.ok) throw new Error(data.message);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
