import Footer from "../components/Footer";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1000",
    alt: "Bright modern kitchen with a central island",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000",
    alt: "Contemporary kitchen cabinets and worktop",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000",
    alt: "Elegant kitchen interior with warm wood details",
  },
];

function AboutPage({ onBack }) {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-black px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-white/40 px-5 py-3 font-medium transition hover:bg-white hover:text-black"
          >
            Back to Home
          </button>
          <span className="text-right text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
            Standard Kitchen
          </span>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 uppercase tracking-[0.25em] text-gray-500">About Us</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Thoughtful kitchens made for the way you live.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Standard Kitchen Solutions creates premium modular kitchens and interior solutions that bring together intelligent planning, durable materials, and timeless design.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {galleryImages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-72 w-full rounded-2xl object-cover shadow-xl md:h-80"
              />
            ))}
          </div>

          <div className="mt-16 grid gap-12 border-y border-gray-200 py-14 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Designed around you</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Every project begins with your routine, taste, and available space. We create a practical layout first, then refine it with finishes that feel personal.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">From idea to installation</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Our team manages the process from the first consultation through installation, keeping communication clear and the final result true to your vision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-14 text-center">
            <div><p className="text-3xl font-bold">10+</p><p className="mt-2 text-xs uppercase tracking-wide text-gray-500">Years experience</p></div>
            <div><p className="text-3xl font-bold">500+</p><p className="mt-2 text-xs uppercase tracking-wide text-gray-500">Kitchens delivered</p></div>
            <div><p className="text-3xl font-bold">98%</p><p className="mt-2 text-xs uppercase tracking-wide text-gray-500">Happy clients</p></div>
          </div>
        </div>
      </section>

      <Footer onOpenAbout={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
    </main>
  );
}

export default AboutPage;