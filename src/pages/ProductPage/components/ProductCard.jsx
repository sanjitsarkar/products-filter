import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div class="card card-sm" id="product-card">
      <div class="card-header">
        <img src={product.thumbnail} alt={product.title} class="w-full" />
      </div>
      <div class="card-bottom">
        <div class="card-body">
          <h1 class="card-title">{product.title}</h1>
          <p class="card-description">{product.description}</p>
        </div>
        <div class="card-footer items-center">
          <div class="row items-center gap-05">
            <h4 class="o-70 font-semibold">Price</h4>
            <h4 class="text-md font-medium">${product.price}</h4>
          </div>
          <h4 class="o-70 font-semibold">Size: {product.size}</h4>
          <h4 class="o-70 font-semibold"> {product.brand}</h4>
        </div>
      </div>
    </div>
  );
};
