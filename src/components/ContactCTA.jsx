function ContactCTA() {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[6px] text-gray-400 mb-4">
          Let's Build Your Dream Space
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Ready To Transform Your Kitchen?
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Get in touch with our experts for premium modular kitchens and modern interior solutions tailored to your lifestyle.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">

          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
            Get Free Consultation
          </button>

          <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            WhatsApp Us
          </button>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;