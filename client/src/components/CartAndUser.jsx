import { Link } from "react-router-dom";
import { useCartState } from "../context/CartContextProvider";

const CartAndUser = () => {
  let items = useCartState();

  return (
    <div className="cart-username-container">
      <Link to="/cart" className="cart">
        cart({items.length})
      </Link>
      <div className="username">username</div>
    </div>
  );
};
export default CartAndUser;
