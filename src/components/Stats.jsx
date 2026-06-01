import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "500+", title: "Projects Completed" },
    { number: "15+", title: "Years Experience" },
    { number: "98%", title: "Client Satisfaction" },
    { number: "24/7", title: "Support" },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg"
            >
              <h2 className="text-4xl font-bold text-black">
                {stat.number}
              </h2>

              <p className="text-gray-600 mt-3">
                {stat.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;