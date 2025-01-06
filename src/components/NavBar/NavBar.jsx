import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Left Side: Trip Planner */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="text-white">
              {/* Hamburger Icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-white text-2xl font-bold tracking-wide">
              Trip Planner
            </div>
          </div>

          {/* Right Side: Relevant Buttons (Destinations, Packages, Reviews) */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-400 transition duration-300"
                activeClassName="bg-purple-700"
              >
                Home
              </NavLink>
              <NavLink
                to="/booking"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-400 transition duration-300"
                activeClassName="bg-purple-700"
              >
                Booking
              </NavLink>
              <NavLink
                to="/packages"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-400 transition duration-300"
                activeClassName="bg-purple-700"
              >
                Packages
              </NavLink>
              <NavLink
                to="/discount"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-400 transition duration-300"
                activeClassName="bg-purple-700"
              >
                Discount
              </NavLink>
              <NavLink
                to="/reviews"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-400 transition duration-300"
                activeClassName="bg-purple-700"
              >
                Reviews
              </NavLink>
            </div>
          </div>

          {/* Right Side: Register and Login Buttons */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <NavLink
                to="/register"
                className="text-white bg-green-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition duration-300"
                activeClassName="bg-green-600"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="text-white bg-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 transition duration-300"
                activeClassName="bg-gray-600"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (if needed, for responsive design) */}
    </nav>
  );
};

export default Navbar;
