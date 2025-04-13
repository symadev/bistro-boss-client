import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


const UseCart = () => {
   //tan stack quary
   const axiosSecure = UseAxiosSecure()
   const {data:cart=[] } = useQuery({
   queryKey: ['cart'],
   queryFn: async ()=> {
     const response = await axiosSecure.get('/carts')
    return response.data
   }
})
return [cart]
};

export default UseCart;



 


// useQuery: ডেটা ফেচ করার জন্য TanStack Query এর হুক।

// queryKey: ['cart']: এই ফেচ ডেটার জন্য একটি ইউনিক চাবি (রেফারেন্স)।

// queryFn: এই ফাংশনটি /cart এ GET রিকোয়েস্ট পাঠিয়ে ডেটা আনে।

// axiosSecure: নিরাপদ (authenticated) HTTP রিকোয়েস্ট করার জন্য কাস্টম axios ইন্সট্যান্স।

// return [cart]: ফেচ করা ডেটা cart নামে রিটার্ন করা হয় অ্যারে আকারে।**



