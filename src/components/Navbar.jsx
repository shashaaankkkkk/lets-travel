import React, { useState } from "react";

const Navbar = ({ navItems, onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative w-full bg-white">
      {/* Desktop Navigation */}
      <div className="hidden lg:block h-[100px] relative">
        {/* Title */}
        <div className="absolute top-[59px] left-[106px] font-medium text-black text-[28px] leading-[38.4px] whitespace-nowrap">
          Let&apos;s Travel With Us
        </div>

        {/* Navigation Menu */}
        <nav className="absolute top-[62px] left-[618px]">
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(item.label);
                  }}
                  className={`font-medium text-2xl leading-[32.9px] ${
                    item.active ? "text-black" : "text-[#000000bf]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Icon */}
        <svg
          className="absolute w-6 h-6 top-[68px] left-[1208px] text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        {/* Separators - Only visible on desktop */}
        <div className="absolute bg-black w-8 h-1.5 top-[68px] left-[1594px] rounded-full" />
        <div className="absolute bg-black w-[23px] h-1.5 top-[84px] left-[1603px] rounded-full" />
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-4 h-16">
          {/* Mobile Title */}
          <div className="font-medium text-black text-lg">
            Let&apos;s Travel With Us
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <div
              className={`bg-black w-8 h-1.5 top-[68px] left-[1594px] rounded-full transition-transform ${
                isMobileMenuOpen ? "rotate-45 w-[23px] translate-y-1.5" : ""
              }`}
            />
        
            <div
              className={`bg-black w-[23px] h-1.5 top-[84px] left-[1603px] rounded-full transition-transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <nav className="bg-white border-t border-gray-200">
            <ul className="px-4 py-2 space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block py-2 font-medium text-lg ${
                      item.active ? "text-black" : "text-[#000000bf]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Mobile Search */}
              <li className="py-2">
                <button className="flex items-center space-x-2 text-black">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span className="font-medium text-lg">Search</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
