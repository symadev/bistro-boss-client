import { FaBars, FaClipboardList, FaHome, FaPhone, FaShoppingCart, FaStarHalfAlt, FaWallet } from "react-icons/fa";
import { FaCalendar, FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">

            {/* //side bar content */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-6">
                 
                    <li><NavLink to =" /dashboard/userHome"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to =" /dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to =" /dashboard/payment"><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to =" /dashboard/cart"><FaShoppingCart></FaShoppingCart>MY Cart</NavLink></li>
                    <li><NavLink to =" /dashboard/review"><FaStarHalfAlt></FaStarHalfAlt>Add Review</NavLink></li>
                    <li><NavLink to =" /dashboard/booking"><FaClipboardList></FaClipboardList>My Booking</NavLink></li>
                    <div className="divider"></div>

                    <li><NavLink to ="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to ="/menu"><FaBars></FaBars> Menu</NavLink></li>
                    <li><NavLink to ="/shop"><FaShop></FaShop> Shop</NavLink></li>
                    <li><NavLink to ="/contact"><FaPhone></FaPhone>Contact</NavLink></li>
                </ul>
            
            </div>
            <div className="flex-1 p-8">
                  {/* //dashboard content */}
                <Outlet></Outlet>
            
            </div>
            
        </div>
    );
};

export default Dashboard;