import React, { useState, useEffect } from "react";

const HomePage = () => {
  const slides = [
    {
      image: "https://via.placeholder.com/1200x600?text=Welcome+to+Our+School",
      caption: "Welcome to Scoil Bhreac Chluain!",
    },
    {
      image: "https://via.placeholder.com/1200x600?text=Enroll+Today",
      caption: "Enroll Your Child Today!",
    },
    {
      image: "https://via.placeholder.com/1200x600?text=Building+Bright+Futures",
      caption: "Building Bright Futures Together",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Hero Slideshow */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl text-white font-bold text-center drop-shadow-lg">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Admissions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Admissions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Discover how to join our school community. We are now accepting
            applications for the upcoming academic year.
          </p>
          <div className="flex flex-col max-w-2xl gap-4 px-4 sm:px-20 md:px-40 justify-center items-center mx-auto">
            <a
                href="/Admission-Application-Form.pdf"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition hover:bg-blue-700"
            >
                Download Application
            </a>
            <a
                href="/Annual-Admissions-Notice-2024-2025.pdf"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition hover:bg-blue-700"
            >
                Download Admissions Notice
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            Latest News
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                School Open Day
              </h3>
              <p className="text-gray-600">
                Join us for our Open Day to meet our staff and explore our
                facilities.
              </p>
              <img
                    className="w-full h-auto mt-4 rounded-md"
                    src="https://placehold.co/600x400"
                    alt="Open Day"
                />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    New Playground Opening
                </h3>
                <p className="text-gray-600">
                    We’re excited to announce the opening of our new state-of-the-art playground!
                </p>
                <img
                    className="w-full h-auto mt-4 rounded-md"
                    src="https://placehold.co/600x400"
                    alt="New Playground"
                />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Sports Day Highlights
              </h3>
              <p className="text-gray-600">
                Check out the highlights from our annual Sports Day event.
              </p>
              <img
                    className="w-full h-auto mt-4 rounded-md"
                    src="https://placehold.co/600x400"
                    alt="Sports Day"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Explore what makes Scoil Bhreac Chluain the perfect place for your
            child's growth and education. Get in touch or visit us to learn
            more.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
