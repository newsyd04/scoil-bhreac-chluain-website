import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Contact Section */}
      <section className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-lg">
        {/* Title */}
        <header className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-500 text-lg">
            We're here to help. Reach out to us anytime.
          </p>
        </header>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Location */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
              <i className="fa-solid fa-location-dot text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Address</h3>
              <p className="text-gray-500">
                Annascaul, County Kerry, Ireland
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
              <i className="fa-solid fa-envelope text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Email</h3>
              <p>
                <a
                  href="mailto:scoilbhreacchluain@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  scoilbhreacchluain@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
              <i className="fa-solid fa-globe text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Website</h3>
              <p>
                <a
                  href="https://www.scoilbhreacchluain.ie"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.scoilbhreacchluain.ie
                </a>
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
              <i className="fa-solid fa-phone text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Phone</h3>
              <p className="text-gray-500">+353 (0) 66-9157436</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
              <i className="fa-solid fa-mobile text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Mobile</h3>
              <p className="text-gray-500">+353 (0) 86-0689704</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
