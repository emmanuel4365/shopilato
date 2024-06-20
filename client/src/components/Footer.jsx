import { Link } from "react-router-dom";
import twitterIcon from "../assets/images/x-social-media-white-icon.svg";
import instagramIcon from "../assets/images/instagram-white-icon.svg";
import facebookIcon from "../assets/images/facebook-app-round-white-icon.svg";

const Footer = () => {
  let year = new Date().getFullYear().toString();
  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer-list-container">
          <div className="shop-categories list">
            <h3>Shop Categories</h3>
            <Link>Phones</Link>
            <Link>Laptops</Link>
            <Link>Desktops</Link>
            <Link>Watches</Link>
            <Link>TVs</Link>
            <Link>Accessories</Link>
          </div>
          <div className="about-shopilato list">
            <h3>About ShopiLato</h3>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
            <Link>Shipping Policy</Link>
            <Link>Returns & Exchanges</Link>
            <Link>Terms & Conditions</Link>
            <Link>FAQs</Link>
          </div>
          <div className="connect-with-us list">
            <h3>Connect With Us</h3>
            <Link>
              <img src={twitterIcon} alt="twitter icon" />
            </Link>
            <Link>
              <img src={instagramIcon} alt="instagram icon" />
            </Link>
            <Link>
              <img src={facebookIcon} alt="facebook icon" />
            </Link>
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright">
            &copy; {year} ShopiLato. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
