import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPenRuler, 
  faLaptopCode, 
  faDatabase, 
  faRobot,
  faPaintBrush,
  faGears,
  faServer,
  faChalkboardUser,
  faCube,
  faShapes
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: IconDefinition;
  color: string;
  features: string[];
}

export default function Services(): React.JSX.Element {
  const [activeService, setActiveService] = useState<number>(0);

  const services: Service[] = [
    { title: "UI/UX Design", description: "Menciptakan pengalaman pengguna yang intuitif dan antarmuka yang modern dengan pendekatan human-centered design.", icon: faPenRuler, color: "text-cyan-400", features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"] },
    { title: "Web & App Development", description: "Membangun aplikasi web dan mobile yang scalable, cepat, dan responsif dengan teknologi terbaru.", icon: faLaptopCode, color: "text-emerald-400", features: ["Frontend Development", "Backend Development", "Mobile Apps", "Progressive Web Apps"] },
    { title: "Data Solutions", description: "Mengubah data menjadi insight berharga melalui analisis mendalam dan visualisasi data.", icon: faDatabase, color: "text-blue-400", features: ["Data Analytics", "Business Intelligence", "Data Visualization", "Big Data"] },
    { title: "AI & Machine Learning", description: "Mengimplementasikan kecerdasan buatan untuk otomatisasi proses dan peningkatan efisiensi bisnis.", icon: faRobot, color: "text-purple-400", features: ["Machine Learning", "Computer Vision", "NLP", "Predictive Analytics"] },
    { title: "Design & Creative", description: "Solusi kreatif dari branding, ilustrasi, hingga motion design untuk memperkuat identitas visual.", icon: faPaintBrush, color: "text-pink-400", features: ["Brand Identity", "Illustration", "Motion Design", "Visual Design"] },
    { title: "Automation", description: "Mengotomatisasi workflow bisnis agar lebih produktif dan meminimalisir human error.", icon: faGears, color: "text-orange-400", features: ["Workflow Automation", "RPA", "Process Optimization", "Integration"] },
    { title: "Infrastructure", description: "Membangun infrastruktur IT yang aman, scalable, dan mendukung operasional bisnis.", icon: faServer, color: "text-gray-400", features: ["Cloud Infrastructure", "DevOps", "Security", "Networking"] },
    { title: "Mentoring & Training", description: "Program mentoring dan training untuk meningkatkan skill tim dan adopsi teknologi terbaru.", icon: faChalkboardUser, color: "text-yellow-400", features: ["Tech Mentoring", "Team Training", "Workshops", "Code Review"] }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 sm:px-8 lg:px-12 lg:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-700 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-900 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-700 mb-6">
            <FontAwesomeIcon icon={faCube} className="text-gray-300 w-4" />
            <span className="text-sm font-medium text-gray-300">Our Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Digital Excellence
            <br />
            <span className="text-white">Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            (klik salah satu service dibawah ini)
          </p>
        </motion.div>

        {/* Service Icons */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-items-center mb-9">
          {services.map((service, index) => (
            <motion.button
              key={index}
              aria-label={service.title}
              onClick={() => setActiveService(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-500 ${
                activeService === index
                  ? "border-gray-400 bg-gray-800 shadow-lg"
                  : "border-gray-700 bg-gray-900 hover:border-gray-500"
              } ${service.color}`}
            >
              <FontAwesomeIcon icon={service.icon} className="text-lg sm:text-xl" />
            </motion.button>
          ))}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-2xl"
          >
            <motion.div
              className="flex items-center gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center ${services[activeService].color} text-xl sm:text-2xl`}
              >
                <FontAwesomeIcon icon={services[activeService].icon} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">
                  {services[activeService].title}
                </h2>
                <span className="text-gray-300 text-sm font-medium">Active Service</span>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {services[activeService].description}
            </motion.p>

            <h4 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 text-white">
              <FontAwesomeIcon icon={faShapes} className="text-gray-300" />
              What We Deliver
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services[activeService].features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 border border-gray-700"
                >
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-200 text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
