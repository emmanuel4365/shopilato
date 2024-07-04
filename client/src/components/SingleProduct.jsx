import { Rating } from "@mui/material";
import HorizontalRule from "./HorizontalRule";
import { useCallback, useState } from "react";
import SetColor from "./SetColor";
import SetQuantity from "./SetQuantity";
import Button from "./Button";
import ProductImages from "./ProductImages";
import { useCartDispatch } from "../context/CartContextProvider";
import { toast } from "react-toastify";

const SingleProduct = ({ data }) => {
  // console.log(data);
  const UseStateProduct = {
    id: data.id,
    model: data.model,
    description: data.description,
    category: data.category,
    brand: data.brand,
    selectedImage: { ...data.images[0], quantity: 1 },
    price: data.price,
  };

  const [cartProduct, setCartProduct] = useState(UseStateProduct);
  const [productQuantity, setProductQuantity] = useState(
    cartProduct.selectedImage.quantity
  );

  const handleQtyIncrease = useCallback(() => {
    let counterQuantity = document.querySelector(".counter-quantity");

    setProductQuantity((productQuantity) => {
      productQuantity = productQuantity + 1;
      counterQuantity.textContent = productQuantity;
      console.log(counterQuantity.textContent);
      return productQuantity;
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    let counterQuantity = document.querySelector(".counter-quantity");

    if (Number(counterQuantity.textContent) === 1) {
      return;
    }

    setProductQuantity((productQuantity) => {
      productQuantity = productQuantity - 1;
      counterQuantity.textContent = productQuantity;
      console.log(counterQuantity.textContent);
      return productQuantity;
    });
  }, [cartProduct]);

  let dispatch = useCartDispatch();

  const addToCart = () => {
    let counterQuantity = document.querySelector(".counter-quantity");

    let quantity = counterQuantity.textContent;

    cartProduct.selectedImage.quantity = quantity;

    dispatch({ type: "ADD", payload: cartProduct });

    toast("Added to cart successfully! Please check your cart ☝️", {
      position: "top-center",
      theme: "light",
    });

    console.log(cartProduct);
    return;
  };

  const result = data.reviews.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);

  const productRating = result / data.reviews.length;

  let quantity = cartProduct.selectedImage;

  const handleColorSelect = useCallback(
    (selectedImage) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImage: { ...selectedImage, quantity: 1 } };
      });
    },
    [cartProduct.selectedImage]
  );

  return (
    <div className="product-container">
      <div className="images-container">
        <ProductImages
          cartProduct={cartProduct}
          product={data}
          handleColorSelect={handleColorSelect}
        />
      </div>
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
        <div className="add-to-cart-btn-container">
          <Button
            classValue="add-to-cart-button"
            label="Add To Cart"
            Icon=""
            onClick={() => addToCart()}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
