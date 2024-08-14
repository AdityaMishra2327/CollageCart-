import React from 'react';
import backgroundImage from '../Images/heroimg.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative text-white h-screen flex items-center justify-center bg-cover bg-top"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Your College Marketplace
        </h1>
        <p className="text-base md:text-xl mb-8">
          Buy and sell textbooks, electronics, and more with fellow students. Make smart choices and find great deals within your college community.
        </p>
        <a
          href="#get-started"
          className="bg-white text-slate-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-all duration-200"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

