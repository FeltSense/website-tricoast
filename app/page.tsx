import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <Contact />
      <Pricing />
      <Footer />
    </main>
  );
}
