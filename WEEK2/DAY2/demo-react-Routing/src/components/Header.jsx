import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleExploreMenu = () => {
        navigate("/all-tasks"); //* Navigate to the Menu component
      };
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-secondary rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Welcome to <br /> Navigation lecture!
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-lg font-light">
          <img className="w-28" src={assets.hackathon_img} alt="" />
          <p>
            You will discover "Router, Routes, Route" 
            <br className="hidden sm:block" />
            
            <li>1-Take a look at App.jsx</li>
            <li>2-Take a look at Main.jsx</li>
            <li>3-The project is using tailwindcss</li>
            <li>4-You have components and views folders</li>
            <li>5-At Navbar.jsx(inside components) : we used NavLink i'ts similar to Link but it will highlight the activ tab</li>
            <li>6-We used two API s one for the Mems and one for the tasks</li>
           

            
          </p>
        </div>
        <a
          onClick={handleExploreMenu}
          className="flex items-center gap-2 
             bg-white px-8 py-3 rounded-full
             text-gray-600 text-sm m-auto 
             md:m-0 hover:scale-105 transition-all duration-300"
        >
          All tasks
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* ==================================== Right Side =============================== */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:block bottom-0 h-auto rounded-lg"
          src={assets.gif_icon}
          alt=""
        />
   
       
      </div>
    </div>
  );
};

export default Header;
