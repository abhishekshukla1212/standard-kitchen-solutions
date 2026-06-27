function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
            alt="About Kitchen"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div>

          <p className="text-gray-500 uppercase tracking-widest mb-4">
            About Us
          </p>

          <h2 className="text-5xl font-bold text-black leading-tight">
            Creating Elegant Spaces With Modern Kitchen Design
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We specialize in premium modular kitchens and interior solutions
            crafted with innovation, elegance, and functionality.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Our mission is to transform everyday spaces into luxurious and
            practical environments tailored to modern lifestyles.
          </p>

          <button className="mt-8 bg-black text-white px-7 py-4 rounded-xl font-semibold hover:bg-gray-800 transition">
            Learn More
          </button>

        </div>
        
         {/* Left Content */}
        
         
      </div>

    </section>
  );
}

export default About;