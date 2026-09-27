import { useState } from "react";
import {
  FaHome,
  FaPencilRuler,
  FaCogs,
  FaTools,
  FaCheckCircle,
  FaPhoneAlt,
  FaSearch,
  FaWrench,
  FaShieldAlt,
  FaSmile
} from "react-icons/fa";

function Process() {
  const [activeTab, setActiveTab] = useState("kitchen");

  const kitchenSteps = [
    {
      icon: <FaHome size={16} />,
      title: "Site Visit",
      desc: "We visit your location and understand your requirements.",
      image: "/materials/Site Visit.webp",
    },
    {
      icon: <FaPencilRuler size={16} />,
      title: "3D Design",
      desc: "Our designers create detailed 3D concepts.",
      image: "/materials/3D Design-min.webp",
    },
    {
      icon: <FaCogs size={16} />,
      title: "Manufacturing",
      desc: "Precision manufacturing using premium materials.",
      image: "/materials/Manufacturing-min.webp",
    },
    {
      icon: <FaTools size={16} />,
      title: "Installation",
      desc: "Professional installation by experienced experts.",
      image: "/materials/Installation.webp",
    },
    {
      icon: <FaCheckCircle size={16} />,
      title: "Handover",
      desc: "Final quality check and project delivery.",
      image: "/materials/Handover.webp",
    },
  ];

  const gasSteps = [
    {
      icon: <FaPhoneAlt size={16} />,
      title: "Quick Booking",
      desc: "Schedule a service call online or via phone instantly.",
      image: "/materials/Quick Booking.webp",
    },
    {
      icon: <FaSearch size={16} />,
      title: "Inspection",
      desc: "Expert diagnosis of the hob or chimney issue on-site.",
      image: "/materials/Inspection-min.webp",
    },
    {
      icon: <FaWrench size={16} />,
      title: "Fast Repair",
      desc: "Prompt servicing using genuine replacement parts.",
      image: "/materials/Fast Repair-min.webp",
    },
    {
      icon: <FaShieldAlt size={16} />,
      title: "Safety Check",
      desc: "Rigorous testing for gas leaks and operational safety.",
      image: "/materials/Safety Check-min.webp",
    },
    {
      icon: <FaSmile size={16} />,
      title: "Handover",
      desc: "Service completion with post-repair guarantee.",
      image: "/materials/Handover (2).webp",
    },
  ];

  const currentSteps = activeTab === "kitchen" ? kitchenSteps : gasSteps;

  return (
    <section className="bg-ivory pt-[25px] pb-0 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-5xl font-bold text-darktext">
            Our Process
          </h2>
          <p className="mt-1 text-olive">
            Tailored workflows for flawless execution.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] mb-10">
          <button
            onClick={() => setActiveTab("kitchen")}
            className={`w-48 py-3 rounded-full font-bold tracking-widest uppercase transition-all duration-300 ${
              activeTab === "kitchen"
                ? "bg-darktext text-ivory shadow-xl"
                : "bg-transparent border border-darktext text-darktext hover:bg-darktext/10"
            }`}
          >
            Kitchen
          </button>
          <button
            onClick={() => setActiveTab("gas")}
            className={`w-48 py-3 rounded-full font-bold tracking-widest uppercase transition-all duration-300 ${
              activeTab === "gas"
                ? "bg-darktext text-ivory shadow-xl"
                : "bg-transparent border border-darktext text-darktext hover:bg-darktext/10"
            }`}
          >
            Gas & Repair
          </button>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {currentSteps.map((step, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="relative group rounded-3xl overflow-hidden shadow-xl aspect-[3/4] hover:-translate-y-2 transition-transform duration-500 animate-[fadeIn_0.5s_ease-out_forwards] opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={step.image}
                alt={step.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-xl text-white">
                    {step.title}
                  </h3>
                  <div className="text-white opacity-90">
                    {step.icon}
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs font-medium mb-4 line-clamp-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;