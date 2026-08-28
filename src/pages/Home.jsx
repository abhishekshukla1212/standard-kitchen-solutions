import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Projects from "../components/Projects";
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

function Home({ onOpenInvoice, onOpenAbout }) {
  return (
    <>
      <Navbar onInvoiceClick={onOpenInvoice} />
      <Hero />
      <Services/>
      <Materials />
      <Process />
      <Projects />
      <BeforeAfter />
      <About onLearnMore={onOpenAbout} />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <ContactCTA />
      <Footer onOpenAbout={onOpenAbout} />
      <WhatsAppButton />
    </>
  );
}

export default Home;