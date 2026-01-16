import "./WishlistSidebar.css";
import { useContext } from "react";
import { WishlistContext } from "../context/wishlistContext";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const WishlistSidebar = ({ isOpen, closeWishlist }) => {
  const { wishlist, dispatch: wishlistDispatch } = useContext(WishlistContext);
  const { dispatch: cartDispatch } = useContext(CartContext);

  const handleAddToCart = (item) => {
    // 1️⃣ Add to Cart
    cartDispatch({ type: "ADD_TO_CART", payload: item });
    toast.success(`${item.name} added to cart!`);
  };

  const handleRemoveFromWishlist = (item) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
    toast.info(`${item.name} removed from wishlist!`);
  };

  return (
    <div className={`wishlist-sidebar ${isOpen ? "open" : ""}`}>
      <div className="wishlist-header">
        <h3>Wishlist ❤️</h3>
        <button onClick={closeWishlist}>✖</button>
      </div>

      {wishlist.length === 0 ? (
        <p className="empty">Your wishlist is empty</p>
      ) : (
        wishlist.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="wishlist-item-details">
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <button className="btn-add" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>

              <button className="btn-remove" onClick={() => handleRemoveFromWishlist(item)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistSidebar;
