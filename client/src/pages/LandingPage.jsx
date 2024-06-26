import { useEffect } from "react";
import { HomeBanner, ProductCard } from "../components";
// import { rightClick } from "../utils/RightArrow";
import { products } from "../utils/products";

const LandingPage = () => {
  useEffect(() => {
    // let a = setInterval(rightClick, 3000);
    // return () => clearInterval(a);
  }, []);
  return (
    <main className="landing-page">
      <div className="landing-page-center">
        <HomeBanner />
        <section>
          <h1>All Products</h1>
          <div className="products-container">
            {products.map((product) => {
              return <ProductCard data={product} key={product.model} />;
            })}
          </div>
        </section>
      </div>
    </main>
  );
};
export default LandingPage;
