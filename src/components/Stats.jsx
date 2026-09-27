import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "24/7", title: "Support" },
  ];

  return (
    <section className="bg-ivory pt-0 pb-24 px-6">
      <div className="max-w-7xl mx-auto flex justify-center">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-ivory rounded-3xl p-8 text-center shadow-lg"
            >
              <h2 className="text-4xl font-bold text-darktext">
                {stat.number}
              </h2>

              <p className="text-olive mt-3">
                {stat.title}
              </p>
            </motion.div>
          ))}

        </div>
    </section>
  );
}

export default Stats;