import "./CartSidebar.css";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify"; // ✅ import toast

const CartSidebar = ({ isOpen, closeCart }) => {
  const { cart, dispatch } = useContext(CartContext);
  const [message, setMessage] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 🔒 BODY SCROLL LOCK
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  // ✅ HANDLER FUNCTIONS
  const handleIncrease = (key) => {
    dispatch({ type: "INCREASE_QTY", payload: key });
    toast.success("Quantity increased!");
  };

  const handleDecrease = (key, item) => {
    if (item.qty === 1) {
      dispatch({ type: "REMOVE_FROM_CART", payload: key });
      toast.info(`${item.name} removed from cart`);
    } else {
      dispatch({ type: "DECREASE_QTY", payload: key });
      toast.success("Quantity decreased!");
    }
  };

  return (
    <>
      {/* OVERLAY */}
      <div className="cart-overlay" onClick={closeCart}></div>

      <div className="cart-sidebar open">
        {/* HEADER */}
        <div className="cart-header">
          <h3>Cart</h3>
          <button onClick={closeCart}>✕</button>
        </div>

        {/* MESSAGE */}
        {message && <p className="cart-message">{message}</p>}

        {/* ITEMS */}
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty">Your cart is empty</p>
          ) : (
            cart.map((item) => {
              const key = `${item.id}-${item.size || "nosize"}`;

              return (
                <div className="cart-item" key={key}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h4>{item.name}</h4>

                    <div className="qty">
                      <button onClick={() => handleDecrease(key, item)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleIncrease(key)}>+</button>
                    </div>

                    <p>₹{item.price * item.qty}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* FOOTER */}
        <div className="cart-footer">
          <h4>Subtotal: ₹{total}</h4>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
