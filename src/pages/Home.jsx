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
import QuoteCalculator from "../components/QuoteCalculator";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Materials />
      <Process />
      <Projects />
      <BeforeAfter />
      <About />
      <WhyChooseUs />
      <QuoteCalculator />
      <Stats />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;