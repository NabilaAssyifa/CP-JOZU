"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      details: "jozudesain@gmail.com",
      action: "mailto:jozudesain@gmail.com"
    },
    {
      icon: faWhatsapp,
      title: "Whatsapp",
      details: "+62 881022731545",
      action: "http://wa.me/62881022731545"
    },
    
    {
      icon: faInstagram,
      title: "Instagram",
      details: "Jozu IT",
      action: "https://www.instagram.com/jozu.it?utm_source=ig_web_button_share_sheet&igsh=MTg5eTV2M3l6aGJkYg=="
    }
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-white flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full flex flex-col items-center text-center px-4 sm:px-6">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight leading-snug">
            Let&apos;s Start Your<br />
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to transform your digital presence? Reach out to us through any channel below. We&apos;re here to help you build something amazing.
          </p>
        </motion.div>
        {/* Contact Info Cards */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.action}
              target={item.action.startsWith('http') ? "_blank" : "_self"}
              rel={item.action.startsWith('http') ? "noopener noreferrer" : ""}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-6 py-4 min-w-[180px] sm:min-w-[220px] max-w-[260px] w-full sm:w-[260px] hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={item.icon} className="text-white text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-sm text-left">{item.title}</span>
                <span className="text-gray-900 font-medium text-base text-left">{item.details}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
