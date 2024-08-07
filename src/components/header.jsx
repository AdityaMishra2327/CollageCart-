// src/components/header.jsx
import React from 'react';
import logo from '../Images/logo.jpg'; 
import profile from '../Images/userimg.png';

const Header = () => {
  return (
    <header className="bg-slate-900   shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="CollegeCart Logo" className="h-12 rounded-full" />
      </div>
      <nav className="flex space-x-6">
        <a href="#home" className="text-white font-bold ">Home</a>
        <a href="#categories" className="text-white  font-bold ">categories</a>
        <a href="#sell-Items" className="text-white font-bold ">Sell-Items</a>
        <a href="#Aboutus" className="text-white  font-bold ">About Us</a>
        <a href="#contact" className="text-white  font-bold ">Contact Us</a>
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
