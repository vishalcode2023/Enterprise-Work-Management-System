import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const TopNavbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav className="bg-white py-1 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to='/' className="flex items-center">
            <img src="/Images/Screenshot 2025-07-06 162056.png" alt="Logo" className="h-12 w-auto" />
            <span className="ml-2 text-2xl font-extrabold text-blue-600 tracking-tight">
              TaskFlow
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-lg font-medium text-gray-700">
            <Link to="/features" className="hover:text-blue-600 transition">Features</Link>
            <Link to="/solutions" className="hover:text-blue-600 transition">Solutions</Link>
            <Link to="/guide" className="hover:text-blue-600 transition">Product Guide</Link>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-lg font-semibold"
            >
              Sign Up
            </Link>
            <Link to="/login" className="text-blue-600 font-medium hover:underline text-lg">
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pb-6 pt-2 space-y-4 bg-gray-50 shadow-inner transition-all duration-300 ease-in-out ${
          isMobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-3 text-sm font-medium text-gray-700">
          <Link to="/features" className="hover:text-blue-600">Features</Link>
          <Link to="/solutions" className="hover:text-blue-600">Solutions</Link>
          <Link to="/guide" className="hover:text-blue-600">Product Guide</Link>
        </div>
        <div className="flex flex-col space-y-3">
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold text-center"
          >
            Sign Up
          </Link>
          <Link to="/login" className="text-blue-600 font-medium hover:underline text-center">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
