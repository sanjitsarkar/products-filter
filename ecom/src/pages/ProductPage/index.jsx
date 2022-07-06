import React from "react";
import { FilterSection } from "./components/FilterSection";
import { ProductList } from "./components/ProductList";
import "./index.css";
export const ProductPage = () => {
  return (
    <section className="row  w-screen h-screen overflow-hidden">
      <FilterSection />
      <ProductList />
    </section>
  );
};
