import { Heart, Star, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">Vighnaharta Event & Wedding Planner</span> — your trusted experts for all occasions. 
            We are passionate professional planners dedicated to making every celebration extraordinary.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-lg hover:shadow-elegant transition-shadow">
            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Personalized Service</h3>
            <p className="text-muted-foreground">
              Every event is unique, and we tailor our services to match your vision perfectly
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:shadow-elegant transition-shadow">
            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Premium Quality</h3>
            <p className="text-muted-foreground">
              We work with the finest vendors to ensure exceptional quality in every detail
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:shadow-elegant transition-shadow">
            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Experienced Team</h3>
            <p className="text-muted-foreground">
              Years of expertise in creating memorable celebrations for countless happy clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
