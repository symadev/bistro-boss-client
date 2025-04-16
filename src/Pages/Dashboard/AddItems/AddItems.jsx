import Titles from '../../../Components/Titles/Titles';
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../../Components/UseAuth/UseAxiosPublic';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;





const AddItems = () => {
    const axiosPublic = UseAxiosPublic()

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        //image upload to image bb and get url from image bb nad set the url to the database
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile,{
            headers: {
               
                'Content-Type': 'multipart/form-data'
              }
        })
        //by-default jdi amra image data send korte chai tahole amaderk akta special header dite hobe must
        // or body ar moddhe from data hishabe dite hobe and aitake stringify kora jabe na 



console.log(res.data);
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
                        {...register("name", { required: true })}
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
                            {...register("price")}
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
                        {...register("recipe", { required: true })}
                        className="w-full p-2 border rounded h-32 resize-none"
                        placeholder="Recipe Details"
                    ></textarea>
                </div>
                {/* File Upload */}
                <div>
                    <label className="block mb-1 ">Upload Image</label>
                    <input
                        {...register("image", { required: true })}
                        //that means mendatory 
                        type="file"
                        className="block w-full text-sm text-gray-500
               file:mr-4 file:py-2 file:px-4
               file:rounded file:border-0
               file:text-sm file:font-semibold
               file:bg-gray-100 file:text-gray-700
               hover:file:bg-gray-200"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 text-white px-4 py-2 rounded hover:from-yellow-600 hover:to-orange-500 flex items-center gap-2 transition-all duration-300"
                    >
                        Add Item 🍽️
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;
