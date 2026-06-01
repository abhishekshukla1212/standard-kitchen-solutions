import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Company */}
        <div>

          <h2 className="text-3xl font-bold">
            Standard Kitchen Solurtions
          </h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Premium modular kitchens and luxury interior solutions crafted for modern living.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer">
              <a href="#home">Home</a>
            </li>

            <li className="hover:text-white cursor-pointer">
              <a href="#about">About</a>
            </li>

            <li className="hover:text-white cursor-pointer">
              <a href="#services">Services</a>
            </li>

            <li className="hover:text-white cursor-pointer">
              <a href="#projects">Projects</a>
            </li>

          </ul>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Modular Kitchens</li>
            <li>Interior Design</li>
            <li>Custom Renovation</li>
            <li>Storage Solutions</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Contact
          </h3>

          <p className="text-gray-400">
            Mumbai, India
          </p>

          <p className="text-gray-400 mt-3 break-words">
            info@standardkitchensolutions.com
          </p>

          <p className="text-gray-400 mt-3">
            +91 98765 43210
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>

            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaInstagram />
            </div>

            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaWhatsapp />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
        © 2026 Standard Kitchen Solutions. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;