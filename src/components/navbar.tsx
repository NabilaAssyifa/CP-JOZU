'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className={`relative max-w-7xl mx-auto rounded-full ${scrolled ? 'backdrop-blur-sm bg-white/80 shadow-lg' : 'backdrop-blur-md bg-white/50'} border border-white/20 transition-all duration-300`}>
          <div className="flex justify-between items-center px-6 py-3">
            {/* Logo */}
            <Link href="/">
              <img 
                src="/img/logo.png" 
                alt="Logo" 
                className={`h-8 w-auto transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`} 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-1 transition-colors font-semibold ${
                    pathname === item.path 
                      ? 'text-black' 
                      : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 w-[calc(100%-0.5rem)] h-0.5 bg-black transform -translate-x-1/2"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {pathname !== item.path && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transform -translate-x-1/2"
                      initial={{ width: 0 }}
                      whileHover={{ width: 'calc(100% - 0.5rem)' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none p-1 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1">
                <motion.span
                  className="h-0.5 bg-gray-700 rounded-full"
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0 }}
                />
                <motion.span
                  className="h-0.5 bg-gray-700 rounded-full"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="h-0.5 bg-gray-700 rounded-full"
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0 }}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col space-y-2 px-6 pb-4 pt-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`py-2 px-4 rounded-full transition-colors font-medium ${
                        pathname === item.path
                          ? 'text-black bg-white/30'
                          : 'text-gray-700 hover:text-black hover:bg-white/30'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}