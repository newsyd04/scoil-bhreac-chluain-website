import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: Copyright and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm text-center md:text-left">
            &copy; 2009-2023 Scoil Bhreac Chluain. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <a href="mailto:scoilbhreacchluain@gmail.com" className="text-gray-600 hover:text-gray-900 text-sm">
              Email
            </a>
            <a href="tel:+353669157436" className="text-gray-600 hover:text-gray-900 text-sm">
              Phone/Fax
            </a>
            <a href="tel:+353860689704" className="text-gray-600 hover:text-gray-900 text-sm">
              Mobile
            </a>
          </div>
        </div>

        {/* Bottom Section: Policy Links and Design Credit */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${baseUrl}Code-of-Behaviour-and-Anti-Bullying-Policy.pdf`}
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Code of Behaviour and Anti-bullying Policy
            </a>
            <a
              href={`${baseUrl}Annual-Admissions-Notice-2024-2025.pdf`}
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Admissions Notice
            </a>
            <a
              href={`${baseUrl}Admission-Application-Form.pdf`}
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Admission Application
            </a>
            <Link to="/communications-policy" className="text-gray-600 hover:text-gray-900 text-sm">
              Communications Policy
            </Link>
          </div>
          <div className="mt-4 md:mt-0 text-gray-600 text-sm">
            Designed and Developed by{" "}
            <a
              href="https://daranewso.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 underline"
            >
              Dara Newsome
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
