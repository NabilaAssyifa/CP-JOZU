import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Choose() {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Side - Stats */}
        <motion.div 
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
            Why Choose Jozu for Your Digital Transformation
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center lg:text-left">
            At Jozu, we don&apos;t just deliver IT services, we craft tailored, innovative solutions focused on your business growth. With a user-centered approach and a professional team, we&apos;re ready to be your trusted digital partner at every step of your transformation journey.
          </p>

          {/* Horizontal Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-between gap-6 mt-10">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">200+</h3>
              <p className="text-gray-700 font-medium">Completed Projects</p>
            </motion.div>

            <div className="hidden sm:block h-auto w-px bg-gray-200"></div>

            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">99%</h3>
              <p className="text-gray-700 font-medium">Client Satisfaction</p>
            </motion.div>

            <div className="hidden sm:block h-auto w-px bg-gray-200"></div>

            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">115+</h3>
              <p className="text-gray-700 font-medium">Clients Across Industries</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          className="lg:w-1/2 w-full relative flex justify-center lg:justify-end mb-8 lg:mb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image 
            src="/img/dummy.png" 
            alt="Choose Jozu Illustration" 
            width={500}
            height={400}
            className="w-full max-w-sm sm:max-w-md object-cover rounded-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
