import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenRuler, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Complete() {
  const services = [
    { title: "UI/UX Design", description: "Kami membantu menyempurnakan desain produk digitalmu" },
    { title: "Web Development", description: "Bangun website yang cepat, aman, dan responsif" },
    { title: "Mobile App", description: "Aplikasi mobile berkualitas untuk bisnis Anda" },
    { title: "Branding", description: "Membangun identitas merek yang kuat" },
    { title: "Digital Marketing", description: "Tingkatkan penjualan dengan strategi digital" },
    { title: "Content Creation", description: "Konten menarik untuk audiens Anda" },
    { title: "SEO", description: "Tingkatkan visibilitas di mesin pencari" },
    { title: "Data Analysis", description: "Analisis data untuk pengambilan keputusan" }
  ];

  return (
    <div className="bg-black text-white px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-8">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight md:w-1/2 lg:text-4xl">
            Complete Solutions <br className="hidden md:block" /> for Your Digital Needs
          </h1>
          <p className="text-gray-300 md:w-sm text-md leading-relaxed">
            We provide a wide range of technology and digital design services,
            including UI/UX design, web development, and more.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-6 text-3xl text-black group-hover:text-gray-600 transition-colors">
                <FontAwesomeIcon icon={faPenRuler} width={25} />
              </div>
              <h2 className="text-xl font-bold text-center mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg"
          >
            See More
            <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}