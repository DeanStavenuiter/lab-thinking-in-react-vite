import { useState } from 'react';
import jsonData from '../data.json';
import React from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <ProductTable products={products} setProducts={setProducts}/>
        <SearchBar jsonData={jsonData} setProducts={setProducts}/>
      </div>    
  )
}
export default ProductsPage;