import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";


const UseCart = () => {
   //tan stack quary
   const {user} =UseAuth()
   const axiosSecure = UseAxiosSecure()
   const { refetch,data:cart=[] } = useQuery({
    //showing the specific user info
   queryKey: ['cart',user?.email],
   queryFn: async ()=> {
     const res = await axiosSecure.get(`/carts?email=${user.email}`)
    return res.data
   }
})
return [cart, refetch]
};

export default UseCart;



 


// useQuery: ডেটা ফেচ করার জন্য TanStack Query এর হুক।

// queryKey: ['cart']: এই ফেচ ডেটার জন্য একটি ইউনিক চাবি (রেফারেন্স)।এটি TanStack Query-কে বলে দিচ্ছে, এই কুয়েরির চাবি 'cart' এবং ইউজারের ইমেইল — মানে এই কুয়েরি শুধু নির্দিষ্ট ইউজারের জন্য।
//  ইমেইল যদি চেঞ্জ হয় (লগইন/লগআউট), তাহলে অটো রিফেচ হবে।

// queryFn: এই ফাংশনটি /cart এ GET রিকোয়েস্ট পাঠিয়ে ডেটা আনে।এখানে async ফাংশনের মাধ্যমে সার্ভার থেকে API call করা হচ্ছে /carts?email=... রুটে।
//  

// axiosSecure: নিরাপদ (authenticated) HTTP রিকোয়েস্ট করার জন্য কাস্টম axios ইন্সট্যান্স।

// return [cart]: ফেচ করা ডেটা cart নামে রিটার্ন করা হয় অ্যারে আকারে।**


// TanStack Query (বা React Query) হচ্ছে একটা ডেটা ফেচিং লাইব্রেরি — যেটা তোমাকে সহজভাবে API থেকে ডেটা আনা, ক্যাশ করা, রিফ্রেশ করা, লোডিং/এরর হ্যান্ডেল করা— এসব কাজ সহজ করে দেয়।



