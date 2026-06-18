import { useState, useRef, useEffect } from "react";

function BeforeAfter() {
  const [slider, setSlider] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
      let pct = ((x - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      setSlider(Math.round(pct));
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, []);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Before & After</h2>

          <p className="mt-4 text-gray-600">
            See how we transform ordinary spaces into modern masterpieces.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl"
        >
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
            role="presentation"
            className="absolute top-0 bottom-0 w-1 bg-white"
            style={{ left: `${slider}%` }}
          />

          {/* Draggable Handle */}
          <div
            role="slider"
            tabIndex={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(slider)}
            aria-label="Before / After slider"
            onPointerDown={(e) => {
              isDragging.current = true;
              e.currentTarget.setPointerCapture?.(e.pointerId);
            }}
            onPointerUp={(e) => {
              isDragging.current = false;
              e.currentTarget.releasePointerCapture?.(e.pointerId);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setSlider((s) => Math.max(0, Number(s) - 5));
              if (e.key === "ArrowRight") setSlider((s) => Math.min(100, Number(s) + 5));
            }}
            className="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab"
            style={{ left: `${slider}%` }}
          >
            <div className="w-1.5 h-5 bg-gray-800 rounded" />
          </div>

          {/* Fallback range input for accessibility */}
          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72"
            aria-label="Before / After percentage"
          />
        </div>

      </div>
    </section>
  );
}

export default BeforeAfter;
