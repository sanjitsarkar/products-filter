import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialFilterState, shuffle } from "../utils";

const ProductContext = createContext();
const initialState = {
  loading: false,
  data: [],
  error: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};
const ProductProvider = ({ children }) => {
  const [products, dispatchProducts] = useReducer(reducer, initialState);
  const [filters, setFilters] = useState(initialFilterState);
  const filterProducts = async () => {
    const { brands, genders, size, isPriceHighToLow } = filters;
    dispatchProducts({ type: "LOADING" });
    try {
      let _products = await fetch("./backend/products.json", {
        method: "get",
      });

      _products = await _products.json();
      _products = shuffle(_products.products);

      if (brands && brands.length > 0) {
        _products = _products.filter((product) =>
          brands.includes(product.brand)
        );
      }

      if (genders && genders.length > 0) {
        _products = _products.filter((product) =>
          genders.includes(product.gender)
        );
      }
      if (size) {
        _products = _products.filter((product) => product.size === size);
      }
      if (isPriceHighToLow) {
        _products = _products.sort(
          (product1, product2) => product1.price > product2.price
        );
      } else {
        _products = _products.sort(
          (product1, product2) => product1.price < product2.price
        );
      }
      dispatchProducts({ type: "SUCCESS", payload: _products });
    } catch (error) {
      dispatchProducts({ type: "FAILURE", payload: error.message });
    }
  };
  useEffect(() => {
    filterProducts();
    console.log("filters", filters);
  }, [filters]);
  return (
    <ProductContext.Provider value={{ products, setFilters, filters }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
