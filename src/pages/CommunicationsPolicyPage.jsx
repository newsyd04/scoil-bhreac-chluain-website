import React from "react";

const CommunicationsPolicyPage = () => {
  const sections = [
    {
      title: "PARENT/STAFF COMMUNICATION POLICY",
      content: `We are fortunate to have a very active Parents Association. They are a vital part of the school community. They organise many successful fundraising events throughout the year including Bingo, the Last Man Standing, the Annual School Walk and Communion and Confirmation receptions.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Parents' Information
          </h1>
          <p className="text-lg text-gray-500 mt-4">
            Discover everything you need to know as a parent at Scoil Bhreac
            Chluain. From routines to parental involvement, we’re here to
            support you.
          </p>
          <hr className="mt-6"/>
        </header>
        {sections.map((section, index) => (
          <section
            key={index}
            className="mb-12 pb-8 border-b last:border-none last:pb-0"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CommunicationsPolicyPage;