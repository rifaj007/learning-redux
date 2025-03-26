import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
