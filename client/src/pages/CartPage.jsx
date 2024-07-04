import { useCartState } from "../context/CartContextProvider";

const CartPage = () => {
  let items = useCartState();
  console.log(items);

  const setObj = new Set(items.map(JSON.stringify));
  const uniqueArray = Array.from(setObj).map(JSON.parse);
  console.log(uniqueArray);

  return (
    <main className="cart-page">
      <div className="cart-page-center">cartPage</div>
    </main>
  );
};
export default CartPage;
