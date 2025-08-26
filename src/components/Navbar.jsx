import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => setIsOpen(false), [pathname]);

  const navItem = (
    to,
    label,
    extra = ""
  ) => (
    <Link
      to={to}
      className={`relative px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors hover:text-sbc-yellow ${extra}`}
    >
      <span>{label}</span>
      {/* underline only on hovered/focused item */}
      <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-0 bg-sbc-yellow transition-all duration-300 group-hover:w-0 hover:w-full focus-visible:w-full" />
    </Link>
  );

  return (
    <nav className="bg-sbc-blue sticky top-0 z-50 text-white shadow-2xl">
      <div className="container mx-auto px-6 lg:px-32 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img className="w-11 h-11 object-contain" src={logo} alt="School Logo" />
          <span className="text-lg font-extrabold tracking-tight">Scoil Bhreac Chluain</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {navItem("/", "Home")}
            {navItem("/about-us", "About Us")}
            {navItem("/latest", "Latest")}
            {navItem("/parents-information", "Parents Information")}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-sbc-yellow text-sbc-blue font-extrabold text-sm px-5 py-2 shadow hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {/* Animated burger to X */}
          <div className="relative w-6 h-6">
            <span
              className={`absolute left-0 top-1 block h-[2px] w-6 bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-6 -translate-y-1/2 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-1 block h-[2px] w-6 bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown — same structure as your original, but polished */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
          <ul className="py-2 text-base">
            <li>
              <Link
                to="/"
                className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/latest"
                className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition"
              >
                Latest
              </Link>
            </li>
            <li>
              <Link
                to="/parents-information"
                className="block px-4 py-3 hover:bg-white/10 rounded-xl mx-2 transition"
              >
                Parents Information
              </Link>
            </li>
            <li className="px-4 pt-2">
              <Link
                to="/contact"
                className="block w-full text-center rounded-full bg-sbc-yellow text-sbc-blue font-extrabold px-5 py-3 shadow hover:shadow-md"
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
