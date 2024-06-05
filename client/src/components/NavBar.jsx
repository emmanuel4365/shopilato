import Wrapper from "../assets/wrappers/NavbarWrapper";
import { Link } from "react-router-dom";
import ProductsLinksBar from "./ProductsLinksBar";

const NavBar = () => {
  return (
    <Wrapper className="navbar">
      <Link to="/">E-shop-Logo</Link>
      <ProductsLinksBar />
    </Wrapper>
  );
};
export default NavBar;
