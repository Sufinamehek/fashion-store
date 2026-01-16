import "./InfoPage.css";

const InfoPage = () => {
  return (
    <div className="info-wrapper">

      <h1 className="info-title">Help & Information</h1>

      <div className="info-list">

        <div id="about" className="info-card horizontal">
          <div className="info-icon">🏬</div>
          <div className="info-content">
            <h2>About Us</h2>
            <p>
              Urban Fashion brings you trending styles with comfort and quality.
              We believe fashion should be affordable, stylish and long lasting.
            </p>
          </div>
        </div>

        <div id="contact" className="info-card horizontal">
          <div className="info-icon">📞</div>
          <div className="info-content">
            <h2>Contact Us</h2>
            <p>📧 support@urbanfashion.com</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>

        <div id="return" className="info-card horizontal">
          <div className="info-icon">🔄</div>
          <div className="info-content">
            <h2>Return Policy</h2>
            <p>
              Products can be returned within 15 days in unused condition with tags.
              Refunds are processed within 7 working days.
            </p>
          </div>
        </div>

        <div id="terms" className="info-card horizontal">
          <div className="info-icon">📜</div>
          <div className="info-content">
            <h2>Terms & Conditions</h2>
            <p>
              By using this website you agree to all policies. Prices and availability
              may change without prior notice.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoPage;
