import "./Navbar.css";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/wishlistContext";
import CartSidebar from "./CartSidebar";
import WishlistSidebar from "./WishlistSidebar";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSelectedCategory, setSelectedSub, setSearch }) => {
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <>
    
      {/* TOP STRIP */}
      <div className="top-strip slider-1">
        <span>FREE SHIPPING ON ALL ORDERS ABOVE RS 999</span>
      </div>

      {/* TOP BAR */}
      <div className="top-links">
        <div className="left-links">
          <span><Link to="/info#about">About Us</Link></span>
          <span><Link to="/info#contact">Contact Us</Link></span>
          <span><Link to="/info#return">Return Policy</Link></span>
        </div>

        <div className="icons">
          <span>👤</span>
          <span onClick={() => setOpenCart(true)}>👜 {cart.length}</span>
          <span onClick={() => setOpenWishlist(true)}>❤️ ({wishlist.length})</span>
        </div>
      </div>

      <CartSidebar isOpen={openCart} closeCart={() => setOpenCart(false)} />
      <WishlistSidebar isOpen={openWishlist} closeWishlist={() => setOpenWishlist(false)} />

      {/* LOGO */}
      <div className="logo-bar">
        <Link to="/" className="logo-link">
          <div className="logo">
            <p className="since">SINCE 2026</p>
            <h1>Urban</h1>
            <p className="tagline">Fashion that fits your lifestyle</p>
          </div>
        </Link>
         <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
           ☰
      </div>
        <div 
    className={`nav-overlay ${menuOpen ? "active" : ""}`} 
    onClick={() => setMenuOpen(false)}
  />


      </div>
     


      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* WOMEN */}
        <li className="nav-item">
          <Link to="/women" className="nav-link">Women</Link>
          <div className="mega-menu">
            <div className="menu-column">
              <h6>Clothing</h6>
              <p className="mega-link">
                <Link to="/women?filter=ethnic" className="nav-link">Ethnic</Link>
              </p>
              <p className="mega-link">
                <Link to="/women?filter=tops" className="nav-link">Tops</Link>
              </p>
            </div>

            <div className="menu-column">
              <h6>Bottomwear</h6>
              <p className="mega-link">
                <Link to="/women?filter=jeans" className="nav-link">Jeans</Link>
              </p>
              <p className="mega-link">
                <Link to="/women?filter=trousers" className="nav-link">Trousers</Link>
              </p>
            </div>

            <div className="menu-column">
              <h6>Accessories</h6>
              <p className="mega-link">
                <Link to="/women?filter=bags" className="nav-link">Bags</Link>
              </p>
              <p className="mega-link">
                <Link to="/women?filter=jewellery" className="nav-link">Jewellery</Link>
              </p>
              <p className="mega-link">
                <Link to="/women?filter=scarf" className="nav-link">Scarf</Link>
              </p>
            </div>
          </div>
        </li>

        {/* MEN */}
        <li className="nav-item">
          <Link to="/men" className="nav-link">Men</Link>
          <div className="mega-menu">
            <div className="menu-column">
              <h6>Topwear</h6>
              <p>
                <Link to="/men?filter=jackets" className="nav-link">Jackets</Link>
              </p>
              <p>
                <Link to="/men?filter=shirts" className="nav-link">Shirts</Link>
              </p>
              <p>
                <Link to="/men?filter=tshirts" className="nav-link">T-Shirts</Link>
              </p>
            </div>

            <div className="menu-column">
              <h6>Bottomwear</h6>
              <p>
                <Link to="/men?filter=jeans" className="nav-link">Jeans</Link>
              </p>
              <p>
                <Link to="/men?filter=trousers" className="nav-link">Trousers</Link>
              </p>
            </div>

            <div className="menu-column">
              <h6>Accessories</h6>
              <Link to="/men?filter=accessories" className="nav-link">Accessories</Link>
            </div>
          </div>
        </li>

        {/* KIDS */}
        <li className="nav-item sale">
          <Link to="/kids"  className="nav-link">Kids</Link>
          <div className="mega-menu">
            <div>
            <h6>Kidswear</h6>
          
              <p>
              <Link to="/kids?main=boy" className="nav-link">Boy</Link>
              </p>
              
               <p>
               <Link to="/kids?main=girl" className="nav-link">Girl</Link>
                </p>

               <p>
              <Link to="/kids?main=accessories" className="nav-link">Accessories</Link>
              </p>
              </div>
            </div>
        </li>

        {/* GIFTS */}
        <li className="nav-item sale">
          <Link to="/gifts" className="nav-link">
            Gift
          </Link>
          <div className="mega-menu">
            <div>
              <h6>Gifts</h6>
              <p>
                <Link to="/gifts?filter=him" className="nav-link">Gifts for him</Link>
              </p>
              <p>
                <Link to="/gifts?filter=her" className="nav-link">Gifts for her</Link>
              </p>
            </div>
          </div>
        </li>
        <li className="nav-item sale">
  <Link to="/sale" className="nav-link">Sale</Link>
            <div className="mega-menu">
            <div>
              <h6>Sale</h6>
              <p>
  <Link to="/sale" className="nav-link">Sale Under Rs999</Link>
              </p>
              

            </div>
          </div>
</li>

      </ul>
    </>
  );
};

export default Navbar;
