import { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./SearchFilter.css";

const ITEMS_PER_PAGE = 6;

const SearchFilter = ({ products }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredProducts = useMemo(() => {
    let data = [...products];

    // 🔍 SEARCH
    if (search) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 💰 PRICE FILTER
    if (price !== "all") {
      const limit = Number(price);
      data = data.filter((p) => p.price <= limit);
    }

    // ↕ SORTING
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    if (sort === "newest") {
      data.sort((a, b) => b.id - a.id);
    }

    return data;
  }, [products, search, price, sort]);

  /* ---------------- RESET PAGINATION ---------------- */
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [search, price, sort]);

  return (
    <>
      {/* 🔍 TOP BAR */}
      <div className="top-bar">
        <input
          className="search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="filter-btn-open"
          onClick={() => setSidebarOpen(true)}
        >
          Filter ☰
        </button>
      </div>

      {/* 🛍 PRODUCTS */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts
            .slice(0, visibleCount)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </div>

      {/* ✅ LOAD MORE BUTTON */}
      {visibleCount < filteredProducts.length && (
        <div className="load-more-wrapper">
          <button
            className="load-more-btn"
            onClick={() =>
              setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
            }
          >
            Load More
          </button>
        </div>
      )}

      {/* 👉 SIDEBAR */}
      <div className={`filter-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3 className="container">Filters</h3>
          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* PRICE */}
        <h4 className="container">Price</h4>
        <div className="sidebar-group">
          <button onClick={() => setPrice("all")}>All</button>
          <button onClick={() => setPrice("500")}>Below ₹500</button>
          <button onClick={() => setPrice("1000")}>Below ₹1000</button>
          <button onClick={() => setPrice("2000")}>Below ₹2000</button>
        </div>

        {/* SORT */}
        <h4 className="container">Sort</h4>
        <div className="sidebar-group">
          <button onClick={() => setSort("newest")}>Newest</button>
          <button onClick={() => setSort("low")}>Price Low → High</button>
          <button onClick={() => setSort("high")}>Price High → Low</button>

          {/* CLEAR */}
          <button
            className="clear-btn"
            onClick={() => {
              setSort("");
              setPrice("all");
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* 🌫 OVERLAY */}
      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default SearchFilter;
