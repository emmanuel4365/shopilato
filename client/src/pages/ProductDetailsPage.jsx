import { SingleProduct } from "../components";
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
    </main>
  );
};
export default ProductDetailsPage;
