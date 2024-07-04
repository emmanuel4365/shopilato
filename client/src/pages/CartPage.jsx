import { useCartState } from "../context/CartContextProvider";

const CartPage = () => {
  let items = useCartState();
  console.log(items);

  //Select the colors, models, prices, and images to be used for further processing.
  let colorItems = items.map((item) => {
    return {
      color: item.selectedImage.color,
      model: item.model,
      price: item.price,
      image: item.selectedImage.image,
    };
  });

  console.log(colorItems);

  //Find unique colors
  let uniqueSetColors = new Set(colorItems.map(JSON.stringify));
  let uniqueArrayColors = Array.from(uniqueSetColors).map(JSON.parse);
  console.log(uniqueArrayColors);

  //Sort items into same group
  let newArray = [];
  let sortedArray = [];

  for (let index = 0; index < uniqueArrayColors.length; index++) {
    let element = uniqueArrayColors[index];
    console.log(element);
    for (let z = 0; z < items.length; z++) {
      let element1 = items[z];
      console.log(element1);
      if (
        element1.selectedImage.color === element.color &&
        element1.model === element.model &&
        element1.price === element.price
      ) {
        newArray.push({ ...element1 });
      }
    }
    sortedArray.push(newArray);
    newArray = [];
  }

  console.log(sortedArray);

  //Find total quantity for each sorted item
  let accumulator = 0;
  let arrayQuantity = [];

  for (let index = 0; index < sortedArray.length; index++) {
    const element = sortedArray[index];
    for (let z = 0; z < element.length; z++) {
      const element1 = element[z];
      accumulator += Number(element1.selectedImage.quantity);
    }
    arrayQuantity.push(accumulator);
    accumulator = 0;
  }

  console.log(arrayQuantity);

  //Create cart array
  let cartArray = uniqueArrayColors.map((cartItem, index) => {
    return { ...cartItem, quantity: arrayQuantity[index] };
  });

  console.log(cartArray);
  // const totalQuantity = items.reduce((acc, currItem) => {
  //   return (acc += Number(currItem.selectedImage.quantity));
  // }, 0);

  // console.log(totalQuantity);
  return (
    <main className="cart-page">
      <div className="cart-page-center">cartPage</div>
    </main>
  );
};
export default CartPage;
