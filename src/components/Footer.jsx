import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-[#4f9b87] py-5 px-6  text-sm  font-[poppins]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        
        {/* Left */}
        <div className="font-semiBold text-white text-base">
          Let's Travel
        </div>

        {/* Center */}
        <div className="text-white text-sm">
          Made with <span className="text-red-500">❤️</span> | © 2025 Tilchattas Agency
        </div>

        {/* Right */}
        <div className="flex gap-4 text-lg justify-center">
          <a href="#" className="text-white hover:text-blue-600"><FaFacebookF /></a>
          <a href="#" className="text-white hover:text-blue-400"><FaTwitter  /></a>
          <a href="#" className="text-white hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-blue-700"><FaLinkedinIn  /></a>
          <a href="#" className="text-white hover:text-red-600"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
