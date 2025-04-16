import Titles from '../../../Components/Titles/Titles';
import { useForm } from 'react-hook-form';

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Reset form after submission
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-6">
        <Titles heading="---What's new?---" subHeading="ADD AN ITEM" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-md shadow-2xl max-w-3xl mx-auto space-y-4">
        {/* Recipe Name */}
        <div>
          <label className="block  mb-1">Recipe name</label>
          <input
            {...register("recipeName", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Recipe name"
          />
        </div>

        {/* Category & Price */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block  mb-1">Category</label>
            <select
              {...register("category", { required: true })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select category</option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soups">Soups</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block  mb-1">Price</label>
            <input
              {...register("price", { required: true })}
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Price"
            />
          </div>
        </div>

        {/* Recipe Details */}
        <div>
          <label className="block  mb-1">Recipe Details</label>
          <textarea
            {...register("recipeDetails", { required: true })}
            className="w-full p-2 border rounded h-32 resize-none"
            placeholder="Recipe Details"
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
          <label className="block  mb-1">Upload Image</label>
          <input
            {...register("image")}
            type="file"
            className="block"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className=" bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 flex items-center gap-2"
          >
            Add Item 🍽️
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
