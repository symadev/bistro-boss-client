import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useContext } from 'react';
import { AuthContext } from "../../../Provider/AuthContext";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {

  const {user, logout} = useContext(AuthContext);
  const handleLogout = () =>{
    logout()
    .then(() => {})
    .catch((error) =>console.log(error));
     
  }
  const links = (
    <>
      <li><Link to ="/"><a className="text-yellow-400 font-bold">HOME</a></Link></li>
      <li><Link to ="/contact">CONTACT US</Link></li> 
      <li><Link to ="/menu">OUR MENU</Link></li> 
      <li><Link to ="/shop/salad">OUR SHOP</Link></li>
     
      <li><Link to ="/dashboard">DASHBOARD</Link></li>   
      <li>
  <Link to="/">
    <button className="btn border-none  -mt-2 shadow-none bg-transparent hover:bg-transparent">
      <BsCart4 />
      <div className="badge badge-secondary">+0</div>
    </button>
  </Link>
</li>
    
      

      {
        user? <><button  onClick = {handleLogout}className="btn  btn-ghost">LOG OUT</button></>:
        <> <li><Link to ="/login">LOGIN</Link></li></>

      }
     
    
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl px-4">
      {/* Left: Logo */}
      <div className="navbar-start">
        <a className="text-xl font-bold leading-4">
          BISTRO BOSS
          <br />
          <span className="text-sm tracking-[0.25em] font-light">RESTAURANT</span>
        </a>
      </div>

      {/* Center: Menu links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 text-sm font-semibold">
          {links}
        </ul>
      </div>

      {/* Right: Cart and User */}
      <div className="navbar-end">
  <button className="btn btn-outline text-white hover:bg-black flex items-center gap-2">
    <FaUserCircle className="text-2xl" />
    <span className="text-sm font-semibold">SIGN OUT</span>
  </button>
</div>

    </div>
  );
};

export default Navbar;
