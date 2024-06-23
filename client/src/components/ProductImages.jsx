const ProductImages = ({ cartProduct, product, handleColorSelect }) => {
  return (
    <div className="product-images-container">
      <div className="side-images">
        {product.images.map((image) => {
          return (
            <div
              className={`side-image-container ${
                cartProduct.selectedImage.color === image.color
                  ? "side-image-select"
                  : "side-image-deselect"
              }`}
              key={image.color}
              onClick={() => handleColorSelect(image)}
            >
              <img className="side-image" src={image.image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="main-images">
        <img
          className="main-image"
          src={cartProduct.selectedImage.image}
          alt={cartProduct.name}
        />
      </div>
    </div>
  );
};
export default ProductImages;
