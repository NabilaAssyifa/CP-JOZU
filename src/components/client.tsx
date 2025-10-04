"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Reset animation state after transition
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-gradient-to-br from-gray-700 to-gray-900",
      "bg-gradient-to-br from-gray-600 to-gray-800", 
      "bg-gradient-to-br from-gray-800 to-black",
    ];
    return colors[name.length % colors.length];
  };

  return (
    <div className="px-6 md:px-12 py-20 max-w-4xl mx-auto bg-white">
      {/* Title */}
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          Stories of collaboration and success with our partners
        </p>
      </motion.div>

      {/* Single Animated Card */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center"
      >
        <div className="w-full max-w-2xl">
          <div
            className={`bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Content */}
            <div className="p-8 relative">
              <FontAwesomeIcon 
                icon={faQuoteLeft} 
                className="text-gray-300 text-5xl absolute -top-2 left-6 opacity-50" 
              />
              <p className="text-gray-700 text-lg leading-relaxed text-center italic pt-4">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-4 bg-black/90 rounded-b-2xl p-6">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${getAvatarColor(testimonials[currentIndex].name)} shadow-lg`}>
                <span className="text-white font-bold text-sm">
                  {getInitials(testimonials[currentIndex].name)}
                </span>
              </div>
              <div className="text-center md:text-left">
                <p className="font-semibold text-white text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-300">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition-all duration-300 hover:scale-110"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
        </button>

        {/* Progress Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && index !== currentIndex) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-black w-8" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 shadow-md transition-all duration-300 hover:scale-110"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-white" />
        </button>
      </div>
    </div>
  );
}
