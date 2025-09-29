import React from "react";
import { Link } from "react-router-dom";
// If you have a logo, uncomment the next line and adjust the path
// import logo from "../assets/logo.png";

const Footer = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white" aria-labelledby="footer-heading">
      {/* subtle top accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600" />

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand / About */}
          <div>
            <div className="flex items-center gap-3">
              {/* If you imported a logo, show it here */}
              {/* <img src={logo} alt="Scoil Bhreac Chluain logo" className="h-10 w-10 rounded" /> */}
              <p className="text-lg font-extrabold text-gray-900">Scoil Bhreac Chluain</p>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              A caring, inclusive primary school focused on every child’s growth and wellbeing.
            </p>

            {/* Contact chips */}
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:scoilbhreacchluain@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700"
                  aria-label="Email Scoil Bhreac Chluain"
                >
                  <i className="fa-regular fa-envelope" aria-hidden="true" />
                  <span> s​coilbhreacchluain@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+353669157436"
                  className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700"
                  aria-label="Call the school: Phone/Fax"
                >
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  <span> +353 66 915 7436 (Phone/Fax)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+353860689704"
                  className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700"
                  aria-label="Call mobile"
                >
                  <i className="fa-solid fa-mobile-screen" aria-hidden="true" />
                  <span> +353 86 068 9704 (Mobile)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <p className="text-sm font-semibold text-gray-900">Quick links</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about-us" className="text-sm text-gray-700 hover:text-blue-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/parents-information" className="text-sm text-gray-700 hover:text-blue-700">
                  Parents’ Information
                </Link>
              </li>
              <li>
                <Link to="/latest" className="text-sm text-gray-700 hover:text-blue-700">
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-700 hover:text-blue-700">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Policies & Downloads */}
          <nav aria-label="Policies and downloads">
            <p className="text-sm font-semibold text-gray-900">Policies & Downloads</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/policies/Code-of-Behaviour-and-Anti-Bullying-Policy.pdf"
                  className="text-sm text-gray-700 hover:text-blue-700"
                >
                  Code of Behaviour & Anti-Bullying
                </a>
              </li>
              <li>
                <a
                  href="/admissions/Annual-Admissions-Notice-2024-2025.pdf"
                  className="text-sm text-gray-700 hover:text-blue-700"
                >
                  Admissions Notice
                </a>
              </li>
              <li>
                <a
                  href="/admissions/Admission-Application-Form.pdf"
                  className="text-sm text-gray-700 hover:text-blue-700"
                >
                  Admission Application
                </a>
              </li>
              <li>
                <a
                  href="/policies/PARENTSTAFF COMMUNICATION POLICY.pdf"
                  className="text-sm text-gray-700 hover:text-blue-700"
                >
                  Communications Policy
                </a>
              </li>
              <li>
                <a
                  href="/policies/PARENTSTAFF COMMUNICATION POLICY.pdf"
                  className="text-sm text-gray-700 hover:text-blue-700"
                >
                  Enrolment Policy
                </a>
              </li>
            </ul>
          </nav>

          {/* Visit / CTA */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Visit or enquire</p>
            <p className="mt-4 text-sm text-gray-600">
              Enrolment for the 2026 academic year is open.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href="/admissions/Admission-Application-Form.pdf"
                className="inline-flex justify-center rounded-full px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              >
                Download Application
              </a>
              <a
                href="/admissions/Annual-Admissions-Notice-2024-2025.pdf"
                className="inline-flex justify-center rounded-full px-4 py-2 text-sm font-semibold border border-blue-100 text-blue-700 hover:bg-blue-50"
              >
                Admissions Notice
              </a>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-8 h-px w-full bg-gray-200" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2009–{year} Scoil Bhreac Chluain. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs text-gray-600 hover:text-blue-700"
            >
              Back to top ↑
            </a>
            <span className="text-gray-300">|</span>
            <p className="text-xs text-gray-600">
              Designed & developed by{" "}
              <a
                href="https://daranewso.me"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700"
              >
                Dara Newsome
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
