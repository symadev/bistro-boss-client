import { FaBars, FaBook, FaClipboardList, FaHome, FaPhone, FaShoppingCart, FaStarHalfAlt, FaUtensilSpoon, FaWallet } from "react-icons/fa";
import { FaCalendar, FaPeopleGroup, FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Components/UseAuth/UseAdmin";


const Dashboard = () => {
    const [isAdmin] = UseAdmin();

    return (
        <div className="flex">

            {/* //side bar content */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-6">
                    {
                        isAdmin ?<>
                        
                    <li><NavLink to="/dashboard/AdminHome"><FaHome></FaHome>Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/AddItems"><FaUtensilSpoon></FaUtensilSpoon>Add Items</NavLink></li>
                    <li><NavLink to="/dashboard/ManageItems"><FaBars></FaBars>Manage Items</NavLink></li>
                    <li><NavLink to="/dashboard/ManageBookings"><FaBook></FaBook> Manage Bookings</NavLink></li>
                    
                    <li><NavLink to ="/dashboard/Users"><FaPeopleGroup></FaPeopleGroup>All Users</NavLink></li>
                        </>
                        :<>
                        
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>MY Cart</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaStarHalfAlt></FaStarHalfAlt>Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/booking"><FaClipboardList></FaClipboardList>My Booking</NavLink></li>
                        </>
                    }
                 
                    {/* shared nav */}
                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><FaBars></FaBars> Menu</NavLink></li>
                    <li><NavLink to="/shop"><FaShop></FaShop> Shop</NavLink></li>
                    <li><NavLink to="/contact"><FaPhone></FaPhone>Contact</NavLink></li>
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