import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600">&copy; 2009-2023 Scoil Bhreac Chluain. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Email</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Phone/Fax</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Mobile</a>
        </div>
        <div className="mt-4">
          <a href="/Code-of-Behaviour-and-Anti-Bullying-Policy.pdf" className="text-gray-600 hover:text-gray-900 mx-2">Code of Behaviour and Anti-bullying Policy</a>
          <a href="/Annual-Admissions-Notice-2024-2025.pdf" className="text-gray-600 hover:text-gray-900 mx-2">Admissions Notice</a>
          <a href="/Admission-Application-Form.pdf" className="text-gray-600 hover:text-gray-900 mx-2">Admission Application</a>
          <a href="./communications-policy" className="text-gray-600 hover:text-gray-900 mx-2">Communications Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
