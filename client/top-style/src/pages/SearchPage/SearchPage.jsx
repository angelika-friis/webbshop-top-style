import ProductList from '../../components/ProductList/ProductList';
import { useProducts } from '../../context/ProductContext';
import { useState, useEffect, use } from 'react';
import "./SearchPage.css";

const SearchPage = () => {
    const [condition, setCondition] = useState('');
    const { searchResult, searchProducts } = useProducts();

    useEffect(() => {
        searchProducts(condition);
    }, [condition])

    return (
        <div className='search-page'>
            <input
                className='text-field'
                autoFocus type='text'
                value={condition}
                onChange={(e) => setCondition(e.target.value)} />
            <div>
                <ProductList products={searchResult} />
                {condition && searchResult.length === 0 &&
                    <p>No result</p>
                }
            </div>
        </div>
    )
}

export default SearchPage