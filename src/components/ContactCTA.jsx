import LazyVideo from "./LazyVideo";

function ContactCTA({ onOpenContact }) {
  return (
    <section id="contact" className="relative h-screen w-full overflow-hidden bg-darktext flex flex-col justify-center px-6">

      {/* Background Video */}
      <LazyVideo
        src="/materials/CTA.webm"
        className="absolute inset-0 w-full h-full"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-ivory">

        <p className="uppercase tracking-[6px] text-olive mb-4">
          Let's Build Your Dream Space
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Ready To Transform Your Kitchen?
        </h2>

        <p className="mt-6 text-lg text-olive max-w-3xl mx-auto">
          Get in touch with our experts for premium modular kitchens and modern interior solutions tailored to your lifestyle.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">

          <button 
            onClick={onOpenContact} 
            type="button" 
            className="bg-ivory text-darktext px-8 py-4 rounded-xl font-semibold hover:bg-ivory transition"
          >
            Get in Touch
          </button>

          <button className="border border-stone px-8 py-4 rounded-xl font-semibold hover:bg-ivory hover:text-darktext transition">
            WhatsApp Us
          </button>

        </div>
      </div>
    </section>
  );
}

export default ContactCTA;