const SetQuantity = ({
  cartCounterLabel,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="counter-container">
      {cartCounterLabel ? null : <div className="counter-label">QUANTITY:</div>}
      <div className="counter">
        <button className="counter-minus" onClick={() => handleQtyDecrease()}>
          -
        </button>
        <div className="counter-quantity">
          {cartProduct.selectedImage.quantity}
        </div>
        <button className="counter-plus" onClick={() => handleQtyIncrease()}>
          +
        </button>
      </div>
    </div>
  );
};
export default SetQuantity;
