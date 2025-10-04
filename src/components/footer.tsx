import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp, 
  faInstagram,  
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-14 px-6 relative overflow-hidden">
      {/* Gradient Glow Background */}
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="space-y-5">
            <h3 className="text-3xl font-extrabold tracking-wide text-white">JOZU</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Creative partner for every IT project.  
              Transforming your ideas into digital solutions.
            </p>
            <div className="flex space-x-5 mt-6">
              <a 
                href="http://wa.me/62881022731545" 
                aria-label="Whatsapp" 
                className="hover:text-green-400 transition transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/jozu.it?utm_source=ig_web_button_share_sheet&igsh=MTg5eTV2M3l6aGJkYg==" 
                aria-label="Instagram" 
                className="hover:text-pink-500 transition transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a 
                href="mailto:jozudesain@gmail.com" 
                aria-label="Email" 
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© 2025 Jozu IT Solution. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
