import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

import {
  FiPhoneCall,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              <span className="text-red-600">NOOR</span> FACILITIES
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Professional Facility Management Company providing
              Housekeeping, Office Boy, Pantry Boy, Cleaning,
              Maintenance and Marble Polishing Services.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="#home" className="hover:text-red-500">Home</a></li>

              <li><a href="#about" className="hover:text-red-500">About</a></li>

              <li><a href="#services" className="hover:text-red-500">Services</a></li>

              <li><a href="#contact" className="hover:text-red-500">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Housekeeping</li>

              <li>Office Boy</li>

              <li>Pantry Boy</li>

              <li>Vacuum Cleaning</li>

              <li>Carpet Shampoo Cleaning</li>

              <li>Sofa Repair</li>

              <li>Marble Polishing</li>

              <li>General Maintenance</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-center gap-3">
                <FiPhoneCall className="text-red-500 text-xl" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-red-500 text-xl" />
                <span>info@noorfacilities.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MdLocationOn className="text-red-500 text-2xl mt-1" />
                <span>
                  Your Office Address Here
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © 2026 Noor Facilities. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Designed by Noor Facilities
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;