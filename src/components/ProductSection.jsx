import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./ProductSection.css";

const ProductSection = ({ title, products = [], showCount = 4, link }) => {
  return (
    <div className="product-layout">

      {/* SECTION TITLE WITH LINK */}
      {title && (
        link ? (
          <Link to={link} className="section-link">
            <h2 className="section-title">{title}</h2>
          </Link>
        ) : (
          <h2 className="section-title">{title}</h2>
        )
      )}

      <div className="product-grid">
        {products.length === 0 ? (
          <h3 className="no-product">No products found 😢</h3>
        ) : (
          products.slice(0, showCount).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        )}
      </div>

    </div>
  );
};

export default ProductSection;
