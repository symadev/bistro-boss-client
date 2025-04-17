import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "./UseAdmin";
import UseAuth from "./UseAuth";


const AdminRoutes = ({ children }) => {
    const { user, loading: isLoading } = UseAuth();
    const [isAdmin,isAdminLoading] = UseAdmin()
    const location = useLocation()
    
    if(isLoading ||isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to = '/login' state={{ from: location }} replace ></Navigate>
};

export default AdminRoutes;