import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer({ onOpenAbout, onHomeClick, onOpenContact }) {
  return (
    <footer 
      className="bg-[#F4F5F7] text-[#1E293B] pt-20 pb-8 px-6 lg:px-12 relative"
      style={{
        backgroundImage: "url('/materials/Footer_Image.webp')",
        backgroundPosition: "bottom center",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        minHeight: "700px" // To ensure the landscape is visible
      }}
    >
      {/* Overlay to make text readable against the detailed background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-40 relative z-10">

        {/* Company Info */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-serif font-bold text-[#0F172A] mb-4 flex items-center gap-2">
            Standard Kitchens
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed mb-6">
            Designing interior experiences that inspire, engage, and create a lasting impact.
          </p>
          <ul className="space-y-4 text-sm text-[#334155]">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#0F172A]" /> info@standardkitchens.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#0F172A]" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#0F172A]" /> Mumbai, India
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-[#0F172A] mb-6 uppercase">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-[#475569]">
            <li><a href="#services" className="hover:text-[#0F172A] transition">Modular Kitchens</a></li>
            <li><a href="#services" className="hover:text-[#0F172A] transition">Wardrobes</a></li>
            <li><a href="#services" className="hover:text-[#0F172A] transition">Living Room Decor</a></li>
            <li><a href="#services" className="hover:text-[#0F172A] transition">Office Interiors</a></li>
            <li><a href="#services" className="hover:text-[#0F172A] transition">Bespoke Furniture</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-[#0F172A] mb-6 uppercase">
            About Us
          </h3>
          <ul className="space-y-3 text-sm text-[#475569]">
            <li>
              <button onClick={onOpenAbout} className="hover:text-[#0F172A] transition">Our Story</button>
            </li>
            <li><a href="#" className="hover:text-[#0F172A] transition">Craftsmanship</a></li>
            <li><a href="#" className="hover:text-[#0F172A] transition">Sustainability</a></li>
            <li><a href="#" className="hover:text-[#0F172A] transition">Careers</a></li>
            <li><a href="#" className="hover:text-[#0F172A] transition">Press & Media</a></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-[#0F172A] mb-6 uppercase">
            Help & Support
          </h3>
          <ul className="space-y-3 text-sm text-[#475569]">
            <li><a href="#" className="hover:text-[#0F172A] transition">FAQs</a></li>
            <li><a href="#" className="hover:text-[#0F172A] transition">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-[#0F172A] transition">Track Your Project</a></li>
            <li>
              {onOpenContact ? (
                <button onClick={onOpenContact} className="hover:text-[#0F172A] transition">Contact Us</button>
              ) : (
                <a href="#contact" className="hover:text-[#0F172A] transition">Contact Us</a>
              )}
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-bold tracking-wider text-[#0F172A] mb-6 uppercase">
            Newsletter
          </h3>
          <p className="text-sm text-[#475569] mb-4">
            Subscribe to get updates on new designs, stories & exclusive offers.
          </p>
          <div className="flex w-full mt-2 border border-gray-300 rounded-sm overflow-hidden shadow-sm">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 text-sm outline-none bg-white text-[#1E293B]"
            />
            <button className="bg-[#0F172A] text-white px-4 py-2 hover:bg-[#1e293b] transition flex items-center justify-center">
              →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 text-xs text-[#475569] pt-8">
        {/* Social Icons */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="#" className="text-[#64748B] hover:text-[#0F172A] transition"><FaFacebookF size={16} /></a>
          <a href="#" className="text-[#64748B] hover:text-[#0F172A] transition"><FaTwitter size={16} /></a>
          <a href="#" className="text-[#64748B] hover:text-[#0F172A] transition"><FaInstagram size={16} /></a>
          <a href="#" className="text-[#64748B] hover:text-[#0F172A] transition"><FaLinkedinIn size={16} /></a>
        </div>
        
        {/* Policies */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#0F172A] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#0F172A] transition">Terms of Service</a>
          <a href="#" className="hover:text-[#0F172A] transition">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;