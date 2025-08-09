'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: {
      destroy: () => void;
    };

    if (vantaRef.current) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: 0xe8e8e8,
        points: 7.00,
        showDots: false,
        maxDistance: 24.00
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section 
      ref={vantaRef} 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 font-semibold mb-4 tracking-wider">
          Designing Digital Solutions that Matter
        </p>

        {/* Main heading with emphasis */}
        <h1 className="text-gray-600 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Empower Your Brand with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">
            Smart Creative Technology
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light mb-10">
          We provide end-to-end technology solutions to support your<br />
          business's digital transformation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Start a Project
          </Link>
          <Link 
            href="/portfolio" 
            className="px-8 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-white/10 transition duration-300"
          >
            See Work <img src="/img/seework.png" alt="Arrow Right" className="inline-block ml-2 w-4 h-4 " />
          </Link>
        </div>
      </div>
    </section>
  );
}