function Testimonials() {

  const testimonials = [
    {
      name: "Rahul Sharma",
      review:
        "Amazing modular kitchen design and excellent finishing quality. Highly recommended!",
    },

    {
      name: "Priya Mehta",
      review:
        "Professional team with modern design ideas. They completely transformed our space.",
    },

    {
      name: "Amit Verma",
      review:
        "Luxury interiors with smart functionality. Great experience from start to finish.",
    },
  ];

  return (
    <section className="bg-gray-100 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-black">
            What Clients Say
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Trusted by homeowners for premium kitchen and interior solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
            >

              <p className="text-gray-600 text-lg leading-relaxed">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-semibold text-black">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  Happy Client
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;