import venueImg from "@/assets/service-venue.jpg";
import decorationImg from "@/assets/service-decoration.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import photographyImg from "@/assets/service-photography.jpg";
import djImg from "@/assets/service-dj.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import mehandiImg from "@/assets/service-mehandi.jpg";

const services = [
  { title: "Venue", image: venueImg, description: "Perfect locations for your special day" },
  { title: "Decoration", image: decorationImg, description: "Exquisite floral & lighting designs" },
  { title: "Catering", image: cateringImg, description: "Delicious cuisine for your guests" },
  { title: "Photography", image: photographyImg, description: "Capturing your precious moments" },
  { title: "DJ Music", image: djImg, description: "Entertainment that keeps spirits high" },
  { title: "Makeup Artist", image: makeupImg, description: "Professional bridal & event makeup" },
  { title: "Mehandi Artist", image: mehandiImg, description: "Traditional intricate henna designs" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event solutions tailored to make your celebration perfect
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1 text-gold">{service.title}</h3>
                  <p className="text-sm text-white/90">{service.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 gradient-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-gold">
                <span className="text-2xl text-primary">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
