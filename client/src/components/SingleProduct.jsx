import { Rating } from "@mui/material";
import HorizontalRule from "./HorizontalRule";
import { useCallback, useState } from "react";
import { UseStateProduct } from "../utils/ProductMockData";
import SetColor from "./SetColor";
import SetQuantity from "./SetQuantity";

const SingleProduct = ({ data }) => {
  const [cartProduct, setCartProduct] = useState(UseStateProduct);
  const [productQuantity, setProductQuantity] = useState(
    cartProduct.selectedImage.quantity
  );

  const handleQtyIncrease = useCallback(() => {
    let counterQuantity = document.querySelector(".counter-quantity");

    setProductQuantity((productQuantity) => {
      productQuantity = productQuantity + 1;
      return (counterQuantity.textContent = productQuantity);
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    let counterQuantity = document.querySelector(".counter-quantity");

    if (Number(counterQuantity.textContent) === 0) {
      return;
    }

    setProductQuantity((productQuantity) => {
      productQuantity = productQuantity - 1;
      return (counterQuantity.textContent = productQuantity);
    });
  }, [cartProduct]);

  const result = data.reviews.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);

  const productRating = result / data.reviews.length;

  let quantity = cartProduct.selectedImage;

  const handleColorSelect = useCallback(
    (selectedImage) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImage };
      });
    },
    [cartProduct.selectedImage]
  );

  return (
    <div className="product-container">
      <div className="image-container">Image</div>
      <div className="details-container">
        <h2 className="details-heading">{data.name}</h2>
        <div className="rating-review-container">
          <Rating value={productRating} readOnly />
          <div className="review product-review">
            {data.reviews.length} review{data.reviews.length > 1 ? "s" : ""}
          </div>
        </div>
        <HorizontalRule data={100} />
        <div className="description">{data.description}</div>
        <HorizontalRule data={100} />
        <div className="category-container">
          <span className="category">CATEGORY:</span>
          {data.category}
        </div>
        <div className="brand-container">
          <span className="brand">BRAND:</span>
          {data.brand}
        </div>
        <div className={data.inStock ? "In-stock" : "Out-of-Stock"}>
          {data.inStock ? "In stock" : "Out of Stock"}
        </div>
        <HorizontalRule data={100} />
        <SetColor
          cartProduct={cartProduct}
          images={data.images}
          handleColorSelect={handleColorSelect}
        />
        <HorizontalRule data={100} />
        <SetQuantity
          cartProduct={cartProduct}
          handleQtyDecrease={handleQtyDecrease}
          handleQtyIncrease={handleQtyIncrease}
          cartCounterLabel={false}
        />
        <HorizontalRule data={100} />
        <button>add to cart</button>
      </div>
    </div>
  );
};
export default SingleProduct;
