import { Link } from "react-router-dom";

const ProductsLinksBar = () => {
  return (
    <div className="product-links">
      <div className="product-links-center">
        <Link>All</Link>
        <Link>Phone</Link>
        <Link>Laptop</Link>
        <Link>Desktop</Link>
        <Link>Watch</Link>
        <Link>TV</Link>
        <Link>Accessories</Link>
      </div>
    </div>
  );
};
export default ProductsLinksBar;
