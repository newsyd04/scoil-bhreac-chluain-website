import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_SBC.svg";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => setIsOpen(false), [pathname]);

  const NavLink = ({ to, label }) => (
    <Link
      to={to}
      className="relative px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors text-blue-900 hover:text-blue-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full"
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-[#F9F8F4] sticky top-0 z-50 text-sbc-blue shadow-2xl">

      <div className="bg-blue-800 h-9 w-full text-[#F9F8F4] text-sm">
        <div className="container mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-32">
          {/* Contact Info */}
          <div className="flex text-xs items-center gap-6">
            <a
              href="tel:0669157436"
              className="flex font-semibold items-center gap-1 hover:underline"
            >
              <PhoneIcon className="h-4 w-4" />
              066 915 7436
            </a>
            <a
              href="mailto:s​coilbhreacchluain@gmail.com"
              className="flex font-semibold items-center gap-1 hover:underline"
            >
              <EnvelopeIcon className="h-4 w-4" />
              s​coilbhreacchluain@gmail.com
            </a>
          </div>

          {/* Staff Login */}
          <a href="/login" className="text-xs hover:underline font-bold hidden sm:hidden md:inline-block lg:inline-block ">
            Staff Login
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-32 py-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img className="w-64 object-contain" src={logo} alt="School Logo" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center font-quicksand text-center gap-3 text-md font-semibold">
            <NavLink to="/" label="Home" />
            <NavLink to="/about-us" label="About" />
            <NavLink to="/green-flag" label="Green Flag" />
            <NavLink to="/policies" label="Policies" /> 
           <NavLink to="/admissions" label="Admissions" />
            <NavLink to="/latest" label="Latest" />
            <NavLink to="/parents-information" label="Parents Information" />
          </div>
          <Link
            to="/contact"
            className="inline-flex text-center font-quicksand text-sm items-center rounded-full bg-sbc-yellow text-sbc-blue font-extrabold px-5 py-2 shadow hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-blue-900 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {/* Simple burger → X icon */}
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
          <ul className="py-2 font-quicksand text-base">
            <li>
              <Link to="/" className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/green-flag" className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition">
                Green Flag
              </Link>
            </li>
            <li>
              <Link to="/policies" className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition">
                Policies
              </Link>
            </li>
            <li>
              <Link to="/Admissions" className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/latest" className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition">
                Latest
              </Link>
            </li>
            <li>
              <Link to="/parents-information" className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition">
                Parents Information
              </Link>
            </li>
            <li className="px-4 pt-2">
              <Link
                to="/contact"
                className="block font-quicksand w-full text-center rounded-full bg-sbc-yellow text-sbc-blue font-extrabold px-5 py-3 shadow hover:shadow-md"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
