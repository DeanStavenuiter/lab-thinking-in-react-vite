import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, setProducts }) => {
    // console.log(products)
  return (
    <div>
      <table style={{borderCollapse: 'collapse', width: '50vw' }}>
        <thead style={{background: 'grey', textAlign: 'left' }}>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow products={products} />
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
