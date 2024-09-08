// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 bg-opacity-50 text-blue p-4 fixed w-full top-0 left-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold">MyPortfolio</a>
        <div>
          <a href="#about" className="px-4 hover:underline text-black font-bold">About</a>
          <a href="#projects" className="px-4 hover:underline font-bold">Projects</a>
          <a href="#contact" className="px-4 hover:underline font-bold">Contact</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
