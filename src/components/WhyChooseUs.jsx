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
      icon: <FaAward size={40} />,
      title: "Premium Quality",
      desc: "High-quality materials and finishes for long-lasting interiors.",
    },
    {
      icon: <FaTools size={40} />,
      title: "Expert Installation",
      desc: "Professional installation by experienced technicians.",
    },
    {
      icon: <FaClock size={40} />,
      title: "On-Time Delivery",
      desc: "Projects completed within committed timelines.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "Customer Support",
      desc: "Dedicated support before and after project completion.",
    },
  ];

  return (
    <>
      <style>{animationStyles}</style>
      <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black">
            Why Choose Us
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted solutions for modular kitchens and interiors.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none py-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition flex-shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="flex justify-center mb-4 text-black">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
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