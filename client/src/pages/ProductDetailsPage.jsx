import { ListRating, SingleProduct } from "../components";
import { product } from "../utils/ProductMockData";

export const loader = ({ params }) => {
  const { id } = params;
  console.log(id);
  return null;
};

const ProductDetailsPage = () => {
  return (
    <main className="product-details-page">
      <div className="product-details-page-center">
        <SingleProduct data={product} />
      </div>
      <div className="add-rating-and-list-container">
        <div className="add-rating-and-list-center">
          <div className="rating">Add Rating</div>
          <div className="list">
            <ListRating product={product} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductDetailsPage;
