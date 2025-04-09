import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/icon/van.png"

const Navbar = () => {
  const links = (
    <>
      <li><Link to ="/"><a className="text-yellow-400 font-bold">HOME</a></Link></li>
      <li><Link to ="/contact">CONTACT US</Link></li> 
      <li><Link to ="/menu">OUR MENU</Link></li> 
      <li><Link to ="/shop/salad">OUR SHOP</Link></li>
      <img className="w-10 h-10" src={logo} alt="logo" />
      <li><Link to ="/login">LOGIN</Link></li>
    
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
