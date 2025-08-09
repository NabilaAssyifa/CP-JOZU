import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Client() {
  return (
    <div className="px-8 py-16 max-w-7xl mx-auto">
      {/* What Client Says */}
      <div className="mb-20">
        <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">What Client Says</h2>
        <div className="flex gap-2">
            <button
            className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            aria-label="Previous testimonials"
            >
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 w-3" />
            </button>
            <button
            className="flex items-center justify-center w-10 h-10 bg-black rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Next testimonials"
            >
            <FontAwesomeIcon icon={faChevronRight} className="text-white w-3" />
            </button>
        </div>
        </div>
        <div className="flex items-center justify-between">

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {Array(3).fill(0).map((_, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                {/* Footer */}
                <div className="flex items-center gap-4 bg-black p-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-bold text-white">Agus Gemoy</p>
                    <p className="text-xs text-white font-light">
                      Kaos Murah Agus
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Arrows */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button
            title="Previous"
            aria-label="Previous testimonials"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            title="Next"
            aria-label="Next testimonials"
            className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-16"></div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-6">
          Got a Digital Challenge? <br /> We've Got the Solution.
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          From design and development to branding we're here to deliver the
          right solutions and outstanding results. <br />
          Start your digital transformation today.
        </p>
        <button className="mt-8 px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors text-lg">
          Consult Now
        </button>
      </div>
    </div>
  );
}