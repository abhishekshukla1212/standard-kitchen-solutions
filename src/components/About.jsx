function About({ onLearnMore }) {

  return (
    <section id="about" className="bg-ivory pt-[50px] pb-[50px] px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div>
          <img
            src="/materials/Creating Elegant Spaces With Modern Kitchen Design.webp"
            alt="About Kitchen Team"
            loading="lazy"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
          />
        </div>

        {/* Right Content */}
        <div>

          <p className="text-olive uppercase tracking-widest mb-4">
            About Us
          </p>

          <h2 className="text-5xl font-bold text-darktext leading-tight">
            Mastering the Art of Luxury Kitchen & Interior Design
          </h2>

          <p className="mt-6 text-olive text-lg leading-relaxed">
            At Standard Kitchen Solutions, we don't just build kitchens—we craft the heart of your home. Combining timeless aesthetics with cutting-edge functionality, we deliver premium spaces that inspire everyday living.
          </p>

          <p className="mt-4 text-olive text-lg leading-relaxed">
            From precision-engineered modular layouts to luxurious bespoke interiors, our expert team transforms your vision into a stunning reality. Experience the perfect blend of elegance, durability, and modern innovation.
          </p>

          <button
            type="button"
            onClick={onLearnMore}
            className="mt-8 bg-darktext text-ivory px-7 py-4 rounded-xl font-semibold hover:bg-darktext transition"
          >
            Learn More
          </button>

        </div>
        
         {/* Left Content */}
        
         
      </div>

    </section>
  );
}

export default About;