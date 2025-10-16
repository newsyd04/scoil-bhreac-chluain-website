import React, { useEffect } from 'react';
import { FileText } from 'lucide-react'; // install lucide-react or use any icon lib
import shapesbg from '../assets/shapes-bg.png';

const AdmissionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#F9F8F4] w-full">
      {/* ================= Page Heading ================= */}
      <section className="relative flex items-center justify-center min-h-[40vh] sm:min-h-[50vh] px-4 overflow-hidden shadow-black/30">
        {/* Shapes background */}
        <img
          src={shapesbg}
          alt=""
          className="absolute inset-0 bg-[#F9F8F4] w-full h-full object-cover z-1"
        />

        {/* Overlay box */}
        <div className="relative mx-auto max-w-4xl text-center bg-blue-900/90 rounded-lg sm:rounded-xl py-8 sm:py-12 px-6 sm:px-10 shadow-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sketch leading-snug drop-shadow-lg">
            Admissions
          </h2>
        </div>
      </section>

      {/* ================= Page Content ================= */}
      <div className="px-4 py-2 max-w-5xl mx-auto text-gray-800">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8">
          
          {/* Policy Card */}
          <a 
            href="/admissions/Admission Application Form.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-400 transition"
          >
            <FileText className="w-10 h-10 text-blue-600 mb-4 group-hover:text-blue-800 transition" />
            <span className="text-lg font-semibold text-gray-900 text-center leading-snug">
              Admission Application Form
            </span>
          </a>

          <a 
            href="/admissions/Annual Admission Notice 2026 2027.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-400 transition"
          >
            <FileText className="w-10 h-10 text-blue-600 mb-4 group-hover:text-blue-800 transition" />
            <span className="text-lg font-semibold text-gray-900 text-center leading-snug">
              Annual Admissions Notice 2026-2027
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
