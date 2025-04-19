import { useLoaderData } from "react-router-dom";
import Titles from "../../../Components/Titles/Titles";
import UseAxiosPublic from "../../../Components/UseAuth/UseAxiosPublic";
import UseAxiosSecure from "../../../Components/UseAuth/UseAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { _id, name, category, recipe, image  } = useLoaderData();
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
    
        try {
            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            if (res.data.success) {
                const imageUrl = res.data.data.display_url;
    
                const updatedItem = {
                    name: data.name,
                    category: data.category,
                    recipe: data.recipe,
                    image: imageUrl,
                };
    
                const updateRes = await axiosSecure.patch(`/menu/${_id}`, updatedItem);
                if (updateRes.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} has been updated!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
    
                reset();
            }
        } catch (error) {
            console.error("Image upload failed:", error);
        }
    };

    return (
        <div className="p-6">
            <Titles heading="---What's new?---" subHeading="UPDATE AN ITEM" />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#f4f4f5] p-8 rounded-md shadow-md border border-blue-500 max-w-xl mx-auto space-y-6"
            >
                {/* Recipe Name */}
                <div>
                    <label className="block font-medium mb-1">Recipe name*</label>
                    <input
                        type="text"
                        defaultValue={name}

                        {...register("name", { required: true })}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Recipe name"

                    />
                </div>

                {/* Category & Price */}
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block font-medium mb-1">Category*</label>
                        <select
                            {...register("category", { required: true })}
                            defaultValue={category}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soups">Soups</option>
                            <option value="dessert">Dessert</option>
                        </select>
                    </div>


                </div>

                {/* Recipe Details */}
                <div>
                    <label className="block font-medium mb-1">Recipe Details*</label>
                    <textarea
                        {...register("recipe", { required: true })}
                        defaultValue={recipe}
                        className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Recipe Details"
                        rows="5"
                    ></textarea>
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block font-medium mb-1">Recipe Image*</label>
                    <input
                        type="file"
                      
                        {...register("image", { required: true })}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        accept="image/*"
                    />
                </div>



                {/* Submit */}
                <div className="pt-4 text-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-600 text-white px-6 py-2 rounded hover:from-orange-600 hover:to-yellow-500 transition-all duration-300"
                    >
                        Update Recipe Details
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;
