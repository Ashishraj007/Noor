import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-red-600">
            NOOR <span className="text-blue-900">FACILITIES</span>
          </h1>
          <p className="text-xs text-gray-500">
            Facility Management Services
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-red-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-red-600 transition">
            About
          </a>
          <a href="#services" className="hover:text-red-600 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-red-600 transition">
            Contact
          </a>
        </nav>

        {/* Call Button */}
        <a
          href="tel:+919999999999"
          className="hidden md:flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </header>
  );
};

export default Navbar;