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

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Process />
      <Projects />
      <BeforeAfter />
      <About />
      <Stats />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default Home;