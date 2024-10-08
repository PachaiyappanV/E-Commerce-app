import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, token, setToken } =
    useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-40" alt="logo" />
      <nav className="hidden md:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="uppercase">home</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="uppercase">collection</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="uppercase">about</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="uppercase">contact</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </nav>
      <div className="flex items-center gap-6">
        <img
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          {!token ? (
            <Link to="/login">
              {" "}
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-5 cursor-pointer"
              />
            </Link>
          ) : (
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-5 cursor-pointer"
            />
          )}
          {/* Drop down menu*/}
          {token && (
            <div className="hidden group-hover:block absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
                <p className=" cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className=" cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p
                  onClick={() => {
                    navigate("/login");
                    setToken("");
                  }}
                  className=" cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-3 bg-black text-white aspect-square rounded-full text-[9.5px] flex items-center justify-center">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer md:hidden"
        />
      </div>
      {/* sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border"
          >
            <p className="uppercase">home</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-6 border"
          >
            <p className="uppercase">collection</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border"
          >
            <p className="uppercase">about</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border"
          >
            <p className="uppercase">contact</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
