import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sbc-blue sticky top-0 z-50 text-white shadow-2xl">
      <div className="container mx-auto px-6 lg:px-32 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex flex-row items-center">
          <div>
            <img className="w-12 pr-4" src={logo} alt="School Logo" />
          </div>
          <div>
            <Link to="/">
              Scoil Bhreac Chluain
            </Link>
          </div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          <li>
            <Link to="/" className="hover:text-sbc-yellow transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-sbc-yellow transition">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/parents-information"
              className="hover:text-sbc-yellow transition"
            >
              Parents Information
            </Link>
          </li>
          <li className="p-2 bg-sbc-yellow rounded-md">
            <Link to="/contact" className="hover:bg-sbc-y transition text-sbc-blue text-base font-extrabold">
              CONTACT
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
        <ul className="md:hidden bg-sbc-blue text-lg space-y-2 p-4">
          <li>
            <Link to="/" className="block hover:text-yellow-300 transition" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="block hover:text-yellow-300 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/parents-information"
              className="block hover:text-yellow-300 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              Parent's Information
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-yellow-300 transition" onClick={() => setIsOpen(!isOpen)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
