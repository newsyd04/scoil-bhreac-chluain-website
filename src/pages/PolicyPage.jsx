import React from 'react';
import { FileText } from 'lucide-react'; // install lucide-react or use any icon lib
import shapesbg from '../assets/shapes-bg.png';

const PolicyPage = () => (
  <div className="min-h-screen w-full">
    {/* ================= Page Heading ================= */}
    <section className="relative flex items-center justify-center min-h-[40vh] sm:min-h-[50vh] px-4 overflow-hidden shadow-black/30">
      
      {/* Shapes background */}
      <img
        src={shapesbg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover saturate-[0.86] -z-10"
      />

      {/* Overlay box */}
      <div className="relative mx-auto max-w-4xl text-center bg-blue-900/90 rounded-lg sm:rounded-xl py-8 sm:py-12 px-6 sm:px-10 shadow-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sketch leading-snug drop-shadow-lg">
        School Policies
        </h2>
      </div>
    </section>

    {/* ================= Page Content ================= */}
    <div className="px-4 py-2 max-w-5xl mx-auto text-gray-800">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8">
        
        {/* Policy Card */}
        <a 
          href="/policies/Code-of-Behaviour-and-Anti-Bullying-Policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-400 transition"
        >
          <FileText className="w-10 h-10 text-blue-600 mb-4 group-hover:text-blue-800 transition" />
          <span className="text-lg font-semibold text-gray-900 text-center leading-snug">
            Code of Behaviour & Anti-Bullying Policy
          </span>
        </a>

        <a 
          href="/policies/policy2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-400 transition"
        >
          <FileText className="w-10 h-10 text-blue-600 mb-4 group-hover:text-blue-800 transition" />
          <span className="text-lg font-semibold text-gray-900 text-center leading-snug">
            Enrolment Policy
          </span>
        </a>

        <a 
          href="/policies/PARENTSTAFF COMMUNICATION POLICY.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-400 transition"
        >
          <FileText className="w-10 h-10 text-blue-600 mb-4 group-hover:text-blue-800 transition" />
          <span className="text-lg font-semibold text-gray-900 text-center leading-snug">
            Communication Policy
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default PolicyPage;
