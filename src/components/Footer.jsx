import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="bg-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600">&copy; 2009-2023 Scoil Bhreac Chluain. All rights reserved.</p>
        <div className="mt-4">
          <a href="mailto:scoilbhreacchluain@gmail.com" className="text-gray-600 hover:text-gray-900 mx-2">
            Email
          </a>
          <a href="tel:+353669157436" className="text-gray-600 hover:text-gray-900 mx-2">
            Phone/Fax
          </a>
          <a href="tel:+353860689704" className="text-gray-600 hover:text-gray-900 mx-2">
            Mobile
          </a>
        </div>
        <div className="mt-4">
          <a
            href={`${baseUrl}Code-of-Behaviour-and-Anti-Bullying-Policy.pdf`}
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            Code of Behaviour and Anti-bullying Policy
          </a>
          <a
            href={`${baseUrl}Annual-Admissions-Notice-2024-2025.pdf`}
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            Admissions Notice
          </a>
          <a
            href={`${baseUrl}Admission-Application-Form.pdf`}
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            Admission Application
          </a>
          <Link to="/communications-policy" className="text-gray-600 hover:text-gray-900 mx-2">
            Communications Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
