import { Link } from "react-router-dom";
import { useCartState } from "../context/CartContextProvider";

const CartAndUser = () => {
  let items = useCartState();

  // let totalQuantity = items.reduce((acc, currItem) => {
  //   return (acc += Number(currItem.selectedImage.quantity));
  // }, 0);

  // let quantity = totalQuantity;
  // totalQuantity = 0;
  // console.log(quantity);

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
