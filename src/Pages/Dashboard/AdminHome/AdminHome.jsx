import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Components/UseAuth/UseAuth";
import UseAxiosSecure from "../../../Components/UseAuth/UseAxiosSecure";
import { FaDollarSign, FaUserAlt, FaUtensils } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";


const AdminHome = () => {
    const { user } = UseAuth()
    const axiosSecure = UseAxiosSecure()


    // now we load the data through the tanstack query
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats',],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin-stats`);
            return res.data;
        }
    })



    //individually data load 



    return (
        <div>
           <h1  className="text-4xl font-bold"> Hi! Welcome to Admin Home</h1>
            {/* <div>
                {
                    user?.displayName ? user.displayName : 'back'
                }
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
  <div className="p-6 rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
    <div className="text-3xl mb-2">
      <FaDollarSign />
    </div>
    <div className="text-lg">Revenue</div>
    <div className="text-2xl font-bold">{stats.revenue}</div>
  </div>

  <div className="p-6 rounded-xl text-white bg-gradient-to-r from-yellow-400 to-yellow-200 shadow-md">
    <div className="text-3xl mb-2">
      <FaUserAlt />
    </div>
    <div className="text-lg">Users</div>
    <div className="text-2xl font-bold">{stats.users}</div>
  </div>

  <div className="p-6 rounded-xl text-white bg-gradient-to-r from-pink-400 to-pink-200 shadow-md">
    <div className="text-3xl mb-2">
      <FaUtensils />
    </div>
    <div className="text-lg">Menu Item</div>
    <div className="text-2xl font-bold">{stats.menuItems}</div>
  </div>

  <div className="p-6 rounded-xl text-white bg-gradient-to-r from-blue-400 to-blue-200 shadow-md">
    <div className="text-3xl mb-2">
      <FaBook />
    </div>
    <div className="text-lg">Orders</div>
    <div className="text-2xl font-bold">{stats.orders}</div>
  </div>
</div>

        </div>
    );
};

export default AdminHome;
