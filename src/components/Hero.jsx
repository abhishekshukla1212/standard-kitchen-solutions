import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#0f172a]"
    >
      {/* Background Video Desktop */}
      <video
        src="/materials/Hero.webm"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Background Video Mobile */}
      <video
        src="/materials/Hero-mobile.webm"
        className="md:hidden absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full max-w-7xl mx-auto px-6 pt-32 pb-12">
        
        {/* Top/Middle Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-auto mb-16"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-blue-100 mb-6 shadow-sm">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
            </svg>
            Powering Next-Gen Kitchen Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.1] text-white max-w-4xl mb-10 drop-shadow-lg">
            Built for homes.<br />
            <span className="text-gray-200">Trusted by families.</span>
          </h1>

          {/* Button row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* Action Button */}
            <a href="#services" className="group inline-flex items-center gap-4 bg-white text-black pl-6 pr-2 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Book a Service
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Bottom Paragraph */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mt-auto"
        >
          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium drop-shadow-md">
            Delivering dependable kitchen and interior solutions that protect your space, enhance functionality, and drive modern elegance across every corner of your home.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;