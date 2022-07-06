import React from "react";
import { useProduct } from "../../../context/productsContext";
import { initialFilterState } from "../../../utils";

export const FilterSection = () => {
  const { filters, setFilters } = useProduct();
  return (
    <div
      className="col gap-2 filter-secti
      on w-3-12 bg-dark h-screen p-2 text-light"
    >
      <form className="row justify-between">
        <h1>Filter</h1>
        <button
          type="reset"
          className="btn btn-primary"
          onClick={() => setFilters(initialFilterState)}
        >
          Clear Filter
        </button>
      </form>
      <div className="flex col gap-2">
        <div className="col gap-1">
          <h1>Sort by</h1>
          <div className="row flex-wrap gap-1 items-center">
            <label class="radio-container">
              Low to High
              <input
                type="radio"
                name="price"
                onChange={() => {
                  setFilters({ ...filters, isPriceHighToLow: false });
                }}
                checked={!filters.isPriceHighToLow}
              />
              <span class="checkmark"></span>
            </label>
            <label class="radio-container">
              High to Low
              <input
                type="radio"
                name="price"
                onChange={() => {
                  setFilters({ ...filters, isPriceHighToLow: true });
                }}
                checked={filters.isPriceHighToLow}
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="col gap-1">
          <h1>Size</h1>
          <div className="row gap-1 flex-wrap items-center">
            <label class="radio-container">
              S
              <input
                type="radio"
                name="size"
                value="S"
                onChange={(e) => {
                  setFilters({ ...filters, size: e.target.value });
                }}
                checked={filters.size === "S"}
              />
              <span class="checkmark"></span>
            </label>
            <label class="radio-container">
              M
              <input
                type="radio"
                name="size"
                value="M"
                onChange={(e) => {
                  setFilters({ ...filters, size: e.target.value });
                }}
                checked={filters.size === "M"}
              />
              <span class="checkmark"></span>
            </label>
            <label class="radio-container">
              L
              <input
                type="radio"
                name="size"
                value="L"
                onChange={(e) => {
                  setFilters({ ...filters, size: e.target.value });
                }}
                checked={filters.size === "L"}
              />
              <span class="checkmark"></span>
            </label>
            <label class="radio-container">
              XL
              <input
                type="radio"
                name="size"
                value="XL"
                onChange={(e) => {
                  setFilters({ ...filters, size: e.target.value });
                }}
                checked={filters.size === "XL"}
              />
              <span class="checkmark"></span>
            </label>
            <label class="radio-container">
              XXL
              <input
                type="radio"
                name="size"
                value="XXL"
                onChange={(e) => {
                  setFilters({ ...filters, size: e.target.value });
                }}
                checked={filters.size === "XXL"}
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="col gap-1">
          <h1>Brands</h1>
          <div className="row gap-1 flex-wrap items-center">
            <label class="checkbox-container">
              Zara
              <input
                type="checkbox"
                value="Zara"
                onChange={(e) => {
                  if (e.target.checked)
                    setFilters({
                      ...filters,
                      brands: [...filters.brands, e.target.value],
                    });
                  else {
                    const brands = filters.brands.filter(
                      (brand) => brand !== e.target.value
                    );
                    setFilters({
                      ...filters,
                      brands,
                    });
                  }
                }}
                checked={filters.brands.includes("Zara")}
              />
              <span class="checkmark"></span>
            </label>
            <label class="checkbox-container">
              Levis
              <input
                type="checkbox"
                value="Levis"
                onChange={(e) => {
                  if (e.target.checked)
                    setFilters({
                      ...filters,
                      brands: [...filters.brands, e.target.value],
                    });
                  else {
                    const brands = filters.brands.filter(
                      (brand) => brand !== e.target.value
                    );
                    setFilters({
                      ...filters,
                      brands,
                    });
                  }
                }}
                checked={filters.brands.includes("Levis")}
              />
              <span class="checkmark"></span>
            </label>
            <label class="checkbox-container">
              Puma
              <input
                type="checkbox"
                value="Puma"
                onChange={(e) => {
                  if (e.target.checked)
                    setFilters({
                      ...filters,
                      brands: [...filters.brands, e.target.value],
                    });
                  else {
                    const brands = filters.brands.filter(
                      (brand) => brand !== e.target.value
                    );
                    setFilters({
                      ...filters,
                      brands,
                    });
                  }
                }}
                checked={filters.brands.includes("Puma")}
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="col gap-1">
          <h1>For Gender</h1>
          <div className="row gap-1 flex-wrap items-center">
            <label class="checkbox-container">
              Male
              <input
                type="checkbox"
                value="Male"
                onChange={(e) => {
                  if (e.target.checked)
                    setFilters({
                      ...filters,
                      genders: [...filters.genders, e.target.value],
                    });
                  else {
                    const genders = filters.genders.filter(
                      (gender) => gender !== e.target.value
                    );
                    setFilters({
                      ...filters,
                      genders,
                    });
                  }
                }}
                checked={filters.genders.includes("Male")}
              />
              <span class="checkmark"></span>
            </label>
            <label class="checkbox-container">
              Female
              <input
                type="checkbox"
                value="Female"
                onChange={(e) => {
                  if (e.target.checked)
                    setFilters({
                      ...filters,
                      genders: [...filters.genders, e.target.value],
                    });
                  else {
                    const genders = filters.genders.filter(
                      (gender) => gender !== e.target.value
                    );
                    setFilters({
                      ...filters,
                      genders,
                    });
                  }
                }}
                checked={filters.genders.includes("Female")}
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
