import {
  FaAward,
  FaTools,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

const animationStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function WhyChooseUs() {
  const features = [
    {
      icon: <FaAward size={36} />,
      title: "Premium Quality",
      desc: "High-quality materials and finishes for long-lasting interiors.",
    },
    {
      icon: <FaTools size={36} />,
      title: "Expert Installation",
      desc: "Professional installation by experienced technicians.",
    },
    {
      icon: <FaClock size={36} />,
      title: "On-Time Delivery",
      desc: "Projects completed within committed timelines.",
    },
    {
      icon: <FaHeadset size={36} />,
      title: "24/7 Support",
      desc: "Dedicated support before and after project completion.",
    },
  ];

  return (
    <>
      <style>{animationStyles}</style>
      <section 
        className="pt-[50px] pb-24 px-6 relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/materials/Why%20choose%20us.webp")' }}
      >
        {/* Removed overlay to keep image 100% clear */}

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white tracking-tight">
              Why Choose Us
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              Trusted solutions for modular kitchens and interiors.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none py-4 px-2">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-[2rem] p-8 text-center hover:-translate-y-3 hover:bg-white/20 transition-all duration-300 flex-shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center group"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="flex justify-center mb-6 text-white">
                  <div className="p-4 bg-white/10 border border-white/20 rounded-2xl shadow-sm group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;