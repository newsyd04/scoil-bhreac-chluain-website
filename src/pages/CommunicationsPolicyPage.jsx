import React from "react";

const CommunicationsPolicyPage = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Content */}
        <section>
          <p>
            For detailed policies, download the full document{" "}
            <a
              href={`${baseUrl}/Communications-Policy.pdf`}
              className="text-blue-600 hover:underline"
            >
              here
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommunicationsPolicyPage;
