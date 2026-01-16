import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductSection from "../components/ProductSection";
import GiftBanner from "../components/GiftBanner";
import "./Home.css";

import Banner1 from "../assets/Banner1.jpg";
import Banner2 from "../assets/Banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import Gift from "../assets/Gift.jpg";
import giftForHim from "../assets/gift-him/bf.jpg";
import giftForHer from "../assets/gift-her/gf.jpg";

const Home = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: Banner1,
      title: "NEW YEAR SALE",
      subtitle: "Modern • Minimal • Comfortable",
      link: "/sale",
    },
    {
      id: 2,
      image: Gift,
      title: "READY TO GIFT",
      subtitle: "Perfect for your loved ones",
      link: "/gifts",
    },
    {
      id: 3,
      image: banner3,
      title: "CELEBRATE THE SEASON",
      subtitle: "Style meets comfort",
      link: "/women",
    },
    {
      id: 4,
      image: Banner2,
      title: "EXCLUSIVE COLLECTION",
      subtitle: "Limited edition fashion",
      link: "/men",
    },
  ];

  const bestSellingProducts = products.filter((p) => p.bestSeller);
  const menProducts = products.filter((p) => p.category === "men");
  const womenProducts = products.filter((p) => p.category === "women");

  return (
    <>
      {/* ===== BOOTSTRAP CAROUSEL ===== */}
      <div
        id="homeCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.image}
                className="d-block w-100 carousel-img"
                alt={slide.title}
              />

              <div className="carousel-caption">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button
                  className="btn btn-dark"
                  onClick={() => navigate(slide.link)}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>






      {/* ---------------- PRODUCT SECTIONS ---------------- */}
      
      <ProductSection   title="Best Selling" products={bestSellingProducts} showCount={4}  />

      <GiftBanner image={giftForHim} title="Gifts For Him" link="/gifts?type=him" />

      <ProductSection title="Men Collection" products={menProducts} showCount={4} link="/men" />

      <GiftBanner image={giftForHer} title="Gifts For Her" link="/gifts?type=her" />

      <ProductSection title="Women Collection" products={womenProducts} showCount={4} link="/women"  />
    </>
  );
};

export default Home;
