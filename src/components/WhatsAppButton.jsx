import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917304252693"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-dustyblue text-ivory p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;