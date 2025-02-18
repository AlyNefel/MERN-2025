import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate,Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex justify-center justify-between text-sm py-4 mb-5 border-b-gray-400">
      <img
      onClick={()=>navigate('/')}
        src={assets.nefel_logo}
        className="w-[50px] h-[45px] cursor-pointer"
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/all-tasks">
          <li className="py-1">ALL TASKS</li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/all-memes">
          <li className="py-1">ALL MEMES</li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={()=>navigate("/my-tasks")} className="hover:text-secondary cursor-pointer">My Tasks</p>
                <p onClick={()=>navigate("/my-memes")} className="hover:text-secondary cursor-pointer">My Memes</p>
              </div>
            </div>
          </div>
        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        {/* ====================================== Mobile Menu ====================================== */}
        <div className={` ${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-[50px]" src={assets.logo_app} alt="" />
            <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 px-5 text-lg font-medium">
            <NavLink onClick={()=>setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to="/all-tasks">
              <p className="px-4 py-2 rounded inline-block">ALL TASKS</p>
            </NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to="/all-memes">
              <p className="px-4 py-2 rounded inline-block">ALL MEMES</p>
            </NavLink>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
