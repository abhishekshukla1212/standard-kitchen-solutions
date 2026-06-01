import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Hero() {
  const images = [
    "https://www.standardkitchensolutions.com/img/carousel-1.jpg",
    "https://www.standardkitchensolutions.com/img/carousel-2.jpg",
    "https://www.standardkitchensolutions.com/img/carousel-3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Slider */}
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt="Kitchen"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 text-white"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Standard Kitchen Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            Premium modular kitchens crafted with elegance, innovation, and
            functionality.
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Explore Projects
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;