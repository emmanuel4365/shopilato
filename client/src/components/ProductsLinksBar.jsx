import { Link } from "react-router-dom";

const ProductsLinksBar = () => {
  return (
    <div className="product-links">
      <div className="product-links-center">
        <Link>All</Link>
        <Link>Phones</Link>
        <Link>Laptops</Link>
        <Link>Desktops</Link>
        <Link>Watches</Link>
        <Link>TVs</Link>
        <Link>Accessories</Link>
      </div>
    </div>
  );
};
export default ProductsLinksBar;
