import React from "react";

function Materials() {
  const carpentryMaterials = [
    {
      title: "Marine Plywood",
      image: "/materials/Premium Marine Plywood (BWP 710 Grade).webp",
      desc: "Premium BWP 710 grade waterproof plywood for high durability.",
    },
    {
      title: "Acrylic Sheet",
      image: "/materials/High-Gloss Acrylic Sheet.webp",
      desc: "High-gloss luxurious finish for modern and sleek kitchen aesthetics.",
    },
    {
      title: "Teak Wood Veneer",
      image: "/materials/Luxury Teak Wood Veneer.webp",
      desc: "Natural wood appearance with premium handcrafted texture.",
    },
    {
      title: "PU Coated Board",
      image: "/materials/PU (Polyurethane) Coated Board.webp",
      desc: "Smooth and elegant polyurethane coated boards for a flawless look.",
    },
    {
      title: "Quartz Stone",
      image: "/materials/Quartz Stone (Kitchen Countertop Material).webp",
      desc: "Premium white quartz countertops with subtle golden veins.",
    },
    {
      title: "Soft-Close Hinge",
      image: "/materials/Soft-Close Cabinet Hinge.webp",
      desc: "High-quality stainless steel hinges for silent and smooth closing.",
    },
  ];

  const gasMaterials = [
    {
      title: "Pure Brass Burner",
      image: "/materials/Pure Brass Gas Burner.webp",
      desc: "Heavy-duty pure brass burners for optimal heat and longevity.",
    },
    {
      title: "Toughened Glass",
      image: "/materials/Toughened Glass Panel.webp",
      desc: "Heat-resistant toughened glass panels for sleek and safe hobs.",
    },
    {
      title: "Cast Iron Support",
      image: "/materials/Heavy-Duty Cast Iron Pan Support.webp",
      desc: "Rugged and heavy cast iron supports for maximum stability.",
    },
    {
      title: "SS Gas Pipeline",
      image: "/materials/Stainless Steel Gas Pipeline.webp",
      desc: "Flexible and secure corrugated stainless steel gas pipelines.",
    },
    {
      title: "Copper Gas Valve",
      image: "/materials/Copper Gas Valve.webp",
      desc: "Premium copper valves ensuring maximum safety and control.",
    },
    {
      title: "Gas Mixing Tube",
      image: "/materials/Gas Mixing Tube.webp",
      desc: "Precision-engineered aluminum tubes for perfect gas mixing.",
    },
  ];

  const MaterialCard = ({ item }) => (
    <div className="group flex flex-col items-center justify-center text-center hover:-translate-y-2 transition duration-300">
      <div className="relative h-40 w-40 sm:h-48 sm:w-48 mb-4 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out drop-shadow-xl"
        />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-ivory drop-shadow-md">
        {item.title}
      </h3>
    </div>
  );

  return (
    <section className="pt-[40px] pb-24 px-6 bg-[#2B1B12] text-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold drop-shadow-lg text-[#F3E5AB]">
            Materials We Use
          </h2>
          <p className="mt-4 text-[#D7C0A2] text-lg">
            Premium quality materials for long-lasting durability and perfection.
          </p>
        </div>

        {/* Carpentry Materials */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
            {carpentryMaterials.map((item, index) => (
              <MaterialCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Gas Materials */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
            {gasMaterials.map((item, index) => (
              <MaterialCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Materials;
