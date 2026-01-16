// ================= ASSETS =================

// ===== Best Selling =====
import her1 from "../assets/gift-her/her1.jpg";
import bott6 from "../assets/kids/boy/bottom/bott6.jpg";
import sh4 from "../assets/men/clothing/topwear/shirts/sh4.jpg";

// ===== Men (Homepage Banners) =====
import men1 from "../assets/men/men1.jpg";
import men2 from "../assets/men/men2.jpg";
import men3 from "../assets/men/men3.jpg";
import men4 from "../assets/men/men.jpg";

// ===== Women Clothing =====
// Ethnic
import e1 from "../assets/women/clothing/ethnic/e1.jpg";
import e2 from "../assets/women/clothing/ethnic/e2.jpg";
import e3 from "../assets/women/clothing/ethnic/e3.jpg";
import e4 from "../assets/women/clothing/ethnic/e4.jpg";

// Tops
import top1 from "../assets/women/clothing/tops/t1.jpg";
import top2 from "../assets/women/clothing/tops/t2.jpg";
import top3 from "../assets/women/clothing/tops/t3.jpg";

// Bottomwear – Jeans
import j1 from "../assets/women/bottomwear/jeans/j1.jpg";
import j2 from "../assets/women/bottomwear/jeans/j2.jpg";
import j3 from "../assets/women/bottomwear/jeans/j3.jpg";
import j5 from "../assets/women/bottomwear/jeans/j5.jpg";

// Bottomwear – Trousers
import t1 from "../assets/women/bottomwear/trousers/t1.jpg";
import t2 from "../assets/women/bottomwear/trousers/t2.jpg";
import t3 from "../assets/women/bottomwear/trousers/t3.jpg";
import t4 from "../assets/women/bottomwear/trousers/t4.jpg";

// Women Accessories
// Bags
import b1 from "../assets/women/Accessories/bags/b1.jpg";
import b2 from "../assets/women/Accessories/bags/b2.jpg";
import b3 from "../assets/women/Accessories/bags/b3.jpg";
// Jewellery
import w from "../assets/women/Accessories/jewellery/w.jpg";
import w2 from "../assets/women/Accessories/jewellery/w2.jpg";
import w3 from "../assets/women/Accessories/jewellery/w3.jpg";
// Scarf
import s1 from "../assets/women/Accessories/Scraf/s1.jpg";

// ================= PRODUCTS =================
const products = [
  // ===== Best Sellers =====
  {
    id: 1,
    name: "Elegant Brooch Pin",
    price: 1999,
    image: her1,
    category: "women",
    type: "accessories",
    subCategory: "bags",
    giftFor: "her",
    hasSize: false,
  },
  {
    id: 2,
    name: "Straight Leg Jeans",
    price: 499,
    image: bott6,
    category: "kids",
    mainCategory: "boy",
    type: "clothing",
    subCategory: "bottomwear",
    bestSeller: true,
    hasSize: true,
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
  },
  { id: 2216, 
    name: "Plain Shirt", 
    price: 1799, 
    image: sh4, 
    category: "men", 
    type: "topwear", 
    subCategory: "shirts",  
    hasSize: true, 
    sizeType: "clothing",
    bestSeller: true, 
    description: "Printed shirt for casual outings." },


  // ===== Men Landing =====
  {
    id: 4,
    name: "Men 1",
    price: 1499,
    image: men1,
    category: "men",
    type: "clothing",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 5,
    name: "Men 2",
    price: 1999,
    image: men2,
    category: "men",
    type: "clothing",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 6,
    name: "Men 3",
    price: 3499,
    image: men3,
    category: "men",
    type: "clothing",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 7,
    name: "Men 4",
    price: 899,
    image: men4,
    category: "men",
    type: "clothing",
    hasSize: true,
    sizeType: "clothing",
  },

  // ===== Women Ethnic =====
  {
    id: 8,
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
    id: 9,
    name: "Blazer Dress",
    price: 999,
    image: e2,
    category: "women",
    type: "clothing",
    subCategory: "ethnic",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 10,
    name: " Draped Bodycon Dress",
    price: 2799,
    image: e3,
    category: "women",
    type: "clothing",
    subCategory: "ethnic",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 11,
    name: "Cocktail Dress",
    price: 2299,
    image: e4,
    category: "women",
    type: "clothing",
    subCategory: "ethnic",
    hasSize: true,
    sizeType: "clothing",
    bestSeller: true,
  },

  // ===== Women Tops =====
  {
    id: 12,
    name: "Floral Chiffon Top",
    price: 1299,
    image: top1,
    category: "women",
    type: "clothing",
    subCategory: "tops",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 13,
    name: "Georgette Top",
    price: 1399,
    image: top2,
    category: "women",
    type: "clothing",
    subCategory: "tops",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 14,
    name: "Summer Top",
    price: 1199,
    image: top3,
    category: "women",
    type: "clothing",
    subCategory: "tops",
    hasSize: true,
    sizeType: "clothing",
    
  },

  // ===== Women Jeans =====
  {
    id: 15,
    name: "Blue Denim Jeans",
    price: 1799,
    image: j1,
    category: "women",
    type: "bottomwear",
    subCategory: "jeans",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 16,
    name: "High-Waist Baggy Jeans",
    price: 1899,
    image: j2,
    category: "women",
    type: "bottomwear",
    subCategory: "jeans",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 17,
    name: "Bootcut Jeans",
    price: 1999,
    image: j3,
    category: "women",
    type: "bottomwear",
    subCategory: "jeans",
    hasSize: true,
    sizeType: "clothing",
     bestSeller: true,
  },
  {
    id: 18,
    name: "Casual Fit Jeans",
    price: 1699,
    image: j5,
    category: "women",
    type: "bottomwear",
    subCategory: "jeans",
    hasSize: true,
    sizeType: "clothing",
  },

  // ===== Women Trousers =====
  {
    id: 19,
    name: "High-Waist Palazzo Pants",
    price: 1899,
    image: t1,
    category: "women",
    type: "bottomwear",
    subCategory: "trousers",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 20,
    name: "Wide Leg Trousers",
    price: 1999,
    image: t2,
    category: "women",
    type: "bottomwear",
    subCategory: "trousers",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 21,
    name: "Straight-Leg Trousers",
    price: 2099,
    image: t3,
    category: "women",
    type: "bottomwear",
    subCategory: "trousers",
    hasSize: true,
    sizeType: "clothing",
  },
  {
    id: 22,
    name: "Casual Cotton Trousers",
    price: 1799,
    image: t4,
    category: "women",
    type: "bottomwear",
    subCategory: "trousers",
    hasSize: true,
    sizeType: "clothing",
  },

  // ===== Women Accessories =====
  // Bags
  {
    id: 23,
    name: "Hand Bag",
    price: 999,
    image: b1,
    category: "women",
    type: "accessories",
    subCategory: "bags",
    hasSize: false,
  },
  {
    id: 24,
    name: "Leather Tote Bag",
    price: 1299,
    image: b2,
    category: "women",
    type: "accessories",
    subCategory: "bags",
    hasSize: false,
  },
  {
    id: 25,
    name: "Tote Bag",
    price: 1499,
    image: b3,
    category: "women",
    type: "accessories",
    subCategory: "bags",
    hasSize: false,
  },

  // Jewellery
  {
    id: 26,
    name: "Gold Plated Jewellery",
    price: 899,
    image: w,
    category: "women",
    type: "accessories",
    subCategory: "jewellery",
    hasSize: false,
    bestSeller:true,
  },
  {
    id: 27,
    name: "Traditional Earrings",
    price: 699,
    image: w2,
    category: "women",
    type: "accessories",
    subCategory: "jewellery",
    hasSize: false,
  },
  {
    id: 28,
    name: "Charm Bracelet",
    price: 1299,
    image: w3,
    category: "women",
    type: "accessories",
    subCategory: "jewellery",
    hasSize: false,
  },

  // Scarf
  {
    id: 29,
    name: "Printed Scarf",
    price: 499,
    image: s1,
    category: "women",
    type: "accessories",
    subCategory: "scarf",
    hasSize: false,
  },
];

export default products;
