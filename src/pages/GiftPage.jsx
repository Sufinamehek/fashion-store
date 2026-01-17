import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import giftProducts from "../data/productgift";
import SearchFilter from "../components/SearchFilter";
import "./Men.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Gift For Him", value: "him" },
  { label: "Gift For Her", value: "her" },
];

const GiftPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const initialFilter = params.get("filter") || "all";

  const [filter, setFilter] = useState(initialFilter);
  const [categoryProducts, setCategoryProducts] = useState([]);

  /* =========================
     Sync URL Filter
  ========================= */
  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  /* =========================
     Category Filtering
  ========================= */
  useEffect(() => {
    const data =
      filter === "all"
        ? giftProducts
        : giftProducts.filter(
            (product) =>
              product.subCategory?.toLowerCase() === filter
          );

    setCategoryProducts(data);
  }, [filter]);

  return (
    <div className="gift-page">
      <h2 className="gift-title" >🎁 Gifts Collection</h2>

      {/* ================= FILTER BUTTONS ================= */}
      <div className="filter-bar">
        {FILTERS.map((item) => (
          <button
            key={item.value}
            className={`filter-btn ${
              filter === item.value ? "active" : ""
            }`}
            onClick={() => navigate(`/gifts?filter=${item.value}`)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ================= REUSABLE SEARCH FILTER ================= */}
      <SearchFilter products={categoryProducts} />
    </div>
  );
};

export default GiftPage;
