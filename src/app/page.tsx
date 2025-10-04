'use client';
import { motion } from "framer-motion";
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Company from '@/components/company';
import Choose from '@/components/choose';
import Complete from '@/components/complete';
import Client from '@/components/client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faJsSquare, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative h-auto min-h-screen flex items-center justify-center text-white px-4 overflow-x-hidden">
        {/* Background Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>

        {/* Floating Icons (hidden di mobile) */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <FontAwesomeIcon
            icon={faFigma}
            className="floating-icon icon-delay-1"
            style={{ top: '25%', left: '10%', color: '#A259FF' }}
          />
          <FontAwesomeIcon
            icon={faJsSquare}
            className="floating-icon icon-delay-2"
            style={{ top: '25%', right: '15%', color: '#F7DF1E' }}
          />
          <FontAwesomeIcon
            icon={faPhp}
            className="floating-icon icon-delay-3"
            style={{ top: '60%', left: '10%', color: '#8892BF' }}
          />
          <FontAwesomeIcon
            icon={faDatabase}
            className="floating-icon icon-delay-4"
            style={{ top: '60%', right: '10%', color: '#4DB33D' }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 z-10 text-center max-w-full">

<motion.h1
      className="text-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Creative partner <br />
      <span className="relative inline-block">
        {/* Background highlight */}
        <motion.span
          className="bg-gray-200 px-2 md:px-6 rounded-l-2xl py-1 text-gray-800 font-bold inline-block"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        >
          for every IT project
        </motion.span>

        {/* Garis tebal responsif di luar background */}
        <motion.span
          className="absolute top-0 bottom-0 -right-1 w-1 sm:w-1 bg-gray-500"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          {/* Label di atas garis */}
          <motion.span
            className="absolute -top-5 -right-10 bg-gray-500 text-white text-xs font-semibold px-2 py-0.5 rounded-r-md rounded-tl-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          >
            Jozu
          </motion.span>
        </motion.span>
      </span>
    </motion.h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light mb-8">
            We provide end-to-end technology solutions to support your
            <br className="hidden sm:block" />
             business&apos;s digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-100 hover:text-black transition duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-gray-100 transition duration-300 flex items-center justify-center"
            >
              See Work
              <Image
                src="/img/seework.png"
                alt="Arrow Right"
                  width={120}
                  height={40}
                className="inline-block ml-2 w-4 h-4"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="overflow-x-hidden">
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <Company />
        </section>

        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-white relative">
          <div className="pt-20 pb-20">
          <Choose />
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-black">
          <Complete />
        </section>

        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-white">
          <Client />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-black text-gray-200 overflow-x-hidden">
        <Footer />
      </footer>
    </div>
  );
}
