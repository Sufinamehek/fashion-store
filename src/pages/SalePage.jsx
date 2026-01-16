import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import saleProducts from "../data/saleProducts";
import ProductCard from "../components/ProductCard";
import "./SalePage.css";

const SalePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialFilter = params.get("filter") || "all";

  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  // FILTER PRODUCTS
  const filteredProducts =
    filter === "all"
      ? saleProducts
      : saleProducts.filter(
          (p) => p.category?.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="sale-page">
      <h2 className="sale-title">🔥 Sale - Under ₹999</h2>

      {/* FILTER BUTTONS */}
      <div className="filter-bar">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "women" ? "active" : ""}
          onClick={() => setFilter("women")}
        >
          Women
        </button>

        <button
          className={filter === "men" ? "active" : ""}
          onClick={() => setFilter("men")}
        >
          Men
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products">No sale products found.</p>
        )}
      </div>
    </div>
  );
};

export default SalePage;
