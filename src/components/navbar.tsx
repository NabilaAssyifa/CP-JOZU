'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, ChevronDown, Code, Smartphone, Search, Palette } from 'lucide-react';
import { JSX } from 'react';
import Image from 'next/image';

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // utk mobile
  const [hoverServices, setHoverServices] = useState(false); // utk desktop
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
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { 
          name: 'Web Development', 
          path: '/services/web',
          icon: Code,
          description: 'Custom website development with modern technologies'
        },
        { 
          name: 'Mobile App', 
          path: '/services/mobile',
          icon: Smartphone,
          description: 'iOS and Android app development'
        },
        { 
          name: 'UI/UX Design', 
          path: '/services/uiux',
          icon: Palette,
          description: 'User-centered design for better experiences'
        },
        { 
          name: 'SEO Optimization', 
          path: '/services/seo',
          icon: Search,
          description: 'Improve your search engine rankings'
        },
      ],
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

type IconName = 'Code' | 'Smartphone' | 'Palette' | 'Search';

const getServiceIcon = (iconName: IconName): JSX.Element => {
  const icons: Record<IconName, JSX.Element> = {
    Code: <Code size={24} className="text-blue-600" />,
    Smartphone: <Smartphone size={24} className="text-green-600" />,
    Palette: <Palette size={24} className="text-purple-600" />,
    Search: <Search size={24} className="text-orange-600" />,
  };

  return icons[iconName] ?? <Wrench size={24} className="text-gray-600" />;
};


  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
      <div
          className={`relative max-w-7xl mx-auto rounded-full ${
            scrolled
              ? 'backdrop-blur-xl bg-white/20  border border-gray-100'
              : 'backdrop-blur-2xl bg-white/15 border border-gray-200 shadow-xs'
          } transition-all duration-500 `}
        >
          <div className="flex justify-between items-center px-10 py-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="Logo"
                className={`h-8 w-auto transition-all duration-300 ${
                  scrolled ? 'opacity-100' : 'opacity-90'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 relative">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setHoverServices(true)}
                  onMouseLeave={() => item.dropdown && setHoverServices(false)}
                >
                  <Link
                    href={item.path}
                    className={`relative flex items-center gap-1 px-4 py-1 transition-colors font-semibold ${
                      pathname === item.path
                        ? 'text-black'
                        : 'text-gray-400 hover:text-black'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <motion.div
                        animate={{ rotate: hoverServices ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    )}
                    {pathname === item.path && (
                      <motion.span
                        className="absolute bottom-0 left-1/2 w-[calc(100%-0.5rem)] h-0.5 bg-black transform -translate-x-1/2"
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Services (Desktop) - Updated Design */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {hoverServices && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full mt-3 w-[800px] right-0 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 z-50 overflow-hidden"
                        >
                          {/* Header */}
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Services</h3>
                            <p className="text-gray-600">Professional solutions for your digital needs</p>
                          </div>
                          
                          {/* Services Grid */}
                          <div className="grid grid-cols-2 gap-6 p-6">
                            {item.dropdown.map((sub, index) => {
                              const IconComponent = sub.icon;
                              return (
                                <Link
                                  key={sub.path}
                                  href={sub.path}
                                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50/80 transition-all duration-300 border border-transparent hover:border-gray-200"
                                  onMouseEnter={() => setHoverServices(true)}
                                >
                                  <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                      {IconComponent && <IconComponent size={24} className="text-blue-600" />}
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                                      {sub.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                      {sub.description}
                                    </p>
                                  </div>
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          
                          {/* Footer */}
                          <div className="bg-gray-50/50 p-4 border-t border-gray-100">
                            <Link 
                              href="/services"
                              className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                              View all services
                              <ChevronDown size={16} className="rotate-0" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
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
                    <div key={item.path}>
                      <button
                        className={`flex items-center justify-between w-full py-2 px-4 rounded-full transition-colors font-medium ${
                          pathname === item.path
                            ? 'text-black bg-white/30'
                            : 'text-gray-700 hover:text-black hover:bg-white/30'
                        }`}
                        onClick={() => {
                          if (item.dropdown) {
                            setServicesOpen(!servicesOpen);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                      >
                        {item.name}
                        {item.dropdown && (
                          <motion.div
                            animate={{ rotate: servicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        )}
                      </button>

                      {/* Dropdown Mobile - Updated Design */}
                      {item.dropdown && servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 mt-2 space-y-2 bg-white/30 rounded-2xl p-3"
                        >
                          {item.dropdown.map((sub, index) => {
                            const IconComponent = sub.icon;
                            return (
                              <Link
                                key={sub.path}
                                href={sub.path}
                                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-white/50 transition-colors group"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                  {IconComponent && <IconComponent size={20} className="text-blue-600" />}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                                    {sub.name}
                                  </h4>
                                  <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                                    {sub.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                          
                          {/* Mobile View All Link */}
                          <Link
                            href="/services"
                            className="flex items-center justify-center gap-2 py-3 text-blue-600 hover:text-blue-700 font-medium border-t border-white/50 mt-2"
                            onClick={() => setIsOpen(false)}
                          >
                            View all services
                          </Link>
                        </motion.div>
                      )}
                    </div>
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