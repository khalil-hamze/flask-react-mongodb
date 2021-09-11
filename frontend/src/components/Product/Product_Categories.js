import React from 'react';

function Product_Categories() {
  const { title, img, description } = this.props.Product_Categories;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Product_Categories;