
import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Pages/Shared/DashBoard/DashBoard";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "../Components/UseAuth/AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Shared/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop/:category",
        element: <Shop></Shop>,
      },
      
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "dashboard",
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      //normal routes
      {

        path: "cart",
        element: <Cart></Cart>,
      },
      {

        path: "userHome",
        element:<UserHome></UserHome>,
      },
      {

        path: "payment",
        element: <Payment></Payment>,
      },
      {

        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      //admin-routes
      {

        path: "Users",
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>,
      },
      {

        path: "adminHome",
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>,
      },
      {

        path: "ManageItems",
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>,
      },
      {

        path: "AddItems",
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>,
      },
      {
        path: "updateItem/:id",
        element: <AdminRoutes><UpdateItem /></AdminRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      },



    ],

  }
]);