import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LazyVideo from "../components/LazyVideo";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function ContactPage({ onBack, onOpenAbout, onOpenKitchen, onOpenCarpentry }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceType: "Modular Kitchen",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! We'll get back to you soon.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          serviceType: "Modular Kitchen",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F8F9FA] min-h-screen font-sans text-darktext selection:bg-olive/30 overflow-x-hidden">
      <Navbar 
        onGoHome={onBack} 
        onOpenAbout={onOpenAbout} 
        onOpenKitchen={onOpenKitchen} 
        onOpenCarpentry={onOpenCarpentry} 
        isContactPage={true} 
      />

      {/* Hero Header */}
      <section className="relative h-screen w-full overflow-hidden bg-darktext flex flex-col justify-center px-6 md:px-16 lg:px-24 text-left">
        {/* Background Video */}
        <video
          src="/materials/Contact_Hero.webm"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[4px] text-olive mb-4 font-bold text-sm drop-shadow-md">
            We're Here For You
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-ivory drop-shadow-lg">
            Let's Build Your Dream Space
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl drop-shadow-md">
            Whether you have a question about our services, pricing, or want to start a new project, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Main Content: Split Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* Left Side: Contact Info */}
        <div className="lg:col-span-2 space-y-12 pr-0 lg:pr-8">
          <div>
            <h2 className="text-3xl font-bold text-[#4A2E1B] mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="bg-white p-4 rounded-full shadow-sm text-olive h-fit border border-zinc-100">
                  <FaMapMarkerAlt size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-zinc-900 mb-1">Our Location</h4>
                  <p className="text-zinc-600 leading-relaxed">
                    Kandivali West<br />
                    Mumbai, Maharashtra<br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="bg-white p-4 rounded-full shadow-sm text-olive h-fit border border-zinc-100">
                  <FaPhoneAlt size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-zinc-900 mb-1">Phone Number</h4>
                  <p className="text-zinc-600">+91 98765 43210</p>
                  <p className="text-zinc-500 text-sm mt-1">Mon-Sat, 9am to 7pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="bg-white p-4 rounded-full shadow-sm text-olive h-fit border border-zinc-100">
                  <FaEnvelope size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-zinc-900 mb-1">Email Address</h4>
                  <p className="text-zinc-600">info@standardkitchensolutions.com</p>
                  <p className="text-zinc-500 text-sm mt-1">Drop us a line anytime!</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-zinc-200" />

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg text-zinc-900 mb-5">Follow Our Work</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-zinc-700 p-4 rounded-full shadow-sm hover:shadow-md hover:text-olive transition border border-zinc-100">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="bg-white text-zinc-700 p-4 rounded-full shadow-sm hover:shadow-md hover:text-olive transition border border-zinc-100">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-white text-zinc-700 p-4 rounded-full shadow-sm hover:shadow-md hover:text-[#25D366] transition border border-zinc-100">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">Send us a Message</h3>
            <p className="text-zinc-500 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-zinc-700 mb-2">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl border border-zinc-200 bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/50 transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-zinc-700 mb-2">Mobile Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl border border-zinc-200 bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/50 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-zinc-700 mb-2">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl border border-zinc-200 bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/50 transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-sm font-bold text-zinc-700 mb-2">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="Mumbai"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl border border-zinc-200 bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/50 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-bold text-zinc-700 mb-2">Service Required</label>
                <select 
                  id="serviceType"
                  name="serviceType" 
                  value={formData.serviceType} 
                  onChange={handleInputChange} 
                  className="w-full p-4 rounded-xl border border-zinc-200 bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/50 transition appearance-none cursor-pointer"
                >
                  <option value="Modular Kitchen">Modular Kitchen</option>
                  <option value="Wardrobe">Wardrobe</option>
                  <option value="Office Interior">Office Interior</option>
                  <option value="Hotel Interior">Hotel Interior</option>
                  <option value="Hospital Interior">Hospital Interior</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-zinc-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project or requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl border border-zinc-200 bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/50 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-olive text-white px-8 py-4 rounded-xl w-full hover:bg-olive/90 font-bold text-lg shadow-lg hover:shadow-xl transition disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>

      </section>

      <Footer onHomeClick={onBack} onOpenAbout={onOpenAbout} />
    </main>
  );
}

export default ContactPage;
