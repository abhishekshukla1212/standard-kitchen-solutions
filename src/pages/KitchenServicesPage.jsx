import { FaFire, FaWrench, FaShieldAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function KitchenServicesPage({ onBack, onOpenAbout, onOpenContact, onOpenCarpentry }) {
  const gasServices = [
    {
      icon: <FaFire size={40} />,
      image: "/materials/Gas Hob Repair.webp",
      title: "Gas Hob Repair",
      description: "Expert repair, servicing, and maintenance for all brands of built-in gas hobs.",
    },
    {
      icon: <FaFire size={40} />,
      image: "/materials/Gas Stove Repair.webp",
      title: "Gas Stove Repair",
      description: "Quick and reliable repair services to keep your standard gas stoves functioning safely.",
    },
    {
      icon: <FaWrench size={40} />,
      image: "/materials/Chimney Servicing.webp",
      title: "Chimney Servicing",
      description: "Deep cleaning, motor repair, and regular servicing of kitchen chimneys to ensure smoke-free cooking.",
    },
    {
      icon: <FaWrench size={40} />,
      image: "/materials/Microwave Repair.webp",
      title: "Microwave Repair",
      description: "Professional diagnosis and repair for solo, grill, and convection microwave ovens.",
    },
    {
      icon: <FaFire size={40} />,
      image: "/materials/Pipeline Installation.webp",
      title: "Pipeline Installation",
      description: "Safe and certified gas pipeline installation, leak detection, and valve replacement services.",
    },
    {
      icon: <FaWrench size={40} />,
      image: "/materials/Cooking Range.webp",
      title: "Cooking Range",
      description: "Complete maintenance and repair solutions for free-standing cooking ranges and ovens.",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col font-sans">
      <Navbar 
        onOpenAbout={onOpenAbout} 
        onOpenContact={onOpenContact} 
        onOpenKitchen={() => {}} 
        onOpenCarpentry={onOpenCarpentry}
        onGoHome={onBack}
        isContactPage={true} // Keeps navbar text white
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-16 lg:px-24 text-left">
        <video
          src="/materials/kitechen service.webm"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-3xl pt-20">
          <p className="uppercase tracking-[4px] text-olive mb-4 font-bold text-sm text-[#F3E5AB]">
            Expert Appliance Care
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
            Kitchen & Gas Services
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-8 font-medium">
            Professional repair, deep cleaning, and certified maintenance for your kitchen appliances. We ensure your kitchen runs safely and efficiently.
          </p>
          <button 
            onClick={onOpenContact}
            className="bg-olive hover:bg-olive/90 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm transition shadow-lg hover:shadow-xl"
          >
            Book a Service
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darktext mb-4">Our Specializations</h2>
            <div className="h-1 w-24 bg-olive mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gasServices.map((service, index) => (
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

      {/* Why Choose Us for Gas Services */}
      <section className="bg-white py-20 px-6 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#4A2E1B] mb-6">Why Trust Our Technical Experts?</h2>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              Working with gas appliances and complex electronics requires certified expertise. We prioritize your family's safety by using only original spare parts and standard diagnostic protocols.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-olive/10 p-3 rounded-full text-olive">
                  <FaShieldAlt size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-1">Safety First Approach</h4>
                  <p className="text-zinc-600">Thorough leak detection and safety audits after every gas-related repair.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-olive/10 p-3 rounded-full text-olive">
                  <FaClock size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-1">Same-Day Service</h4>
                  <p className="text-zinc-600">We understand kitchen breakdowns are emergencies. We offer rapid response times.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-olive/10 p-3 rounded-full text-olive">
                  <FaCheckCircle size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-1">Genuine Parts Guarantee</h4>
                  <p className="text-zinc-600">We source premium replacement parts directly from authorized distributors.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <img src="/materials/Pipeline Installation.webp" alt="Safety Check" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      <Footer onOpenAbout={onOpenAbout} onOpenContact={onOpenContact} />
    </div>
  );
}

export default KitchenServicesPage;
