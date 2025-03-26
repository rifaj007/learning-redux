import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/carts/cartSlice";

const ProductCard = ({ product }) => {
  const { name, price, image, category } = product;
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card bg-white shadow-lg">
      <figure className="h-80">
        <img
          className="w-full h-full object-cover rounded-t-[0.5rem]"
          src={image}
          alt={name}
        />
        <span className="badge badge-secondary absolute top-2 right-2">{category}</span>
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end items-center">
          <p className="text-2xl font-bold">${price}</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
