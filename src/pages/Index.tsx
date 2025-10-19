import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      
      <footer className="gradient-hero text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gold font-display text-2xl mb-2">Vighnaharta</p>
          <p className="text-white/90 mb-4">Event & Wedding Planner</p>
          <p className="text-sm text-white/70">
            © 2025 Vighnaharta Event & Wedding Planner. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
