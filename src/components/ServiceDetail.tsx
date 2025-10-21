// src/pages/ServiceDetail.tsx
import { useParams, Link } from "react-router-dom";
import decorationImg from "@/assets/service-decoration.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import photographyImg from "@/assets/service-photography.jpg";
import djImg from "@/assets/service-dj.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import mehandiImg from "@/assets/service-mehandi.jpg";
import pre1 from "@/assets/prewedding1.jpg";
import pre2 from "@/assets/prewedding2.jpg";
import pre3 from "@/assets/prewedding3.jpg";
import pre4 from "@/assets/prewedding4.jpg";
import pre5 from "@/assets/prewedding5.jpg";
import pre6 from "@/assets/prewedding6.jpg";
import pre7 from "@/assets/prewedding7.jpg";
import pre8 from "@/assets/prewedding8.jpg";
import pre9 from "@/assets/prewedding9.jpg";
import pre10 from "@/assets/prewedding10.jpg";
import pre11 from "@/assets/prewedding11.jpg";
import pre12 from "@/assets/prewedding12.jpg";
import wed1 from "@/assets/wedding1.jpg";
import wed2 from "@/assets/wedding2.jpg";
import wed3 from "@/assets/wedding3.jpg";
import wed4 from "@/assets/wedding4.jpg";
import wed5 from "@/assets/wedding5.jpg";
import wed6 from "@/assets/wedding6.jpg";
import wed8 from "@/assets/wedding8.jpg";
import wed9 from "@/assets/wedding9.jpg";
import eng from "@/assets/engagment.jpg";
import bday from "@/assets/birthday.jpg";


const preWeddingImages = [
  pre1,
  pre2,
  pre3,
  pre4,
  pre5,
  pre6,
  pre7,
  pre8,
  pre9,
  pre10,
  pre11,
  pre12,
];
const weddingImages = [wed1, wed2, wed3, wed4, wed5, wed6, wed8, wed9];

const serviceDetails: Record<
  string,
  { title: string; description: string; image: string; content: JSX.Element }
> = {
  decoration: {
    title: "Decoration",
    description: "Transform your event space beautifully.",
    image: decorationImg,
    content: (
      <p className="text-lg">
        Transform your event into a magical experience with our expert
        decoration services. Our decorators specialize in creating stunning
        visual themes — from traditional floral arrangements and royal mandaps
        to contemporary minimal setups and luxurious draping styles. We tailor
        every design element to your color palette, theme, and budget, ensuring
        every corner reflects your personality and story. Lighting, stage
        design, table settings, and floral installations come together to make
        your event a visual masterpiece that guests will talk about for years.
      </p>
    ),
  },
  catering: {
    title: "Catering",
    description: "Delicious menus tailored for your event.",
    image: cateringImg,
    content: (
      <p className="text-lg">
        Great food makes great memories! Our catering services offer an
        extensive range of cuisines — Indian, Continental, Asian, and more —
        prepared with love by skilled chefs using fresh, high-quality
        ingredients. We design custom menus that reflect your preferences and
        event style, whether it’s a lavish wedding buffet, elegant cocktail
        dinner, or themed celebration. From live counters and mocktail bars to
        beautifully presented desserts, every dish is crafted to impress and
        delight your guests.
      </p>
    ),
  },
  photography: {
  title: "Photography",
  description: "Capture every beautiful moment.",
  image: photographyImg,
  content: (() => {
    return (
      <div className="relative">
        <p className="text-lg mb-4">
          Every moment deserves to be remembered — and our photography and
          cinematography teams ensure no emotion is missed. From candid
          pre-wedding laughter to grand stage moments, our photographers capture
          memories that last a lifetime. We offer high-end equipment, drone
          shots, cinematic video editing, and custom albums. Whether you prefer
          a natural storytelling approach or glamorous portraits, our creative
          direction ensures every frame tells your story beautifully.
        </p>

        {/* Pre-Wedding Card */}
        <div className="mb-10 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Pre-Wedding Shoots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {preWeddingImages.map((img, idx) => (
              <div
                key={`pre-${idx}`}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Pre-Wedding ${idx}`}
                  className="object-cover h-80 w-full transform hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Wedding Card */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Wedding Moments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {weddingImages.map((img, idx) => (
              <div
                key={`wed-${idx}`}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Wedding ${idx}`}
                  className="object-cover h-80 w-full transform hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  })(),
},


  dj: {
    title: "DJ Music",
    description: "Get the party started!",
    image: djImg,
    content: (
      <p className="text-lg">
        Turn up the energy and let the beats move your crowd! Our professional
        DJs know exactly how to read the room and keep your guests dancing all
        night long. From wedding sangeet nights to corporate parties, we mix the
        latest chartbusters with your favorite tracks for the perfect vibe. We
        also provide advanced sound systems, stage lighting, and dance-floor
        effects for a truly immersive experience. You bring the crowd — we’ll
        bring the rhythm and unforgettable fun.
      </p>
    ),
  },
  makeup: {
    title: "Makeup Artist",
    description: "Look your best on your special day.",
    image: makeupImg,
    content: (
      <div>
        <p className="text-lg mb-4">
          Look and feel your absolute best with our professional makeup artists.
          We specialize in bridal, party, and editorial looks, ensuring every
          brushstroke enhances your natural beauty. Using premium, skin-safe
          products and the latest techniques, we craft flawless, camera-ready
          results that last through your entire event. From subtle elegance to
          full glam, our artists adapt styles to your outfit, lighting, and
          personality. We also offer hair styling, draping, and pre-event skin
          consultations for a truly complete beauty experience.
        </p>
      </div>
    ),
  },
  engagement: {
  title: "Engagement Ceremony",
  description: "Celebrate the beginning of forever in style.",
  image: eng,
  content: (
    <p className="text-lg">
      From ring exchange rituals to romantic decor, we make your engagement 
      a beautiful celebration filled with elegance and joy. Whether you prefer 
      a royal setup or a cozy, intimate event, we handle decor, lighting, 
      photography, and entertainment — so you can simply enjoy your special moment.
    </p>
  ),
},

birthday: {
  title: "Birthday Party",
  description: "Make every birthday unforgettable.",
  image: bday,
  content: (
    <p className="text-lg">
      Whether it's a fun kids' party, a classy 18th bash, or a grand milestone 
      celebration — we bring your vision to life! With themed decorations, 
      entertainers, custom cakes, and music, we ensure joy and excitement 
      from start to finish.
    </p>
  ),
},


  mehandi: {
    title: "Mehandi Artist",
    description: "Traditional artistry for your celebration.",
    image: mehandiImg,
    content: (
      <p className="text-lg">
        Celebrate tradition and beauty with our talented mehndi artists, who
        specialize in intricate and creative designs for all occasions. Whether
        you prefer classic Indian bridal patterns, Arabic florals, or modern
        minimalist styles, we bring your vision to life with natural,
        long-lasting henna. Our team ensures comfort and precision, using
        high-quality organic paste that delivers rich color without harming your
        skin. Let your hands and feet tell your story — beautifully,
        artistically, and full of joy.
      </p>
    ),
  },
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = serviceDetails[id || ""];

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">
          Service Not Found
        </h2>
        <Link to="/services" className="text-primary underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Image with title overlay */}
        <div className="relative mb-10 w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
            <h1 className="text-4xl font-bold text-white p-6">
              {service.title}
            </h1>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-8">
          {service.description}
        </p>

        {/* Content */}
        <div className="text-black/90">{service.content}</div>
      </div>
    </section>
  );
}
