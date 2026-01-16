import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Women from "./pages/Women";
import Men from "./pages/Men";
import KidsPage from "./pages/KidsPage";
import GiftPage from "./pages/GiftPage";
import SalePage from "./pages/SalePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/wishlistContext";
import { FilterProvider } from "./context/FilterContext";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <FilterProvider>
          <BrowserRouter>

            <Navbar />

            <div className="app-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/kids" element={<KidsPage />} />
                <Route path="/gifts" element={<GiftPage />} />
                <Route path="/sale" element={<SalePage />} />
                <Route path="/info" element ={<InfoPage/>}/>

              </Routes>
              <ToastContainer position="top-right" autoClose={3000} />

            </div>

            <Footer />

          </BrowserRouter>
        </FilterProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
