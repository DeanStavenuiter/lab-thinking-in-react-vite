import React from "react";

const ProductRow = ({ products }) => {
  return (products.map(({ name, price, inStock }) => {
    return (
    <tr>
      <td style={{color: inStock ? "" : 'red'}}>{name}</td>
      <td>{price}</td>
    </tr>
    )
  })
  )
};

export default ProductRow;
