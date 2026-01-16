// src/data/saleProducts.js

// ================== WOMEN ==================
import e1 from "../assets/women/clothing/ethnic/e1.jpg";
import e2 from "../assets/women/clothing/ethnic/e2.jpg";
import b1 from "../assets/women/Accessories/bags/b1.jpg";
import w2 from "../assets/women/Accessories/jewellery/w2.jpg";
import s1 from "../assets/women/Accessories/Scraf/s1.jpg";

// ================== MEN ==================
import sh from "../assets/men/clothing/topwear/shirts/sh.jpg";
import ts from "../assets/men/clothing/topwear/t-shirts/ts.jpg";
import a1 from "../assets/men/clothing/accessories/a1.jpg";
import a3 from "../assets/men/clothing/accessories/a3.jpg";

// ================== SALE PRODUCTS ==================
const saleProducts = [
  // ===== WOMEN =====
  // { id: 100, name: "Casual Top", price: 999, image: top1, category: "women" },
  // { id: 200, name: "Summer Top", price: 899, image: top3, category: "women" }, // slightly above ₹999 if needed remove/change price
  { id: 300, name: "Hand Bag", price: 799, image: b1, category: "women" },
  { id: 400, name: "Traditional Earrings", price: 699, image: w2, category: "women" },
  { id: 500, name: "Printed Scarf", price: 499, image: s1, category: "women" },

  // ===== MEN =====
  { id: 600, name: "Formal Shirt", price: 999, image: sh, category: "men" },
  { id: 700, name: "Basic T-Shirt", price: 999, image: ts, category: "men" },
  { id: 800, name: "Men Wallet", price: 799, image: a1, category: "men" },
  { id: 900, name: "Men Cap", price: 599, image: a3, category: "men" },

    {
      id: 100,
      name: "A line Printed Dress",
      price: 989,
      image: e1,
      category: "women",
      type: "clothing",
      subCategory: "ethnic",
      hasSize: true,
      sizeType: "clothing",
    },
    {
      id: 200,
      name: "Blazer Dress",
      price: 999,
      image: e2,
      category: "women",
      type: "clothing",
      subCategory: "ethnic",
      hasSize: true,
      sizeType: "clothing",
    },
];

export default saleProducts;
