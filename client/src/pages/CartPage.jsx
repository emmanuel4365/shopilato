import { useCartState } from "../context/CartContextProvider";

const CartPage = () => {
  let items = useCartState();
  console.log(items);

  return (
    <main className="cart-page">
      <div className="cart-page-center">cartPage</div>
    </main>
  );
};
export default CartPage;
