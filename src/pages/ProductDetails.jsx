// src/pages/ProductDetails.jsx
import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/wishlistContext";
import { toast } from "react-toastify";
import { SIZE_MAP } from "../data/sizes";
import "./ProductDetails.css";
import products from "../data/products";
import menProducts from "../data/menProducts";
import productskids from "../data/productskids";
import productgift from "../data/productgift";
import saleProducts from "../data/saleProducts";

const ProductDetails = () => {
  const { id } = useParams();

  // Combine all products
  const allProducts = [
    ...products,
    ...menProducts,
    ...productskids,
    ...productgift,
    ...saleProducts,
  ];

  // ✅ Compare IDs as strings to prevent type mismatch
  const product = allProducts.find((p) => p.id.toString() === id);

  const { dispatch: cartDispatch } = useContext(CartContext);
  const { wishlist, dispatch: wishlistDispatch } = useContext(WishlistContext);

  const [selectedSize, setSelectedSize] = useState(null);

  const isWishlisted = product ? wishlist.some((item) => item.id === product.id) : false;

  if (!product) {
    return (
      <div className="product-details">
        <p>Product not found!</p>
        {/* <Link to="/" className="back-home">Back to Home</Link> */}
      </div>
    );
  }

  // Determine sizes to show (fallback to product.sizes)
  const availableSizes = (product.sizeType && SIZE_MAP[product.sizeType]) || product.sizes || [];

  // ADD TO CART
  const addToCart = () => {
    if (product.hasSize && !selectedSize) {
      toast.error("Please select a size", { position: "top-center" });
      return;
    }

    cartDispatch({
      type: "ADD_TO_CART",
      payload: { ...product, size: product.hasSize ? selectedSize : null },
    });

    toast.success("Added to cart 🛒", { position: "top-center" });
  };

  // TOGGLE WISHLIST
  const toggleWishlist = () => {
    if (product.hasSize && !selectedSize) {
      toast.error("Please select a size", { position: "top-center" });
      return;
    }

    wishlistDispatch({
      type: isWishlisted ? "REMOVE_FROM_WISHLIST" : "ADD_TO_WISHLIST",
      payload: { ...product, size: selectedSize },
    });

    toast.success(
      isWishlisted ? "Removed from wishlist" : "Added to wishlist ❤️",
      { position: "top-center" }
    );
  };

  return (
    <div className="product-details">
      {/* <Link to="/" className="back-home">← Back to Home</Link> */}

      <div className="product-content">
        {/* IMAGE */}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* INFO */}
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">₹{product.price}</p>

          {/* SIZE SELECTION */}
          {product.hasSize && availableSizes.length > 0 && (
            <div className="size-section">
              <p className="size-title">Select Size</p>
              <div className="size-options">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    className={selectedSize === size ? "active" : ""}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="action-buttons">
            <button onClick={addToCart} className="add-to-cart-btn">Add to Cart</button>

            <button
              onClick={toggleWishlist}
              className={`wishlist-heart ${isWishlisted ? "active" : ""}`}
            >
              {isWishlisted ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
