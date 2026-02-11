import React, { useEffect } from "react";
import crest from "../assets/crest_SBC.svg";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F9F8F4] w-full overflow-hidden">
      <div className="min-h-screen px-4 flex flex-col items-center z-10 relative">
        {/* Contact Section */}
        <section className="w-full max-w-6xl p-8 bg-[#F9F8F4] rounded-2xl my-12">
          {/* Title */}
          <header className="text-center mb-8">
            <div className="backdrop-blur-md flex items-center justify-center mb-4">
              <img
                src={crest}
                className="h-48"
                alt="Scoil Bhreac Chluain crest"
              />
            </div>
            <h2 className="text-4xl font-extrabold text-[#1C2E5A] mb-2">
              Contact Us
            </h2>
            <p className="text-gray-500 text-lg">
              We're here to help. Reach out to us anytime.
            </p>
          </header>

          <hr className="mt-6 mb-8" />

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Address</h3>
                  <p className="text-gray-500">
                    Annascaul, County Kerry, Ireland
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email</h3>
                  <p>
                    <a
                      href="mailto:info@scoilbhreacchluain.ie"
                      className="text-blue-600 hover:underline break-words"
                    >
                      info@scoilbhreacchluain.ie
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-globe text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Website</h3>
                  <p>
                    <a
                      href="https://www.scoilbhreacchluain.ie"
                      className="text-blue-600 hover:underline break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.scoilbhreacchluain.ie
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-phone text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-500">+353 (0) 66-9157436</p>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-mobile text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Mobile</h3>
                  <p className="text-gray-500">+353 (0) 86-0689704</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
