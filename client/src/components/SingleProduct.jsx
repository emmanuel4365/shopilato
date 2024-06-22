import { Rating } from "@mui/material";

const SingleProduct = ({ data }) => {
  const result = data.reviews.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);

  const productRating = result / data.reviews.length;

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
        <div className="description">{data.description}</div>
      </div>
    </div>
  );
};
export default SingleProduct;
