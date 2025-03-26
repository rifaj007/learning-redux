import { useSelector } from "react-redux";
import ProductCard from "../products/ProductCard";
import AddProduct from "../products/AddProduct";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="py-8">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="col-span-2">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 gap-y-12">
            {products.length ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No Products found</p>
            )}
          </div>
        </div>

        <div>
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
