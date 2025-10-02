import React from 'react';
import Image from 'next/image';

export default function Choose() {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - Stats */}
        <div className="lg:w-1/2 w-full">
          {/* Text Content */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
            Why Choose Jozu for Your Digital Transformation
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center lg:text-left">
            At Jozu, we don't just deliver IT services, we craft tailored, innovative solutions focused on your business growth. With a user-centered approach and a professional team, we're ready to be your trusted digital partner at every step of your transformation journey.
          </p>
          {/* Horizontal Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-between gap-6 mt-10">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">200+</h3>
              <p className="text-gray-700 font-medium">Completed Projects</p>
            </div>
            
            <div className="hidden sm:block h-auto w-px bg-gray-200"></div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">99%</h3>
              <p className="text-gray-700 font-medium">Client Satisfaction</p>
            </div>
            
            <div className="hidden sm:block h-auto w-px bg-gray-200"></div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">115+</h3>
              <p className="text-gray-700 font-medium">Clients Across Industries</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 w-full relative flex justify-center lg:justify-end">
          <Image 
            src="/img/dummy.png" 
            alt="Choose Jozu Illustration" 
            width={500}
            height={400}
            className="w-full max-w-sm sm:max-w-md object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
