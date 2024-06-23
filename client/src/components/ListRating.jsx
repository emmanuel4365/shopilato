import { Rating } from "@mui/material";
import Heading from "./Heading";
import moment from "moment";

const ListRating = ({ product }) => {
  return (
    <div className="product-review-container">
      <Heading title="Product Review" />
      <div>
        {product.reviews &&
          product.reviews.map((review) => {
            return (
              <div className="review" key={review.id}>
                <div className="avatar-username-date">
                  <div className="avatar">Avatar</div>
                  <div className="user-name">{review?.user.name}</div>
                  <div className="moment">{moment(review).fromNow()}</div>
                </div>
                <div className="rating-comment-container">
                  <Rating value={review.rating} readOnly />
                  <div>{review.comment}</div>
                  <hr className="comment-rule" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ListRating;
