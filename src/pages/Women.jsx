import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products";
import SearchFilter from "../components/SearchFilter";
import "./Women.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Tops", value: "tops" },
  { label: "Ethnic", value: "ethnic" },
  { label: "Jeans", value: "jeans" },
  { label: "Trousers", value: "trousers" },
  { label: "Bags", value: "bags" },
  { label: "Jewellery", value: "jewellery" },
  // { label: "Scarf", value: "scarf" },
];

const Women = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialFilter = params.get("filter") || "all";

  const [filter, setFilter] = useState(initialFilter);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  // ✅ Category filter logic stays here
  useEffect(() => {
    const data =
      filter === "all"
        ? products.filter((p) => p.category === "women")
        : products.filter(
            (p) =>
              p.category === "women" &&
              p.subCategory?.toLowerCase() === filter
          );

    setCategoryProducts(data);
  }, [filter]);

  return (
    <div className="women-page">
      <h2 className="women-title">Women Collection</h2>

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

      {/* 🔍 REUSABLE SEARCH + SIDEBAR FILTER */}
      <SearchFilter products={categoryProducts} />
    </div>
  );
};

export default Women;
