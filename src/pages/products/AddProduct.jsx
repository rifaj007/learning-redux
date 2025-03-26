import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/products/productSlice";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addProduct(data))
  };

  return (
    <div className="bg-white rounded-lg shadow-lg px-6 py-8">
      <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* name */}
        <div>
          <label className="text-sm font-medium block text-gray-500">
            Product Name
          </label>
          <input
            {...register("name", { required: true })}
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
            placeholder="Product Name"
          />
          {errors.name && <p className="text-red-500 mt-1">Name is required</p>}
        </div>

        {/* category */}
        <div>
          <label className="text-sm font-medium block text-gray-500">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            id="category"
            name="category"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
          >
            <option value="">Choose a category</option>
            <option value="fashion">Fashion</option>
            <option value="gadgets">Gadgets</option>
            <option value="bags">Bags</option>
            <option value="electronics">Electronics</option>
          </select>
          {errors.category && (
            <p className="text-red-500 mt-1">Category is required</p>
          )}
        </div>

        {/* product image url */}
        <div>
          <label className="text-sm font-medium block text-gray-500">
            Image URL
          </label>
          <input
            {...register("image", { required: true })}
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
            placeholder="https://"
          />
          {errors.image && (
            <p className="text-red-500 mt-1">Image URL is required</p>
          )}
        </div>

        {/* price and date */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block text-gray-500">
                Price
              </label>
              <input
                {...register("price", { required: true })}
                className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                placeholder="$100"
              />
              {errors.price && (
                <p className="text-red-500 mt-1">Price is required</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium block text-gray-500">
                Upload Date
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
              />
              {errors.date && (
                <p className="text-red-500 mt-1">Date is required</p>
              )}
            </div>
          </div>
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="btn btn-primary mt-4 w-full"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
