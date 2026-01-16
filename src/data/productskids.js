// ===== IMPORT IMAGES =====

// Accessories
import hat from "../assets/kids/accessories/Premium look/hat.jpg";
import jew from "../assets/kids/accessories/Premium look/jew.jpg";
import jew1 from "../assets/kids/accessories/Premium look/jew1.jpg";
import jew2 from "../assets/kids/accessories/Premium look/jew2.jpg";
import jew3 from "../assets/kids/accessories/Premium look/jew3.jpg";
import jew4 from "../assets/kids/accessories/Premium look/jew4.jpg";
import jew6 from "../assets/kids/accessories/Premium look/jew6.jpg";
import jew7 from "../assets/kids/accessories/Premium look/jew7.jpg";

// Boy - Basic
import bas from "../assets/kids/boy/basic/bas.jpg";
import basic1 from "../assets/kids/boy/basic/basic1.jpg";
import basic2 from "../assets/kids/boy/basic/basic2.jpg";
import basic3 from "../assets/kids/boy/basic/basic3.jpg";

// Boy - Bottom
import bott from "../assets/kids/boy/bottom/bott.jpg";
import bott1 from "../assets/kids/boy/bottom/bott1.jpg";
import bott2 from "../assets/kids/boy/bottom/bott2.jpg";
import bott3 from "../assets/kids/boy/bottom/bott3.jpg";
import bott4 from "../assets/kids/boy/bottom/bott4.jpg";
import bott5 from "../assets/kids/boy/bottom/bott5.jpg";
import bott6 from "../assets/kids/boy/bottom/bott6.jpg";

// Boy - Nightwear
import wear from "../assets/kids/boy/nightwear/wear.jpg";
import wear1 from "../assets/kids/boy/nightwear/wear1.jpg";
import wear2 from "../assets/kids/boy/nightwear/wear2.jpg";
import wear3 from "../assets/kids/boy/nightwear/wear3.jpg";
import wear4 from "../assets/kids/boy/nightwear/wear4.jpg";
import wear5 from "../assets/kids/boy/nightwear/wear5.jpg";

// Girl - Basic
import ba from "../assets/kids/girl/basic/ba.jpg";
import ba1 from "../assets/kids/girl/basic/ba1.jpg";
import ba3 from "../assets/kids/girl/basic/ba3.jpg";
import ba4 from "../assets/kids/girl/basic/ba4.jpg";
import ba6 from "../assets/kids/girl/basic/ba6.jpg";
import ba7 from "../assets/kids/girl/basic/ba7.jpg";

// Girl - Bottom
import bom from "../assets/kids/girl/bottomm/bom.jpg";
import bom1 from "../assets/kids/girl/bottomm/bom1.jpg";
import bom2 from "../assets/kids/girl/bottomm/bom2.jpg";
import bom3 from "../assets/kids/girl/bottomm/bom3.jpg";
import bom4 from "../assets/kids/girl/bottomm/bom4.jpg";
import bom5 from "../assets/kids/girl/bottomm/bom5.jpg";
import na5 from "../assets/kids/girl/bottomm/na5.jpg";

// Girl - Knitwear
import kni from "../assets/kids/girl/knitwear/kni.jpg";
import kni1 from "../assets/kids/girl/knitwear/kni1.jpg";
import kni2 from "../assets/kids/girl/knitwear/kni2.jpg";
import kni3 from "../assets/kids/girl/knitwear/kni3.jpg";
import kni4 from "../assets/kids/girl/knitwear/kni4.jpg";
import kni5 from "../assets/kids/girl/knitwear/kni5.jpg";

// ===== PRODUCTS ARRAY =====
const productsKids = [
  // ===== Accessories =====
  { id: 1111,  name: "Premium Hat",    price: 499,  image: hat,  category: "kids", type: "accessories", mainCategory: "accessories", subCategory: "premium look", hasSize: false },
  { id: 2111,  name: "FIVE-PACK OF STAR HAIR CLIPS",  price: 599,  image: jew,  category: "kids", type: "accessories", mainCategory: "accessories", subCategory: "premium look", hasSize: false },
  { id: 3111,  name: " Charm",    price: 599,  image: jew1, category: "kids", type: "accessories", mainCategory: "accessories", subCategory: "premium look", hasSize: false },
  { id: 4111,  name: "Premium Bag",    price: 599,  image: jew2, category: "kids", type: "accessories", mainCategory: "accessories", subCategory: "premium look", hasSize: false },
  { id: 5111,  name: " Handbag",    price: 699,  image: jew3, category: "kids", type: "accessories", mainCategory: "accessories", subCategory: "premium look", hasSize: false },
  { id: 6111,  name: "Pokemon charm",    price: 699,  image: jew4, category: "kids", type: "accessories", mainCategory: "accessories", subCategory: "premium look", hasSize: false },
  { id: 7111,  name: "Basic Brown Hat",    price: 799,  image: jew6, category: "kids", type: "accessories", mainCategory: "accessories", subCategory: "premium look", hasSize: false },
  { id: 8111,  name: "Kids Wallet",    price: 799,  image: jew7, category: "kids", type: "accessories", mainCategory: "accessories", subCategory: "premium look", hasSize: false },

  // ===== Boy - Basic =====
  { id: 9111,  name: "Boy Basic Tee",  price: 399, image: bas,  category: "kids", type: "clothing", mainCategory: "boy", subCategory: "basic",    hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 10111, name: "Plain whit T-Shirt",    price: 399, image: basic1, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "basic",    hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 1111, name: "Hoddie",    price: 399, image: basic2, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "basic",    hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 12111, name: " Basic T-Shirt",    price: 399, image: basic3, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "basic",    hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },

  // ===== Boy - Bottom =====
  { id: 13111, name: "Straight Leg Jeans",     price: 499, image: bott,  category: "kids", type: "clothing", mainCategory: "boy", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 14111, name: " Bottom Cropped Jeans ",   price: 499, image: bott1, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 15111, name: "Baggy Jeans",   price: 499, image: bott2, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 16111, name: "Denim Jeans",   price: 499, image: bott3, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 17111, name: "High-Waist Jeans",   price: 499, image: bott4, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 18111, name: "Wide Leg Baggy Jeans",   price: 499, image: bott5, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 19111, name: "Straight Leg Jeans ",   price: 499, image: bott6, category: "kids" , type: "clothing", mainCategory: "boy", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },

  // ===== Boy - Nightwear =====
  { id: 20111, name: "Boy Nightwear",     price: 399, image: wear,  category: "kids", type: "clothing", mainCategory: "boy", subCategory: "nightwear", displayName: "Knitwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 2111, name: "Premium Black jacket",   price: 399, image: wear1, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "nightwear", displayName: "Knitwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 2211, name: "Full Sleves T-Shirt",   price: 399, image: wear2, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "nightwear", displayName: "Knitwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 2311, name: "Oversized T-Shirt",   price: 399, image: wear3, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "nightwear", displayName: "Knitwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 24111, name: "Basic Solid T-Shirt",   price: 399, image: wear4, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "nightwear", displayName: "Knitwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 25111, name: "Brown T-Shirt",   price: 399, image: wear5, category: "kids", type: "clothing", mainCategory: "boy", subCategory: "nightwear", displayName: "Knitwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },

  // ===== Girl - Basic =====
  { id: 26111, name: "Pink Shirt",     price: 399, image: ba,  category: "kids", type: "clothing", mainCategory: "girl", subCategory: "basic", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 27111, name: "Black Jacket and White t-shirt",   price: 399, image: ba1, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "basic", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 28111, name: "Polo T-Shirt",   price: 399, image: ba3, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "basic", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 29111, name: "Leather Jacket",   price: 399, image: ba4, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "basic", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 30111, name: "Cardigan",   price: 399, image: ba6, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "basic", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 3111, name: "V-Neck Top",   price: 399, image: ba7, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "basic", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },

  // ===== Girl - Bottom =====
  { id: 32111, name: "Straight Leg Jeans",    price: 499, image: na5, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 34111, name: "Pink Baggy Jeans",  price: 499, image: bom1, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 3511, name: "Wide Leg Jeans",  price: 499, image: bom2, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 36111, name: "Denim Jeans",  price: 499, image: bom3, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 37111, name: "Straight Leg Pearl Jeans",  price: 499, image: bom4, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 38111, name: "High-Waist Jeans",  price: 499, image: bom5, category: "kids", type: "clothing", mainCategory: "girl", subCategory: "bottomwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },

  // ===== Girl - Knitwear =====
  { id: 39111, name: "Puffer Jacket",   price: 599, image: kni,   category: "kids", type: "clothing", mainCategory: "girl", subCategory: "knitwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 40111, name: "Sleeveless Cardigan", price: 599, image: kni1,  category: "kids", type: "clothing", mainCategory: "girl", subCategory: "knitwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 41111, name: "Blazer", price: 599, image: kni2,  category: "kids", type: "clothing", mainCategory: "girl", subCategory: "knitwear", hasSize: true, sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id: 42111, name: "Cardigan Set", price: 599, image: kni3,  category: "kids", type: "clothing", mainCategory: "girl", subCategory: "knitwear", hasSize: true,sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"] },
];


export default productsKids;
