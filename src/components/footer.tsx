import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">JOZU</h3>
            <address className="not-italic text-gray-300">
              <p>Lorem Street No. 123</p>
              <p>Dolor City, Ipsum District</p>
              <p>Province of Sit Amei, 12345</p>
            </address>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">JOZU</h4>
            <nav className="space-y-2 text-gray-300">
              <Link href="/" className="block hover:text-white transition">Home</Link>
              <Link href="/services" className="block hover:text-white transition">Services</Link>
              <Link href="/portfolio" className="block hover:text-white transition">Portfolio</Link>
              <Link href="/about" className="block hover:text-white transition">About</Link>
              <Link href="/contact" className="block hover:text-white transition">Contact</Link>
            </nav>
          </div>

          {/* Help Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Bantuan</h4>
            <nav className="space-y-2 text-gray-300">
              <Link href="#" className="block hover:text-white transition">Syarat & Ketentuan Layanan</Link>
              <Link href="#" className="block hover:text-white transition">Kebijakan Privasi</Link>
              <Link href="#" className="block hover:text-white transition">Kebijakan Pengguna</Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>Copyright © 2025 Jozu IT Solution. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}