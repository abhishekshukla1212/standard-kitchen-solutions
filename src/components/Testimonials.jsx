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

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

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
    <>
      <style>{animationStyles}</style>
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

        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-4 snap-x snap-mandatory md:snap-none">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 flex-shrink-0 md:flex-shrink snap-center md:snap-align-none"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`,
                minWidth: "calc(100% - 1rem)",
              }}
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
    </>
  );
}

export default Testimonials;