import { createContext, useReducer, useEffect } from "react";

export const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TO_WISHLIST": {
      const exists = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size
      );

      // duplicate same product + same size block
      if (exists) return state;

      return [...state, action.payload];
    }

    case "REMOVE_FROM_WISHLIST":
      return state.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.size === action.payload.size
          )
      );

    case "CLEAR_WISHLIST":
      return [];

    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(
    wishlistReducer,
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  // 🔥 LocalStorage sync
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
