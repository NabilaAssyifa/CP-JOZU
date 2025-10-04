"use client";
import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";

export default function About(): JSX.Element {

  // Motion Variants
  const floatVariants: Variants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 180, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
  };

  return (
    <div className="relative bg-white min-h-screen px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">

      {/* Background Elements */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-1/4 left-5 sm:left-10 w-4 sm:w-6 h-4 sm:h-6 bg-gray-300 rounded-full opacity-40" variants={floatVariants} animate="float"></motion.div>
        <motion.div className="absolute top-1/3 right-5 sm:right-20 w-6 sm:w-8 h-6 sm:h-8 bg-gray-400 rounded-lg opacity-30" variants={floatVariants} animate="float" transition={{ delay: 1 }}></motion.div>
        <motion.div className="absolute bottom-1/4 left-1/6 sm:left-1/4 w-8 sm:w-10 h-8 sm:h-10 border-2 border-gray-300 rounded-full opacity-50" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}></motion.div>
        <motion.div className="absolute top-1/2 right-1/4 sm:right-1/3 w-10 sm:w-12 h-10 sm:h-12 bg-gray-200 rounded-full opacity-20" variants={floatVariants} animate="float" transition={{ delay: 2 }}></motion.div>
      </motion.div>

      <div className="relative z-10 text-center">

        {/* Animated Logo */}
        <motion.div className="relative inline-block mb-6 sm:mb-8 mt-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="absolute inset-0 w-20 sm:w-24 h-20 sm:h-24 border-2 border-gray-300 rounded-2xl mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}></motion.div>
          <div className="absolute inset-0 w-24 sm:w-28 h-24 sm:h-28 border border-gray-200 rounded-2xl mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="relative inline-block mb-6 sm:mb-8 px-2 sm:px-0"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight relative leading-tight">
            <span className="text-black relative from-black via-gray-800 to-gray-600">
              About Jozu
              <div className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
            </span>
          </h1>
        </motion.div>

        {/* Description Card */}
        <motion.div
          className="relative max-w-full sm:max-w-4xl mx-auto mt-6 sm:mt-8 px-2 sm:px-0"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed relative z-10 bg-white/90 backdrop-blur-sm py-6 px-4 sm:px-8 rounded-2xl border border-gray-100 shadow-sm">
            Jozu adalah partner terpercaya Anda dalam transformasi digital. Kami mengkhususkan diri 
            dalam pembuatan UI/UX design, pengembangan website, design grafis, dan berbagai project IT lainnya 
            dengan pendekatan yang profesional dan kreatif.
          </p>
          <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full opacity-50"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 -right-2 sm:-right-4 w-1 h-1 sm:w-2 sm:h-2 bg-gray-400 rounded-full opacity-30"></div>
        </motion.div>

      </div>

      {/* Floating Service Icons */}
      <motion.div className="absolute bottom-10 left-5 sm:left-20 opacity-40"
        variants={floatVariants}
        animate="float"
      >
        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xs sm:text-sm">💻</span>
        </div>
      </motion.div>
      <motion.div className="absolute top-20 right-5 sm:right-20 opacity-30"
        variants={floatVariants}
        animate="float"
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-400 rounded-lg flex items-center justify-center">
          <span className="text-xs sm:text-sm">🎨</span>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-20 right-5 sm:right-10 opacity-50"
        variants={floatVariants}
        animate="float"
        transition={{ delay: 2.5 }}
      >
        <div className="w-4 sm:w-6 h-4 sm:h-6 bg-gray-500 rounded-full flex items-center justify-center">
          <span className="text-xs sm:text-sm">🚀</span>
        </div>
      </motion.div>

    </div>
  );
}
