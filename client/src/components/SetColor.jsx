const SetColor = ({ images, cartProduct, handleColorSelect }) => {
  return (
    <div className="color-container">
      <span className="color-label">COLOR:</span>
      <div className="colors">
        {images.map((image) => {
          return (
            <div
              className={
                cartProduct.selectedImage.color === image.color
                  ? "selectColor"
                  : "deselectColor"
              }
              style={{
                backgroundColor: image.colorCode,
                width: "15px",
                height: "15px",
              }}
              key={image.color}
              onClick={() => handleColorSelect(image)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default SetColor;
