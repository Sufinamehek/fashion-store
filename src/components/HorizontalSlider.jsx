import { useNavigate } from "react-router-dom";
import "./HorizontalSlider.css";

const HorizontalSlider = ({ title, products, buttonText, buttonLink }) => {
  const navigate = useNavigate();

  return (
    <div className="horizontal-slider-section">
      <div className="slider-header">
        <h2>{title}</h2>
        {buttonText && buttonLink && (
          <button
            className="slider-header-btn"
            onClick={() => navigate(buttonLink)}
          >
            {buttonText}
          </button>
        )}
      </div>

      <div className="horizontal-slider">
        {products.map((product) => (
          <div className="slider-card" key={product.id}>
            <div
              className="slider-card-image"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              {product.section && (
                <div className="slider-card-badge">
                  {product.section === "gift-him" ? "Gift For Him" : "Gift For Her"}
                </div>
              )}
            </div>
            <div className="slider-card-info">
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
