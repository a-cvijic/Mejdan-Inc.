import Hero from './components/Hero';
import Services from './components/Services';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <TeamSection />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
