import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Standard Kitchen
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">

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

          <li>
            <a
              href="#services"
              className="hover:text-gray-300 transition"
            >
              Services
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
        <button className="hidden md:block bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
          Get Quote
        </button>

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
              className="hover:text-gray-300 transition"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              Services
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              Contact
            </a>

            <button className="bg-white text-black px-5 py-3 rounded-lg font-medium w-full hover:bg-gray-200 transition">
              Get Quote
            </button>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;