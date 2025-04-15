import Swal from "sweetalert2";
import UseCart from "../../../Components/UseAuth/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import UseAxiosSecure from "../../../Components/UseAuth/UseAxiosSecure";


const Cart = () => {
    const [cart,refetch] = UseCart()
//     আবার নতুন করে সার্ভার থেকে ডেটা নিয়ে আসা।
// যখন আমরা কোনো ডেটা ডিলিট করি, যোগ করি বা আপডেট করি — তখন চাই যে UI-তেও সেই পরিবর্তনটা সাথে সাথে দেখাক। এই কাজটাই করে refetch()।
    



const totalPrice = cart.reduce((total,item )=>total+item.price,0);
     // এটা cart নামের অ্যারেটির মধ্যে থাকা সব item-এর price গুলো যোগ করে মোট দাম (totalPrice) হিসেব করে।




     const axiosSecure = UseAxiosSecure()
    //  axios হল জাভাস্ক্রিপ্টের একটি লাইব্রেরি, যেটা ব্যবহার করে আমরা সার্ভার বা API-র সাথে ডেটা আদান-প্রদান করতে পারি।
    //  অর্থাৎ, আমরা ওয়েবসাইট থেকে কোনো ডেটা নিতে চাইলে বা সার্ভারে ডেটা পাঠাতে চাইলে axios দিয়ে সেটা খুব সহজে করা যায়।



    const handleDelete = id =>{

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
           
            
            axiosSecure.delete(`/carts/${id}`)
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
        <div>
           <div className="flex justify-evenly mb-8">
            <h3 className="text-6xl">
cart:{cart.length}
            </h3>
            <h3 className="text-6xl">
total Price:{totalPrice}
            </h3>
            <button className="btn-primary btn">pay</button>
           </div>

           <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item,index)=> <tr key={item._id}>
                <th>
                    {/* //to start the numbering from zero */}
            {index+1}
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
                <td>${item.price}</td>
                <th>
                  <button onClick={()=> handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-500"></FaTrashAlt></button>
                </th>
              </tr>
           )
        }
      {/* row 1 */}
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Cart;