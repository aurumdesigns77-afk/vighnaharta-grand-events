import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import logo from "@/assets/logo.png";


const slides = [
  { image: hero1, alt: "Luxurious wedding venue decoration" },
  { image: hero2, alt: "Beautiful wedding couple" },
  { image: hero3, alt: "Grand reception hall" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-gold" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <img 
          src={logo} 
          alt="Vighnaharta Event & Wedding Planner Logo" 
          className="w-32 h-32 mb-6 animate-fade-in"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  font-playfair text-white mb-4 animate-fade-in">
          Vighnaharta
        </h1>
        <p className="text-2xl md:text-3xl text-gold mb-2 animate-fade-in font-display">
          Event & Wedding Planner
        </p>
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl animate-fade-in">
          Turning your celebrations into unforgettable memories
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in">
          Complete Wedding Solutions Under One Roof
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="gradient-gold text-primary font-semibold px-8 py-6 text-lg hover:scale-105 transition-transform shadow-gold animate-fade-in"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
}
