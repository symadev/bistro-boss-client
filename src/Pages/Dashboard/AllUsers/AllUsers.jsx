import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Components/UseAuth/UseAxiosSecure";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure()
    const { data, users=[] } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
          const res = await axiosSecure.get('/users')
           return  res.data;
        }
      })
    return (
        <div >
            <div className="flex justify-evenly mb-8">
            <h3 className="text-3xl">
                AllUsers
            </h3>
            <h3 className="text-3xl">
                total user:{users.length}
            </h3>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user=><tr  key={user._id}>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>)
      }
      
     
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllUsers;