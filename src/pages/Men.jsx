import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import menProducts from "../data/menProducts";
import SearchFilter from "../components/SearchFilter";
import "./Men.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "T-Shirts", value: "tshirts" },
  { label: "Shirts", value: "shirts" },
  { label: "Jackets", value: "jackets" },
  { label: "Jeans", value: "jeans" },
  { label: "Trousers", value: "trousers" },
  { label: "Accessories", value: "accessories" },
];

const Men = () => {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialFilter = params.get("filter") || "all";

  const [filter, setFilter] = useState(initialFilter);
  const [categoryProducts, setCategoryProducts] = useState(menProducts);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  // ✅ Category filter logic stays in Men page
  useEffect(() => {
    const data =
      filter === "all"
        ? menProducts
        : menProducts.filter(
            (product) =>
              product.subCategory?.toLowerCase() === filter
          );

    setCategoryProducts(data);
  }, [filter]);

  return (
    <div className="men-page">
      <h2 className="men-title">Men Collection</h2>

      {/* CATEGORY BUTTON BAR */}
      <div className="filter-bar">
        {FILTERS.map((item) => (
          <button
            key={item.value}
            className={`filter-btn ${
              filter === item.value ? "active" : ""
            }`}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 🔍 SEARCH + SIDEBAR FILTER COMPONENT */}
      <SearchFilter products={categoryProducts} />
    </div>
  );
};

export default Men;
