import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

// helper to uniquely identify cart item (id + size)
const getItemKey = (item) => `${item.id}-${item.size || "nosize"}`;

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newItem = action.payload;
      const newKey = getItemKey(newItem);

      const existingItem = state.find(
        (item) => getItemKey(item) === newKey
      );

      if (existingItem) {
        return state.map((item) =>
          getItemKey(item) === newKey
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...state, { ...newItem, qty: 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter(
        (item) => getItemKey(item) !== action.payload
      );

    case "INCREASE_QTY":
      return state.map((item) =>
        getItemKey(item) === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    case "DECREASE_QTY":
      return state
        .map((item) =>
          getItemKey(item) === action.payload
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(
    cartReducer,
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
