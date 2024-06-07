import { Link } from "react-router-dom";
import ProductsLinksBar from "./ProductsLinksBar";
import CartAndUser from "./CartAndUser";
import shopiLatoImg from "../assets/images/shopilato_logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-search-cartuser-center">
        <Link to="/">
          <img src={shopiLatoImg} alt="shopilato logo" />
        </Link>
        <div className="search">Search</div>
        <CartAndUser />
      </div>
      <ProductsLinksBar />
    </nav>
  );
};
export default NavBar;
