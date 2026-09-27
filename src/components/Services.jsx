import { useState } from "react";
import { FaKitchenSet, FaCouch, FaHammer, FaFire, FaWrench } from "react-icons/fa6";

function Services() {
  const [activeTab, setActiveTab] = useState("gas");

  const allServices = [
    // Gas Services
    {
      category: "gas",
      icon: <FaFire size={40} />,
      image: "/materials/Gas Hob Repair.webp",
      title: "Gas Hob Repair",
      description:
        "Expert repair, servicing, and maintenance for all brands of built-in gas hobs.",
    },
    {
      category: "gas",
      icon: <FaFire size={40} />,
      image: "/materials/Gas Stove Repair.webp",
      title: "Gas Stove Repair",
      description:
        "Quick and reliable repair services to keep your standard gas stoves functioning safely.",
    },
    {
      category: "gas",
      icon: <FaWrench size={40} />,
      image: "/materials/Chimney Servicing.webp",
      title: "Chimney Servicing",
      description:
        "Deep cleaning, motor repair, and regular servicing of kitchen chimneys to ensure smoke-free cooking.",
    },
    {
      category: "gas",
      icon: <FaWrench size={40} />,
      image: "/materials/Microwave Repair.webp",
      title: "Microwave Repair",
      description:
        "Professional diagnosis and repair for solo, grill, and convection microwave ovens.",
    },
    {
      category: "gas",
      icon: <FaFire size={40} />,
      image: "/materials/Pipeline Installation.webp",
      title: "Pipeline Installation",
      description:
        "Safe and certified gas pipeline installation, leak detection, and valve replacement services.",
    },
    {
      category: "gas",
      icon: <FaWrench size={40} />,
      image: "/materials/Cooking Range.webp",
      title: "Cooking Range",
      description:
        "Complete maintenance and repair solutions for free-standing cooking ranges and ovens.",
    },

    // Carpentry Services
    {
      category: "carpentry",
      icon: <FaKitchenSet size={40} />,
      image: "/materials/Modular Kitchens.webp",
      title: "Modular Kitchens",
      description:
        "Elegant and functional custom modular kitchen designing, installation, and modification.",
    },
    {
      category: "carpentry",
      icon: <FaCouch size={40} />,
      image: "/materials/Custom Wardrobes.webp",
      title: "Custom Wardrobes",
      description:
        "Premium bespoke wardrobe and cabinet making tailored for your bedrooms and living spaces.",
    },
    {
      category: "carpentry",
      icon: <FaHammer size={40} />,
      image: "/materials/TV Units & Panels-min.webp",
      title: "TV Units & Panels",
      description:
        "Modern wall paneling and custom TV unit designs to elevate your living room aesthetics.",
    },
    {
      category: "carpentry",
      icon: <FaHammer size={40} />,
      image: "/materials/Doors & Windows.webp",
      title: "Doors & Windows",
      description:
        "Expert crafting, repairing, and polishing of wooden doors, window frames, and architraves.",
    },
    {
      category: "carpentry",
      icon: <FaCouch size={40} />,
      image: "/materials/Furniture Polish.webp",
      title: "Furniture Polish",
      description:
        "High-quality PU, melamine, and duco polishing to restore the shine and life of old furniture.",
    },
    {
      category: "carpentry",
      icon: <FaHammer size={40} />,
      image: "/materials/General Carpentry-min.webp",
      title: "General Carpentry",
      description:
        "Expert furniture repair, hinge fixing, custom woodwork, and minor carpentry alterations.",
    },
  ];

  const filteredServices = allServices.filter((service) => service.category === activeTab);

  return (
    <section id="services" className="bg-champagne pt-[30px] pb-[20px] px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-[20px]">
          <h2 className="text-5xl font-bold text-darktext">Our Services</h2>
          <p className="mt-[20px] text-olive text-lg">
            Premium kitchen and interior solutions crafted with modern elegance.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] mb-[20px]">
          <button
            onClick={() => setActiveTab("gas")}
            className={`w-48 py-3 rounded-full font-bold tracking-widest uppercase transition-all duration-300 ${
              activeTab === "gas"
                ? "bg-darktext text-ivory shadow-lg scale-105"
                : "bg-transparent text-darktext border-2 border-darktext hover:bg-darktext/10"
            }`}
          >
            Gas
          </button>
          
          <button
            onClick={() => setActiveTab("carpentry")}
            className={`w-48 py-3 rounded-full font-bold tracking-widest uppercase transition-all duration-300 ${
              activeTab === "carpentry"
                ? "bg-darktext text-ivory shadow-lg scale-105"
                : "bg-transparent text-darktext border-2 border-darktext hover:bg-darktext/10"
            }`}
          >
            Carpentry
          </button>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            if (service.image) {
              return (
                <div
                  key={`${activeTab}-${index}`}
                  className="relative w-full sm:w-[280px] h-[360px] rounded-[1.5rem] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-[fadeIn_0.5s_ease-out_forwards] overflow-hidden group cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent opacity-90 transition-opacity duration-500"></div>

                  {/* Content (Bottom aligned) */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-xs mb-1 line-clamp-2 drop-shadow-sm font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            }

            // Fallback for services without images (e.g. Carpentry currently)
            return (
              <div
                key={`${activeTab}-${index}`}
                className="w-full sm:w-[280px] bg-ivory p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 animate-[fadeIn_0.5s_ease-out_forwards] flex flex-col h-[360px]"
                style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
              >
                <div className="text-darktext mb-4">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-[#4A2E1B]">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Inline styles for keyframes to ensure animation plays */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Services;