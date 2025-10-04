"use client";
import React, { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  name: string;
  client: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  status: "Completed" | "In Progress" | "Planning";
}

export default function Portfolio(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const projects: Project[] = [
    { id: 1, name: "E-commerce Platform", client: "Retail Tech Co", category: "Web Development", description: "Next-gen e-commerce solution with AI-powered recommendations", tech: ["NextJS", "TypeScript", "Tailwind", "Node.js"], image: "🛒", status: "Completed" },
    { id: 2, name: "Corporate Portal", client: "Tech Startup", category: "UI/UX Design", description: "Enterprise dashboard with real-time analytics and data visualization", tech: ["Figma", "React", "D3.js", "WebGL"], image: "💼", status: "In Progress" },
    { id: 3, name: "Brand Identity", client: "Fashion Brand", category: "Graphic Design", description: "Complete brand identity system including logo, packaging, and digital assets", tech: ["Illustrator", "Photoshop", "Blender", "After Effects"], image: "🎨", status: "Completed" },
    { id: 4, name: "Blockchain Interface", client: "Crypto Platform", category: "Web Development", description: "Decentralized application interface with wallet integration", tech: ["Web3.js", "Ethereum", "Solidity", "Three.js"], image: "⛓️", status: "Completed" },
    { id: 5, name: "Mobile Application", client: "Health Tech", category: "UI/UX Design", description: "Health tracking app with personalized insights and community features", tech: ["React Native", "Firebase", "Chart.js", "Push Notifications"], image: "📱", status: "Planning" },
    { id: 6, name: "AI Dashboard", client: "AI Research Lab", category: "IT Solutions", description: "Machine learning model monitoring and visualization platform", tech: ["Python", "TensorFlow", "WebSockets", "D3.js"], image: "🤖", status: "Completed" },
  ];

  const categories = ["All", "Web Development", "UI/UX Design", "Graphic Design", "IT Solutions"];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);

  return (
<div className="relative bg-white min-h-screen px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(30deg,transparent_40%,rgba(0,0,0,0.8)_50%,transparent_60%)] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/4 left-5 w-8 h-8 border-2 border-black/10 rotate-45 animate-float opacity-40"></div>
        <div className="absolute top-3/4 right-10 w-6 h-6 bg-black/5 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/3 left-20 w-12 h-12 border border-black/10 rounded-lg animate-pulse opacity-20"></div>
        <div className="absolute top-10 right-1/4 text-xs text-black/5 font-mono whitespace-nowrap animate-binary">
          10101010 01010101 11001100 00110011 10101010 01010101
        </div>
        <div className="absolute bottom-10 left-1/4 text-xs text-black/5 font-mono whitespace-nowrap animate-binary" style={{ animationDelay: "2s" }}>
          01100110 10011001 00110011 01010101 01100110 10011001
        </div>
        <div className="absolute top-1/2 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-px h-16 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section with Animation */}
        <motion.div
          className="text-center pt-20 pb-16 relative mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-900 to-gray-700">PORTFOLIO</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our <span className="text-black font-semibold">digital craftsmanship</span> and <span className="text-black font-semibold">innovative solutions</span> that shape the future
            </p>
          </motion.div>
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-black/30 rotate-45 bg-white"></div>
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 group overflow-hidden ${
                  selectedCategory === category
                    ? "bg-black text-white border-black/30"
                    : "bg-white border border-black/10 text-gray-700 hover:text-white hover:border-black/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <span className="relative z-10">{category}</span>
                <div className="absolute inset-0 bg-black rounded-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl bg-gradient-to-r from-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Framer Motion */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl border border-black/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Image/Icon */}
                  <div className="relative h-36 sm:h-44 md:h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                    <div className="text-5xl sm:text-6xl transform group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </div>
                    <div
                      className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : project.status === "In Progress"
                          ? "bg-blue-100 text-blue-800 border border-blue-200"
                          : "bg-orange-100 text-orange-800 border border-orange-200"
                      }`}
                    >
                      {project.status}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 group-hover:text-black transition-colors duration-300">
                        {project.name}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">Client: {project.client}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-1 sm:px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-r from-black to-gray-800 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-black/20 group-hover:border-black/40 transition-colors duration-300"></div>
                  <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-black/20 group-hover:border-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-black/20 group-hover:border-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-black/20 group-hover:border-black/40 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 px-4 sm:px-0">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              READY TO START YOUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">PROJECT</span>?
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to build something extraordinary. Your vision, our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl group overflow-hidden">
                <span className="relative z-10">START A PROJECT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="relative bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg border border-black/20 transform hover:scale-105 transition-all duration-300 shadow-lg group overflow-hidden">
                <span className="relative z-10">VIEW CASE STUDIES</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 left-10 w-3 h-3 bg-black/10 rounded-full animate-pulse"></div>
      <div className="fixed top-40 right-10 w-2 h-2 bg-black/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        @keyframes binary {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-binary { animation: binary 20s linear infinite; }
      `}</style>
    </div>
  );
}
