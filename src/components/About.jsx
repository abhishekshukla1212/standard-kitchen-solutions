import { useState } from "react";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

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

          <button
            type="button"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            aria-expanded={isExpanded}
            className="mt-8 bg-black text-white px-7 py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </button>

          {isExpanded && (
            <div className="mt-8 border-t border-gray-200 pt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-black">Designed Around You</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Every project begins with your routine, taste, and available space. We create a practical layout first, then refine it with finishes that feel personal.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-black">Thoughtful Planning</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    From storage and lighting to work zones and appliances, every detail is planned for everyday comfort.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Built To Last</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    We select durable materials, reliable hardware, and quality finishes that keep your kitchen beautiful for years.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Our team manages the process from the first consultation through installation, keeping communication clear and the final result true to your vision.
              </p>
            </div>
          )}

        </div>
        
         {/* Left Content */}
        
         
      </div>

    </section>
  );
}

export default About;