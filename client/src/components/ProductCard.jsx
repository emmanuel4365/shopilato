import { formatPrice } from "../utils/FormatPrice";
import { shortenString } from "../utils/StringLength";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const result = data.reviews.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);

  const productRating = result / data.reviews.length;

  let { model, images } = data;
  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${data.id}`)}
    >
      <div className="product-image-container">
        <img
          src={images[0].image}
          alt={shortenString(model)}
          className="product-image"
        />
      </div>
      <p className="product-name">{shortenString(model)}</p>
      <Rating value={productRating} readOnly />
      <div className="product-reviews">
        {data.reviews.length} review{data.reviews > 1 ? "s" : ""}
      </div>
      <div className="product-price">{formatPrice(data.price)}</div>
    </div>
  );
};
export default ProductCard;
