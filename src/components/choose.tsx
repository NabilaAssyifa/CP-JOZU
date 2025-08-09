import React from 'react';
import Image from 'next/image';

export default function Choose() {
  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mb-20 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Stats */}
        <div className="lg:w-1/2">
         {/* Text Content */}
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Jozu for Your Digital Transformation
          </h2>
          <p className="text-lg text-gray-600">
            At Jozu, we don't just deliver IT services — we craft tailored, innovative solutions focused on your business growth. With a user-centered approach and a professional team, we're ready to be your trusted digital partner at every step of your transformation journey.
          </p>
          {/* Horizontal Stats */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 mt-10">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black mb-1 text-left">200+</h3>
              <p className="text-gray-700 font-medium">Completed Projects</p>
            </div>
            
            <div className="hidden sm:block h-auto w-px bg-gray-200"></div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black mb-1 text-left">99%</h3>
              <p className="text-gray-700 font-medium">Client Satisfaction</p>
            </div>
            
            <div className="hidden sm:block h-auto w-px bg-gray-200"></div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black mb-1 text-left">115+</h3>
              <p className="text-gray-700 font-medium">Clients Across Industries</p>
            </div>
          </div>

        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 relative">
          <Image 
            src="/img/dummy.png" 
            alt="Choose Jozu Illustration" 
            width={500}
            height={400}
            className="ml-20 object-cover "
          />
          
        
        </div>
      </div>
    </section>
  );
}