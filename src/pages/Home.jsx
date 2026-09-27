import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import Stats from "../components/Stats";
import BeforeAfter from "../components/BeforeAfter";
import Process from "../components/Process";
import WhatsAppButton from "../components/WhatsAppButton";
import WhyChooseUs from "../components/WhyChooseUs";
import Materials from "../components/Materials";
//import QuoteCalculator from "../components/QuoteCalculator";//

function Home({ onOpenInvoice, onOpenAbout, onOpenContact, onOpenKitchen, onOpenCarpentry }) {
  return (
    <>
      <Navbar 
        onInvoiceClick={onOpenInvoice} 
        onOpenAbout={onOpenAbout} 
        onOpenContact={onOpenContact} 
        onOpenKitchen={onOpenKitchen}
        onOpenCarpentry={onOpenCarpentry}
      />
      <Hero />
      <Services/>
      <Materials />
      <Process />
      <BeforeAfter />
      <About onLearnMore={onOpenAbout} />
      <WhyChooseUs />
      <ContactCTA onOpenContact={onOpenContact} />
      <Footer onOpenAbout={onOpenAbout} onOpenContact={onOpenContact} />
      <WhatsAppButton />
    </>
  );
}

export default Home;