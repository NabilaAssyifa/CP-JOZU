'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CompanyMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const containerWidth = marquee.offsetWidth;
      const contentWidth = marquee.firstElementChild?.scrollWidth || 0;
      
      // Calculate duration based on content width
      const duration = Math.max(contentWidth / 100, 20); // Adjusted speed
      
      marquee.style.setProperty('--duration', `${duration}s`);
    }
  }, []);

  return (
    <div className="relative overflow-hidden py-6 bg-white border-y border-white">
      {/* Marquee container */}
      <div 
        ref={marqueeRef}
        className="flex w-full overflow-hidden"
      >
        {/* Marquee content - repeated for seamless looping */}
        <div className="flex items-center whitespace-nowrap animate-marquee" style={{ animationDuration: 'var(--duration, 20s)' }}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-12">
              <div className="relative h-12 w-40 mr-6">
                <Image 
                  src="/img/2.png" // Replace with your logo path
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade effects */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
}