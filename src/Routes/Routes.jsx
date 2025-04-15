
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import ContactInfo from "../Pages/ContactInfo/ContactInfo/ContactInfo";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Pages/Shared/DashBoard/DashBoard";
import Dashboard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";


   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "menu",
          element:<Menu></Menu>,
        },
        {
          path: "shop/:category",
          element:<Shop></Shop>,
        },
        {
          path: "contact",
          element:<ContactInfo></ContactInfo>,
        },
        {
          path: "login",
          element:<Login></Login>,
        },
        {
          path: "signup",
          element:<SignUp></SignUp>,
        },
        {
          path: "dashboard",
          element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        },
      ],
    },
    {
      path: "dashboard",
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
       {

      path: "cart",
      element:<Cart></Cart>,
    },

    //admin-routes
    {

      path: "Users",
      element:<AllUsers></AllUsers>,
    },


      ],

    }
  ]);