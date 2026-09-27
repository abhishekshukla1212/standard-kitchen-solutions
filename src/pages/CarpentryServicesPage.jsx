import { FaKitchenSet, FaCouch, FaHammer } from "react-icons/fa6";
import { FaDraftingCompass, FaTools, FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LazyVideo from "../components/LazyVideo";

function CarpentryServicesPage({ onBack, onOpenAbout, onOpenContact, onOpenKitchen }) {
  const carpentryServices = [
    {
      icon: <FaKitchenSet size={40} />,
      image: "/materials/Modular Kitchens.webp",
      title: "Modular Kitchens",
      description: "Elegant and functional custom modular kitchen designing, installation, and modification.",
    },
    {
      icon: <FaCouch size={40} />,
      image: "/materials/Custom Wardrobes.webp",
      title: "Custom Wardrobes",
      description: "Premium bespoke wardrobe and cabinet making tailored for your bedrooms and living spaces.",
    },
    {
      icon: <FaHammer size={40} />,
      image: "/materials/TV Units & Panels-min.webp",
      title: "TV Units & Panels",
      description: "Modern wall paneling and custom TV unit designs to elevate your living room aesthetics.",
    },
    {
      icon: <FaHammer size={40} />,
      image: "/materials/Doors & Windows.webp",
      title: "Doors & Windows",
      description: "Expert crafting, repairing, and polishing of wooden doors, window frames, and architraves.",
    },
    {
      icon: <FaCouch size={40} />,
      image: "/materials/Furniture Polish.webp",
      title: "Furniture Polish",
      description: "High-quality PU, melamine, and duco polishing to restore the shine and life of old furniture.",
    },
    {
      icon: <FaHammer size={40} />,
      image: "/materials/General Carpentry-min.webp",
      title: "General Carpentry",
      description: "Expert furniture repair, hinge fixing, custom woodwork, and minor carpentry alterations.",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col font-sans">
      <Navbar 
        onOpenAbout={onOpenAbout} 
        onOpenContact={onOpenContact} 
        onOpenKitchen={onOpenKitchen} 
        onOpenCarpentry={() => {}}
        onGoHome={onBack}
        isContactPage={true} // Keeps navbar text white
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-16 lg:px-24 text-left">
        <video
          src="/materials/Carpentry service.webm"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-3xl pt-20">
          <p className="uppercase tracking-[4px] text-[#F3E5AB] mb-4 font-bold text-sm">
            Bespoke Woodwork
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
            Carpentry & Interiors
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-8 font-medium">
            Premium bespoke carpentry, from modular kitchens to custom wardrobes, crafted to perfection. We turn your vision into beautiful, functional spaces.
          </p>
          <button 
            onClick={onOpenContact}
            className="bg-olive hover:bg-olive/90 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm transition shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darktext mb-4">Our Expertise</h2>
            <div className="h-1 w-24 bg-olive mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carpentryServices.map((service, index) => (
              <div
                key={index}
                className="relative h-[400px] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent opacity-90 transition-opacity duration-500"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed drop-shadow-sm font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-20 px-6 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <img src="/materials/Modular Kitchens.webp" alt="Carpentry Design" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-[#4A2E1B] mb-6">Our Custom Woodwork Process</h2>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              Every piece of furniture we build is a testament to quality craftsmanship. Our structured process ensures that your ideas are translated into stunning reality, on time and within budget.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-olive/10 p-3 rounded-full text-olive">
                  <FaDraftingCompass size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-1">1. Design & Consultation</h4>
                  <p className="text-zinc-600">We discuss your requirements, measure your space, and provide detailed 3D layouts and material options.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-olive/10 p-3 rounded-full text-olive">
                  <FaTools size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-1">2. Precision Manufacturing</h4>
                  <p className="text-zinc-600">Using premium plywood, laminates, and hardware, our master carpenters begin crafting your pieces.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-olive/10 p-3 rounded-full text-olive">
                  <FaCheck size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-1">3. Flawless Installation</h4>
                  <p className="text-zinc-600">Our team installs the finished product at your home with minimal disruption and perfect alignment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenAbout={onOpenAbout} onOpenContact={onOpenContact} />
    </div>
  );
}

export default CarpentryServicesPage;
