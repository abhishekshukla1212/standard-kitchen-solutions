import { useState } from "react";

function BeforeAfter() {
  const [slider, setSlider] = useState(50);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Before & After
          </h2>

          <p className="mt-4 text-gray-600">
            See how we transform ordinary spaces into modern masterpieces.
          </p>
        </div>

        <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl">

          {/* After Image */}
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200"
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Image */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${slider}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
              alt="Before"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-lg">
            Before
          </div>

          <div className="absolute top-6 right-6 bg-black text-white px-4 py-2 rounded-lg">
            After
          </div>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white"
            style={{ left: `${slider}%` }}
          />

          {/* Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(e) => setSlider(e.target.value)}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72"
          />

        </div>

      </div>
    </section>
  );
}

export default BeforeAfter;