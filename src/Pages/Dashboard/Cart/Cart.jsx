import UseCart from "../../../Components/UseAuth/UseCart";


const Cart = () => {
    const [cart] = UseCart()
    const totalPrice = cart.reduce((total,item )=>total+item.price,0);
    // এটা cart নামের অ্যারেটির মধ্যে থাকা সব item-এর price গুলো যোগ করে মোট দাম (totalPrice) হিসেব করে।
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
                  <button className="btn btn-ghost btn-xs">details</button>
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