
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Components/UseAuth/UseAuth";


const PrivateRoutes = ({children}) => {
    const {user,loading} = UseAuth()
   const  location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate to = '/login' state={{ from: location }} replace ></Navigate>
       
};

export default PrivateRoutes;


// এই PrivateRoutes কম্পোনেন্টটা আমরা ব্যবহার করি এমন রুট (route) গুলোকে সিকিউর বা 
// প্রাইভেট করার জন্য, যেখানে শুধুমাত্র লগইন করা ইউজাররাই অ্যাক্সেস করতে পারবে।