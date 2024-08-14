// src/components/header.jsx
import React from 'react';
import logo from '../Images/logo.jpg'; 
import profile from '../Images/userimg.png';

const Header = () => {
  return (
    <header className="bg-slate-900  shadow-md p-4 max-lg:h-[60px] flex justify-between items-center sticky top-0 z-[100] w-full">
      <div className="flex items-center">
        <img src={logo} alt="CollegeCart Logo" className="h-12 rounded-full" />
      </div>
      <nav className="hidden lg:flex space-x-6 max-lg:px-8">
        <a href="#home" className="text-white font-bold ">Home</a>
        <a href="#browse" className="text-white  font-bold ">categories</a>
        <a href="#sellsection" className="text-white font-bold ">Sell-Items</a>
        <a href="#testimonical" className="text-white  font-bold ">About Us</a>
        <a href="#footer" className="text-white  font-bold ">Contact Us</a>
      </nav>
      <div className="flex items-center space-x-3">
        <img
          src= {profile}
          alt="Profile"
          className="h-10 w-10 rounded-full"
        />
    
      </div>
    </header>
  );
};

export default Header;
