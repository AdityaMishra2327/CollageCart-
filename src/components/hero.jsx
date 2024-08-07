
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 text-white  h-screen flex items-center justify-center">
        
      
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 ">Discover your collage marketplace </h1>
        <p className="text-base md:text-xl mb-8">Buy and sell textbooks, electronics, and more with fellow students. Make smart choices and find great deals within your college community.</p>
        <a href="#get-started" className="bg-white text-slate-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-all duration-200">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
