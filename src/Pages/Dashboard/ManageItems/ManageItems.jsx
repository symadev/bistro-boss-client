
import Titles from "../../../Components/Titles/Titles";
import Hooks from "../../../Hooks/Hooks";
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const ManageItems = () => {
    const [menu] = Hooks()
    return (
        <div>
            <div className="text-center mb-6">
                <Titles heading="---Hurry Up!---" subHeading="MANAGE ALL ITEMS" />
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>  ${item.price}</td>
                            <td> <button className="btn btn-primary btn-md">
                                <FaEdit className="text-red-500"></FaEdit></button></td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-500"></FaTrashAlt></button>
                            </td>
                        </tr>)}


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageItems;