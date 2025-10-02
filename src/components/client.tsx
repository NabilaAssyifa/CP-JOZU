"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Agus Gemoy",
    company: "Kaos Murah Agus",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Siti Komalasari",
    company: "Toko Siti Online",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Budi Santoso",
    company: "Budi Agency",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Nina Andini",
    company: "Nina Fashion",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Client() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-8 py-16 max-w-7xl mx-auto">
      {/* What Client Says */}
      <div className="mb-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">What Client Says</h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              aria-label="Previous testimonials"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 w-3" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-10 h-10 bg-black rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Next testimonials"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white w-3" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full transition-all duration-500">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .concat(
              currentIndex + 3 > testimonials.length
                ? testimonials.slice(0, currentIndex + 3 - testimonials.length)
                : []
            )
            .map((testimonial, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-base leading-relaxed">{testimonial.content}</p>
                </div>
                {/* Footer */}
                <div className="flex items-center gap-4 bg-black p-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-xs text-white font-light">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Mobile Arrows */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button
            title="Previous"
            aria-label="Previous testimonials"
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            title="Next"
            aria-label="Next testimonials"
            onClick={handleNext}
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
