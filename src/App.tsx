import { MotionConfig } from 'framer-motion';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
import { ServiceAreas } from './components/ServiceAreas';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { LanguageProvider } from './context/LanguageContext';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <div className="min-h-screen bg-white text-[#1C2B33]">
          <Navbar />

          <main>
            <Hero />
            <About />
            <Services />
            <Benefits />
            <HowItWorks />
            <ServiceAreas />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
          <FloatingWhatsAppButton />
        </div>
      </LanguageProvider>
    </MotionConfig>
  );
}

export default App;
