import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-col">
          <h3>Urban Fashion</h3>
          <p>
            Fashion that fits your lifestyle.  
            Discover trends, comfort & style at one place.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="left-link">
            <li><Link to="/women" >Women</Link></li>
            <li> <Link to="/men" >Men</Link></li>
             <li><Link to="/kids" >Kids</Link></li>
             <li><Link to="/gifts"></Link></li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer-col">
          <h4>Customer Service</h4>
    <ul className="left-link">
  <li><Link to="/info#about">About Us</Link></li>
  <li><Link to="/info#contact">Contact Us</Link></li>
  <li><Link to="/info#return">Return Policy</Link></li>
  <li><Link to="/info#terms">Terms & Conditions</Link></li>
    </ul>

        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: support@urbanfashion.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2024 Urban Fashion. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
