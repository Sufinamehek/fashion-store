import { useNavigate } from "react-router-dom";
import "./GiftBanner.css";

const GiftBanner = ({ image, title, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className="gift-banner"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => navigate(link)}
    >
      <div className="gift-overlay">
        <button className="gift-btn">{title}</button>
      </div>
    </div>
  );
};

export default GiftBanner;
