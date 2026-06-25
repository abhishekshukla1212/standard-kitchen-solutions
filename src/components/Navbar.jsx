import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const services = [
    "Modular Kitchens",
    "Wardrobes",
    "TV Units",
    "Office Interiors",
    "Hotel Interiors",
    "Hospital Interiors",
    "False Ceiling",
    "Custom Furniture",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Standard Kitchen" className="h-14 w-auto" />
          <span className="text-2xl font-bold tracking-wide">
            Standard Kitchen
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-gray-300 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-gray-300 transition"
            >
              About
            </a>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-gray-300 transition">
              Services
              <FaChevronDown size={12} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white text-black rounded-xl shadow-2xl overflow-hidden">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#services"
                    className="block px-5 py-3 hover:bg-gray-100 transition"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <a
              href="#materials"
              className="hover:text-gray-300 transition"
            >
              Materials
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-gray-300 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-gray-300 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">

          <div className="flex flex-col px-6 py-6 space-y-5 text-lg">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            {/* Mobile Services */}
            <div>

              <button
                className="flex items-center justify-between w-full"
                onClick={() =>
                  setMobileServicesOpen(!mobileServicesOpen)
                }
              >
                Services
                <FaChevronDown
                  className={`transition ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="ml-4 mt-3 flex flex-col gap-3 text-base text-gray-300">

                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#services"
                      onClick={() => setMenuOpen(false)}
                    >
                      {service}
                    </a>
                  ))}

                </div>
              )}

            </div>

            <a
              href="#materials"
              onClick={() => setMenuOpen(false)}
            >
              Materials
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <a
              href="#contact"
              className="bg-white text-black px-5 py-3 rounded-lg font-medium text-center hover:bg-gray-200 transition"
            >
              Get Quote
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;