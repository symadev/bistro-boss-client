import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Components/UseAuth/UseAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUser } from "react-icons/fa";


const AllUsers = () => {



    const axiosSecure = UseAxiosSecure()
    const { data :users=[],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
          const res = await axiosSecure.get('/users')
           return  res.data;
        }
      })

      const handleMakeAdmin = user =>{

      }

      const handleDeleteUser = user =>{
    
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            
            axiosSecure.delete(`/users/${user._id}`)
            .then(res=>{
                if(res.data.deletedCount > 0){
                    refetch()
            Swal.fire({
                
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

                }
                
            })
        }
          });

    }
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
        <th>Email</th>
        <th>Users</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,index)=><tr  key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button onClick={()=> handleMakeAdmin(user)} className="btn btn-primary btn-lg">
            <FaUser className="text-red-500"></FaUser></button></td>

            <td> <button onClick={()=> handleDeleteUser(user)} className="btn btn-ghost btn-lg">
                <FaTrashAlt className="text-red-500"></FaTrashAlt></button></td>
          </tr>)
      }
      
     
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllUsers;