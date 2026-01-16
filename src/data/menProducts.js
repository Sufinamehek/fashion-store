// ================== MEN IMAGES ==================

// Accessories
import a1 from "../assets/men/clothing/accessories/a1.jpg";
import a2 from "../assets/men/clothing/accessories/a2.jpg";
import a3 from "../assets/men/clothing/accessories/a3.jpg";
import a4 from "../assets/men/clothing/accessories/a4.jpg";

// Bottomwear - Jeans
import jea1 from "../assets/men/clothing/bottomwear/jeans/jea.jpg";
import jea2 from "../assets/men/clothing/bottomwear/jeans/jea2.jpg";
import jea3 from "../assets/men/clothing/bottomwear/jeans/jea3.jpg";
import jea4 from "../assets/men/clothing/bottomwear/jeans/jea4.jpg";

// Bottomwear - Trousers
import tr1 from "../assets/men/clothing/bottomwear/trousers/tr.jpg";
import tr2 from "../assets/men/clothing/bottomwear/trousers/tr2.jpg";
import tr3 from "../assets/men/clothing/bottomwear/trousers/tr3.jpg";
import tr4 from "../assets/men/clothing/bottomwear/trousers/tr4.jpg";

// Topwear - Jackets
import ja1 from "../assets/men/clothing/topwear/jackets/ja1.jpg";
import ja2 from "../assets/men/clothing/topwear/jackets/ja2.jpg";
import ja3 from "../assets/men/clothing/topwear/jackets/ja3.jpg";
import ja4 from "../assets/men/clothing/topwear/jackets/ja4.jpg";
import ja5 from "../assets/men/clothing/topwear/jackets/ja5.jpg";

// Topwear - Shirts
import sh from "../assets/men/clothing/topwear/shirts/sh.jpg";
import sh1 from "../assets/men/clothing/topwear/shirts/sh1.jpg";
import sh2 from "../assets/men/clothing/topwear/shirts/sh2.jpg";
import sh3 from "../assets/men/clothing/topwear/shirts/sh3.jpg";
import sh4 from "../assets/men/clothing/topwear/shirts/sh4.jpg";

// Topwear - TShirts
import ts from "../assets/men/clothing/topwear/t-shirts/ts.jpg";
import ts1 from "../assets/men/clothing/topwear/t-shirts/ts1.jpg";
import ts2 from "../assets/men/clothing/topwear/t-shirts/ts2.jpg";
import ts3 from "../assets/men/clothing/topwear/t-shirts/ts3.jpg";
import ts5 from "../assets/men/clothing/topwear/t-shirts/ts5.jpg";


// ================== MEN PRODUCTS ==================
// ================== MEN PRODUCTS ==================

const menProducts = [
  // Jeans
  { id: 201, name: "Straight Leg Jeans", price: 1999, image: jea1, category: "men", type: "bottomwear", subCategory: "jeans",  hasSize: true, sizeType: "clothing", description: "High quality blue jeans, perfect for casual wear." },
  { id: 202, name: "Baggy Jeans", price: 2199, image: jea2, category: "men", type: "bottomwear", subCategory: "jeans",  hasSize: true, sizeType: "clothing", description: "Slim fit jeans for stylish everyday look." },
  { id: 203, name: "Wide Leg Jeans", price: 1899, image: jea3, category: "men", type: "bottomwear", subCategory: "jeans",  hasSize: true, sizeType: "clothing", description: "Comfortable casual jeans for all-day wear." },
  { id: 204, name: "Black Relaxed Fit Jeans", price: 2299, image: jea4, category: "men", type: "bottomwear", subCategory: "jeans",  hasSize: true, sizeType: "clothing", description: "Dark wash jeans with a modern fit." },

  // Trousers
  { id: 205, name: "Cargo Pants", price: 2499, image: tr1, category: "men", type: "bottomwear", subCategory: "trousers",  hasSize: true, sizeType: "clothing", description: "Perfect for office or formal events." },
  { id: 206, name: "Office Trousers", price: 2399, image: tr2, category: "men", type: "bottomwear", subCategory: "trousers",  hasSize: true, sizeType: "clothing", description: "Comfortable trousers for everyday office wear." },
  { id: 207, name: "Slim Fit Trousers", price: 2599, image: tr3, category: "men", type: "bottomwear", subCategory: "trousers",  hasSize: true, sizeType: "clothing", description: "Slim fit trousers for modern style." },
  { id: 208, name: "Casual Trousers", price: 2199, image: tr4, category: "men", type: "bottomwear", subCategory: "trousers",  hasSize: true, sizeType: "clothing", description: "Relaxed fit trousers for casual outings." },

  // Jackets
  { id: 209, name: "Winter Jacket", price: 3499, image: ja1, category: "men", type: "topwear", subCategory: "jackets",  hasSize: true, sizeType: "clothing", description: "Warm winter jacket for cold days." },
  { id: 210, name: "Denim Jacket", price: 3299, image: ja2, category: "men", type: "topwear", subCategory: "jackets",  hasSize: true, sizeType: "clothing", description: "Classic denim jacket for all seasons." },
  { id: 211, name: "Leather Jacket", price: 4999, image: ja3, category: "men", type: "topwear", subCategory: "jackets",  hasSize: true, sizeType: "clothing", description: "Premium leather jacket for stylish look." },
  { id: 212, name: "Casual Jacket", price: 2899, image: ja4, category: "men", type: "topwear", subCategory: "jackets",  hasSize: true, sizeType: "clothing", description: "Casual jacket for everyday wear." },
    { id:213, name: "Denim Jacket", price: 3299, image: ja5, category: "men", type: "topwear", subCategory: "jackets",  hasSize: true, sizeType: "clothing", description: "Classic denim jacket for all seasons." },

  // Shirts
  { id: 226, name: "Formal Shirt", price: 1599, image: sh, category: "men", type: "topwear", subCategory: "shirts",  hasSize: true, sizeType: "clothing", description: "Perfect for office and formal occasions." },
  { id: 214, name: "Hoodie Jacket ", price: 1699, image: sh2, category: "men", type: "topwear", subCategory: "shirts",  hasSize: true, sizeType: "clothing", description: "Stylish checked shirt for casual and semi-formal." },
  { id: 215, name: "Casual Shirt", price: 1499, image: sh3, category: "men", type: "topwear", subCategory: "shirts",  hasSize: true, sizeType: "clothing", description: "Comfortable shirt for everyday use." },
  { id: 216, name: "Plain Shirt", price: 1799, image: sh4, category: "men", type: "topwear", subCategory: "shirts",  hasSize: true, sizeType: "clothing", description: "Printed shirt for casual outings." },
  { id: 227, name: "Baisc Shirt", price: 1599, image: sh1, category: "men", type: "topwear", subCategory: "shirts",  hasSize: true, sizeType: "clothing", description: "Perfect for office and formal occasions." },

  // T-Shirts
  { id: 217, name: "Basic T-Shirt", price: 999, image: ts1, category: "men", type: "topwear", subCategory: "tshirts",  hasSize: true, sizeType: "clothing", description: "Everyday basic t-shirt." },
  { id: 218, name: "Full Sleves T-Shirt", price: 1199, image: ts2, category: "men", type: "topwear", subCategory: "tshirts",  hasSize: true, sizeType: "clothing", description: "Stylish graphic t-shirt." },
  { id: 219, name: "Oversized T-Shirt", price: 1299, image: ts3, category: "men", type: "topwear", subCategory: "tshirts",  hasSize: true, sizeType: "clothing", description: "Oversized fit t-shirt for relaxed style." },
  { id: 225, name: "Oversized T-Shirt", price: 1299, image: ts, category: "men", type: "topwear", subCategory: "tshirts",  hasSize: true, sizeType: "clothing", description: "Oversized fit t-shirt for relaxed style." },
  { id: 224, name: "Oversized T-Shirt", price: 1299, image: ts5, category: "men", type: "topwear", subCategory: "tshirts",  hasSize: true, sizeType: "clothing", description: "Oversized fit t-shirt for relaxed style." },

  // Accessories - size disabled
  { id: 220, name: "Men Scarf", price: 799, image: a1, category: "men", type: "accessories", subCategory: "accessories", hasSize: false, description: "Premium leather wallet with multiple compartments." },
  { id: 221, name: "Tote Bag", price: 699, image: a2, category: "men", type: "accessories", subCategory: "accessories", hasSize: false, description: "Elegant belt made of genuine leather." },
  { id: 222, name: "Backpack Handbag", price: 599, image: a3, category: "men", type: "accessories", subCategory: "accessories", hasSize: false, description: "Stylish cap for sunny days." },
  { id: 223, name: "Men Cap", price: 1299, image: a4, category: "men", type: "accessories", subCategory: "accessories", hasSize: false, description: "Trendy sunglasses for all occasions." },
];

export default menProducts;
