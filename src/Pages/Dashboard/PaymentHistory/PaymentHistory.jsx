import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Components/UseAuth/UseAuth";
import UseAxiosSecure from "../../../Components/UseAuth/UseAxiosSecure";
import Titles from "../../../Components/Titles/Titles";

const PaymentHistory = () => {
    //we must need user to load the data
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure()

    const { data:payments=[] } = useQuery({
        queryKey: ['payments',user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        } 
    })

    return (
        <div>
             <div className="text-center mb-6">
                            <Titles heading="---Check Out The Payment History!---" subHeading="PAYMENT HISTORY" />
                        </div>
            <h3 className="text-3xl font-bold">Total Payment Item:{payments.length}</h3>

<div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {payments.map((payment, index) => (
  <tr key={payment._id}>
    <th>{index + 1}</th>
    <td>${payment.price.toFixed(2)}</td> {/* <-- fixed here */}
    <td>{payment.transactionId}</td>
    <td>{payment.status}</td>
  </tr>
))}
     
  
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default PaymentHistory;