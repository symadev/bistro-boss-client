import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li><a className="text-yellow-400 font-bold">HOME</a></li>
      <li><a>CONTACT US</a></li>
      <li><a>DASHBOARD</a></li>
      <li><a>OUR MENU</a></li>
      <li><a>OUR SHOP</a></li>
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
      <div className="navbar-end gap-4">
        <div className="relative">
          <FaShoppingCart className="text-xl" />
          <span className="badge badge-sm badge-secondary absolute -top-2 -right-2">3</span>
        </div>
        <a className="text-sm font-semibold">SIGN OUT</a>
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
