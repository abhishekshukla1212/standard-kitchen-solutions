import { useEffect, useRef, useState } from "react";

function ContactCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceType: "Modular Kitchen",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isFormOpen && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const first = formRef.current.querySelector("input, textarea, select, button");
        if (first) first.focus();
      }, 350);
    }
  }, [isFormOpen]);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual backend endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! We'll get back to you soon.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          serviceType: "Modular Kitchen",
          message: "",
        });
        setIsFormOpen(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <button onClick={toggleForm} type="button" className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
            {isFormOpen ? "Hide Form" : "Get in Touch"}
          </button>

          <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            WhatsApp Us
          </button>

        </div>

        {isFormOpen && (
          <form id="contact-form" ref={formRef} className="mt-12 space-y-4" onSubmit={handleSubmit}>

  <input
    id="name"
    name="name"
    type="text"
    placeholder="Full Name"
    value={formData.name}
    onChange={handleInputChange}
    className="w-full p-4 rounded-lg border"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Mobile Number"
    value={formData.phone}
    onChange={handleInputChange}
    className="w-full p-4 rounded-lg border"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={formData.email}
    onChange={handleInputChange}
    className="w-full p-4 rounded-lg border"
  />

  <input
    type="text"
    name="city"
    placeholder="City"
    value={formData.city}
    onChange={handleInputChange}
    className="w-full p-4 rounded-lg border"
  />

  <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} className="w-full p-4 rounded-lg border">
    <option value="Modular Kitchen">Modular Kitchen</option>
    <option value="Wardrobe">Wardrobe</option>
    <option value="Office Interior">Office Interior</option>
    <option value="Hotel Interior">Hotel Interior</option>
    <option value="Hospital Interior">Hospital Interior</option>
  </select>

  <textarea
    name="message"
    rows="5"
    placeholder="Tell us about your project"
    value={formData.message}
    onChange={handleInputChange}
    className="w-full p-4 rounded-lg border"
  ></textarea>

  <button
    type="submit"
    disabled={isSubmitting}
    className="bg-black text-white px-8 py-4 rounded-lg w-full hover:bg-gray-800 disabled:opacity-50"
  >
    {isSubmitting ? "Submitting..." : "Submit"}
  </button>

</form>
        )}
      </div>
    </section>
  );
}

export default ContactCTA;