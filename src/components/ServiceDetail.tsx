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
import deco1 from "@/assets/deco (1).jpg";
import deco2 from "@/assets/deco (2).jpg";
import deco3 from "@/assets/deco (3).jpg";
import deco4 from "@/assets/deco (4).jpg";
import deco5 from "@/assets/deco (5).jpg";
import deco6 from "@/assets/deco (6).jpg";
import deco7 from "@/assets/deco (7).jpg";
import deco8 from "@/assets/deco (8).jpg";

import catering1 from "@/assets/catering (1).jpg";
import catering2 from "@/assets/catering (2).jpg";
import catering3 from "@/assets/catering (3).jpg";
import catering4 from "@/assets/catering (4).jpg";
import dj1 from "@/assets/DJ (1).jpg";
import dj2 from "@/assets/DJ (2).jpg";
import dj3 from "@/assets/DJ (3).jpg";
import dj4 from "@/assets/DJ (4).jpg";
import bday1 from "@/assets/bday (1).jpg";
import bday2 from "@/assets/bday (2).jpg";
import bday3 from "@/assets/bday (3).jpg";
import bday4 from "@/assets/bday (4).jpg";
import bday5 from "@/assets/bday (5).jpg";
import bday6 from "@/assets/bday (6).jpg";
import bday7 from "@/assets/bday (7).jpg";
import bday8 from "@/assets/bday (8).jpg";
import makeup1 from "@/assets/makeup (1).jpg";
import makeup2 from "@/assets/makeup (2).jpg";
import makeup3 from "@/assets/makeup (3).jpg";
import makeup4 from "@/assets/makeup (4).jpg";
import mehendi1 from "@/assets/mehendi (1).jpg";
import mehendi2 from "@/assets/mehendi (2).jpg";
import mehendi3 from "@/assets/mehendi (3).jpg";
import mehendi4 from "@/assets/mehendi (4).jpg";
import eng1 from "@/assets/eng (1).jpg";
import eng2 from "@/assets/eng (2).jpg";
import eng3 from "@/assets/eng (3).jpg";
import eng4 from "@/assets/eng (4).jpg";



function ImageGallery({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  return (
    <div className="mb-10 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img
              src={img}
              alt={`${title} ${idx + 1}`}
              loading="lazy"
              className="object-cover w-full h-48 sm:h-56 md:h-64 transform hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const decorationImages = [deco1, deco2, deco3, deco4,deco5,deco6,deco7,deco8];
const cateringImages = [
  catering1,
  catering2,
  catering3,
  catering4
];
const djImages = [
  dj1,
  dj2,
  dj3,
  dj4
];
const engImage = [
  eng1,
  eng2,
  eng3,
  eng4
]

const makeupImage = [
  makeup1,
  makeup2,
  makeup3,
  makeup4
];

const mehendiImage = [
  mehendi1,
  mehendi2,
  mehendi3,
  mehendi4
];

const bdayImg = [
  bday1,
  bday2,
  bday3,
  bday4,
  bday5,
  bday6,
  bday7,
  bday8
]
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
    description: "Transform your venue with stunning decor.",
    image: decorationImg,
    content: (
      <div>
        <p className="text-lg mb-4">
          Our decoration services bring your dream theme to life — from elegant
          floral arrangements to luxurious stage designs and ambient lighting.
          We tailor every detail to your vision, ensuring your event feels truly
          magical.
        </p>
        <ImageGallery title="Decoration Gallery" images={decorationImages} />
      </div>
    ),
  },
  catering: {
    title: "Catering",
    description: "Delicious menus tailored for your event.",
    image: cateringImg,
    content: (
      <div>
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

      <ImageGallery title="Catering Showcase" images={cateringImages} />
      </div>

    ),
  },
 photography: {
  title: "Photography",
  description: "Capture every beautiful moment.",
  image: photographyImg,
  content: (
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

      {/* Pre-Wedding Gallery */}
      <ImageGallery title="Pre-Wedding Showcase" images={preWeddingImages} />

      {/* Wedding Gallery */}
      <ImageGallery title="Wedding Showcase" images={weddingImages} />
    </div>
  ),
},


  dj: {
    title: "DJ Music",
    description: "Get the party started!",
    image: djImg,
    content: (
      <div>
      <p className="text-lg">
        Turn up the energy and let the beats move your crowd! Our professional
        DJs know exactly how to read the room and keep your guests dancing all
        night long. From wedding sangeet nights to corporate parties, we mix the
        latest chartbusters with your favorite tracks for the perfect vibe. We
        also provide advanced sound systems, stage lighting, and dance-floor
        effects for a truly immersive experience. You bring the crowd — we’ll
        bring the rhythm and unforgettable fun.
      </p>
      <ImageGallery title="dj Showcase" images={djImages} />
      </div>
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
        <ImageGallery title="makeup Showcase" images={makeupImage} />
      </div>
    ),
  },
  engagement: {
  title: "Engagement Ceremony",
  description: "Celebrate the beginning of forever in style.",
  image: eng,
  content: (
    <div>
    <p className="text-lg">
      From ring exchange rituals to romantic decor, we make your engagement 
      a beautiful celebration filled with elegance and joy. Whether you prefer 
      a royal setup or a cozy, intimate event, we handle decor, lighting, 
      photography, and entertainment — so you can simply enjoy your special moment.
    </p>
    <ImageGallery title="eng Showcase" images={engImage} />
    </div>
  ),
},

birthday: {
  title: "Birthday Party",
  description: "Make every birthday unforgettable.",
  image: bday,
  content: (
    <div>
    <p className="text-lg">
      Whether it's a fun kids' party, a classy 18th bash, or a grand milestone 
      celebration — we bring your vision to life! With themed decorations, 
      entertainers, custom cakes, and music, we ensure joy and excitement 
      from start to finish.
    </p>
    <ImageGallery title="bday showing" images={bdayImg} />
    </div>
  ),
},


  mehandi: {
    title: "Mehandi Artist",
    description: "Traditional artistry for your celebration.",
    image: mehandiImg,
    content: (
      <div>
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
      <ImageGallery title="mehendi Showcase" images={mehendiImage} />
      </div>
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