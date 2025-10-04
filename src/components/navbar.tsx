'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [servicesOpen, setServicesOpen] = useState(false); // utk mobile
  // const [hoverServices, setHoverServices] = useState(false); // utk desktop
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
    // {
    //   name: 'Services',
    //   path: '/services',
    //   dropdown: [
    //     { 
    //       name: 'Web Development', 
    //       path: '/services/web',
    //       icon: Code,
    //       description: 'Custom website development with modern technologies'
    //     },
    //     { 
    //       name: 'Mobile App', 
    //       path: '/services/mobile',
    //       icon: Smartphone,
    //       description: 'iOS and Android app development'
    //     },
    //     { 
    //       name: 'UI/UX Design', 
    //       path: '/services/uiux',
    //       icon: Palette,
    //       description: 'User-centered design for better experiences'
    //     },
    //     { 
    //       name: 'SEO Optimization', 
    //       path: '/services/seo',
    //       icon: Search,
    //       description: 'Improve your search engine rankings'
    //     },
    //   ],
    // },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  // type IconName = 'Code' | 'Smartphone' | 'Palette' | 'Search';

  // const getServiceIcon = (iconName: IconName): JSX.Element => {
  //   const icons: Record<IconName, JSX.Element> = {
  //     Code: <Code size={24} className="text-blue-600" />,
  //     Smartphone: <Smartphone size={24} className="text-green-600" />,
  //     Palette: <Palette size={24} className="text-purple-600" />,
  //     Search: <Search size={24} className="text-orange-600" />,
  //   };

  //   return icons[iconName] ?? <Wrench size={24} className="text-gray-600" />;
  // };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`relative max-w-7xl mx-auto rounded-xl ${
            scrolled
              ? 'backdrop-blur-xl bg-white/50 '
              : 'backdrop-blur-2xl bg-white/50 border border-gray-200 shadow-xs'
          } md:rounded-full transition-all duration-500`}
        >
          <div className="flex justify-between items-center px-10 py-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className={`h-8 w-auto transition-all duration-300 ${
                  scrolled ? 'opacity-100' : 'opacity-90'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 relative">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative flex items-center gap-1 px-4 py-1 transition-colors font-semibold ${
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
                      onClick={() => setIsOpen(false)} // Tutup menu setelah klik
                      className={`flex items-center justify-between w-full py-3 px-4 rounded-full transition-colors font-medium ${
                        pathname === item.path
                          ? 'text-black bg-white/30'
                          : 'text-gray-700 hover:text-black hover:bg-white/30'
                      }`}
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
