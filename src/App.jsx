import Hero from './components/Hero';
import Services from './components/Services';
import TeamSection from './components/TeamSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <TeamSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
