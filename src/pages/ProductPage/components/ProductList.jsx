import React from "react";
import { useProduct } from "../../../context/productsContext";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { products } = useProduct();

  return (
    <div className="products-section flex col gap-1 w-9-12 bg-dark-2 p-2 text-light">
      <h1>Showing {products.data.length} Products</h1>
      {products.loading && (
        <h1 className="text-center ">Loading products...</h1>
      )}
      {!products.loading && products.data.length == 0 && (
        <h1 className="text-center ">No products available</h1>
      )}
      <div className="grid gap-05 product-grid">
        {!products.loading &&
          products.data.length > 0 &&
          products.data.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
};
