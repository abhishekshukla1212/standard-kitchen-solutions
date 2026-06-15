import { FaKitchenSet, FaCouch, FaPaintRoller } from "react-icons/fa6";

function Services() {
  const services = [
    {
      icon: <FaKitchenSet size={40} />,
      title: "Modular Kitchens",
      description:
        "Elegant and functional modular kitchen solutions designed for modern homes.",
    },

    {
      icon: <FaCouch size={40} />,
      title: "Interior Design",
      description:
        "Premium interiors crafted with luxury aesthetics and smart space planning.",
    },

    {
      icon: <FaPaintRoller size={40} />,
      title: "Custom Renovation",
      description:
        "Transform your living spaces with high-quality renovation and finishing.",
    },

    {
      icon: <FaPaintRoller size={40} />,
      title: "Custom Renovation",
      description:
        "Transform your living spaces with high-quality renovation and finishing.",
    },

    {
      icon: <FaKitchenSet size={40} />,
      title: "Modular Kitchens",
      description:
        "Elegant and functional modular kitchen solutions designed for modern homes.",
    },

     {
      icon: <FaCouch size={40} />,
      title: "Interior Design",
      description:
        "Premium interiors crafted with luxury aesthetics and smart space planning.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-black">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Premium kitchen and interior solutions crafted with modern elegance.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              className="service-card bg-gray-100 p-10 rounded-3xl hover:shadow-2xl transition duration-300"
            >

              <div className="text-black mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;