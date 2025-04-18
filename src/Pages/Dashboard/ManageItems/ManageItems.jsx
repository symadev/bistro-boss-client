
import Swal from "sweetalert2";
import Titles from "../../../Components/Titles/Titles";
import Hooks from "../../../Hooks/Hooks";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseAxiosSecure from "../../../Components/UseAuth/UseAxiosSecure";


const ManageItems = () => {
    const [menu,  loading ,refetch] = Hooks()
    const axiosSecure = UseAxiosSecure()

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                //now we make the delete api for deletion

                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                //akhon jdi aikahne deletedCount show kore taile  bujhte hobe data delete hoyece console theke
                if (res.data.deletedCount > 0) {
                    //refetch to update the ui
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your item  has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                      });

                }

                
            }
        });
    }
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
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-500"></FaTrashAlt></button>
                            </td>
                        </tr>)}


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageItems;