import {
  FaHome,
  FaPencilRuler,
  FaCogs,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
      icon: <FaHome size={30} />,
      title: "Site Visit",
      desc: "We visit your location and understand your requirements.",
    },

    {
      icon: <FaPencilRuler size={30} />,
      title: "3D Design",
      desc: "Our designers create detailed 3D concepts.",
    },

    {
      icon: <FaCogs size={30} />,
      title: "Manufacturing",
      desc: "Precision manufacturing using premium materials.",
    },

    {
      icon: <FaTools size={30} />,
      title: "Installation",
      desc: "Professional installation by experienced experts.",
    },

    {
      icon: <FaCheckCircle size={30} />,
      title: "Handover",
      desc: "Final quality check and project delivery.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-black">
            Our Process
          </h2>

          <p className="mt-4 text-gray-600">
            From concept to completion.
          </p>

        </div>

        <div className="grid md:grid-cols-5 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition"
            >
              <div className="mb-4 flex justify-center text-black">
                {step.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;