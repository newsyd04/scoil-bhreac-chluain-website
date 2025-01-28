import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 sticky top-0 z-50 text-white shadow-md">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex flex-row items-center">
          <div>
            <img className="w-24" src={logo} alt="School Logo" />
          </div>
          <div>
            <Link to="/" className="hover:text-yellow-300 transition">
              Scoil Bhreac Chluain
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-yellow-300 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/parents-information"
              className="hover:text-yellow-300 transition"
            >
              Parents Information
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-lg space-y-2 p-4">
          <li>
            <Link to="/" className="block hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="block hover:text-yellow-300 transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/parents-information"
              className="block hover:text-yellow-300 transition"
            >
              Parent's Information
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-yellow-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
