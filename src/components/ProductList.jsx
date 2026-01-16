// import { useState } from "react";
// import products from "../data/products";
// import ProductCard from "./ProductCard";

// const ProductList = () => {
//   const [category, setCategory] = useState("All");

//   const filtered =
//     category === "All"
//       ? products
//       : products.filter((p) => p.category === category);

//   return (
//     <>
//       <div className="category-bar">
//         {["All", "Women", "Men", "Kids Wear", "Gifts"].map(
//           (cat) => (
//             <span key={cat} onClick={() => setCategory(cat)}>
//               {cat}
//             </span>
//           )
//         )}
//       </div>

//       <div className="product-grid">
//         {filtered.map((item) => (
//           <ProductCard key={item.id} item={item} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductList;
