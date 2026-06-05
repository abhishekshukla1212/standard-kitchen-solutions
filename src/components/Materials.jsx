function Materials() {
  const materials = [
    {
      title: "Acrylic Finish",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200",
      desc: "Premium glossy finish with a modern luxury appearance.",
    },

    {
      title: "Laminate Finish",
      image:
        "https://images.unsplash.com/photo-1565538420870-da08ff96a207?w=1200",
      desc: "Durable and budget-friendly finish available in many textures.",
    },

    {
      title: "PU Finish",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      desc: "Luxury painted finish with a smooth and elegant look.",
    },

    {
      title: "Veneer Finish",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
      desc: "Natural wood appearance with a premium handcrafted feel.",
    },

    {
      title: "Membrane Finish",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200",
      desc: "Stylish and seamless finish ideal for contemporary kitchens.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Materials We Use
          </h2>

          <p className="mt-4 text-gray-400">
            Premium materials crafted for durability, elegance, and functionality.
          </p>

        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">

          {materials.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Materials;