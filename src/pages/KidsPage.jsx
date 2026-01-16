import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import productsKids from "../data/productskids";
import SearchFilter from "../components/SearchFilter";
import "./KidsPage.css";

// MAIN CATEGORIES
const MAIN_CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Boy", value: "boy" },
  { label: "Girl", value: "girl" },
  { label: "Accessories", value: "accessories" },
];

// SUB CATEGORIES
const SUB_CATEGORIES = {
  boy: [
    { label: "All", value: "all" },
    { label: "Basic", value: "basic" },
    { label: "Bottomwear", value: "bottomwear" }, // ✅ fixed
    { label: "Knitwear", value: "knitwear" },
  ],
  girl: [
    { label: "All", value: "all" },
    { label: "Basic", value: "basic" },
    { label: "Bottomwear", value: "bottomwear" }, // ✅ fixed
    { label: "Knitwear", value: "knitwear" },
  ],
  accessories: [
    { label: "All", value: "all" },
    { label: "Premium Look", value: "premium look" },
  ],
};

const normalizeSubCategory = (sub) => {
  if (!sub) return "";

  const value = sub.toLowerCase().trim();

  // normalize different naming
  if (value === "bottom") return "bottomwear";
  if (value === "nightwear") return "knitwear";

  return value;
};

const KidsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const [main, setMain] = useState(
    params.get("main")?.toLowerCase() || "all"
  );
  const [sub, setSub] = useState(
    params.get("sub")?.toLowerCase() || "all"
  );

  useEffect(() => {
    setMain(params.get("main")?.toLowerCase() || "all");
    setSub(params.get("sub")?.toLowerCase() || "all");
  }, [location.search]);

  // ✅ Filter products safely
  const categoryFiltered = useMemo(() => {
    return productsKids.filter((p) => {
      const mainCat = p.mainCategory?.toLowerCase() || "";
      const subCat = normalizeSubCategory(p.subCategory);

      if (main !== "all" && mainCat !== main) return false;
      if (sub !== "all" && subCat !== sub) return false;

      return true;
    });
  }, [main, sub]);

  return (
    <div className="kids-page">
      <h2 className="kids-title">Kids Collection</h2>

      {/* MAIN CATEGORY */}
      <div className="filter-bar main">
        {MAIN_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            className={main === cat.value ? "active" : ""}
            onClick={() =>
              navigate(`/kids?main=${cat.value}&sub=all`)
            }
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* SUB CATEGORY */}
      {main !== "all" && (
        <div className="filter-bar sub">
          {SUB_CATEGORIES[main]?.map((s) => (
            <button
              key={s.value}
              className={sub === s.value ? "active" : ""}
              onClick={() =>
                navigate(`/kids?main=${main}&sub=${s.value}`)
              }
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* PRODUCTS */}
      <SearchFilter products={categoryFiltered} />
    </div>
  );
};

export default KidsPage;
