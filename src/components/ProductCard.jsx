import { Link } from "react-router-dom";
import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  // ⭐ Rating (safe to keep)
  const [rating, setRating] = useState(() => {
    return JSON.parse(localStorage.getItem(`rating-${product.id}`)) || 0;
  });

  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${product.id}`, value);
  };

  return (<div className="product-card">

  {/* IMAGE + QUICK VIEW ONLY */}
  <div className="image-wrapper">
    <img src={product.image} alt={product.name} />

    <Link to={`/product/${product.id}`} className="quick-view-btn">
      Quick View
    </Link>
  </div>

  {/* CONTENT BELOW IMAGE */}
  <h4>{product.name}</h4>
  <p className="price">₹{product.price}</p>

  {/* ⭐ RATING (SAFE) */}
  <div className="rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? "filled" : ""}`}
        onClick={() => handleRating(star)}
      >
        ★
      </span>
    ))}
  </div>

</div>
  );
};

export default ProductCard;
