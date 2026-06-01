import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
      title: "Luxury Modular Kitchen",
      area: "120 sq ft",
      material: "Acrylic Finish",
      duration: "14 Days",
      description:
        "Modern modular kitchen with premium acrylic finish and soft-close cabinets.",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      title: "Modern Interior Design",
      area: "250 sq ft",
      material: "Laminate Finish",
      duration: "21 Days",
      description:
        "Elegant interior solution with customized storage and lighting.",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200",
      title: "Premium Smart Kitchen",
      area: "180 sq ft",
      material: "PU Finish",
      duration: "18 Days",
      description:
        "Luxury kitchen with smart storage systems and modern aesthetics.",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Our Projects</h2>

          <p className="mt-4 text-gray-400 text-lg">
            Explore our premium kitchen and interior transformations.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl">

              {/* Close Icon */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg z-10 hover:scale-110 transition"
              >
                <FaTimes />
              </button>

              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />

              {/* Content */}
              <div className="p-8">
                <h2 className="text-4xl font-bold text-black mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Details */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">

                  <div className="bg-gray-100 p-4 rounded-xl">
                    <h4 className="font-semibold text-black">
                      Area
                    </h4>

                    <p className="text-gray-600">
                      {selectedProject.area}
                    </p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl">
                    <h4 className="font-semibold text-black">
                      Material
                    </h4>

                    <p className="text-gray-600">
                      {selectedProject.material}
                    </p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl">
                    <h4 className="font-semibold text-black">
                      Duration
                    </h4>

                    <p className="text-gray-600">
                      {selectedProject.duration}
                    </p>
                  </div>

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                    Request Quote
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                  >
                    Close
                  </button>

                </div>

              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;