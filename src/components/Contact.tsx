import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    guestCount: "",
    budget: "",
    vision: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Event Inquiry*\n\n*Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n*Event Type:* ${formData.eventType}\n*Event Date:* ${formData.eventDate}\n*Location:* ${formData.eventLocation}\n*Guest Count:* ${formData.guestCount}\n*Budget:* ${formData.budget}\n*Vision:* ${formData.vision}`;
    
    const whatsappUrl = `https://wa.me/919021207210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "We'll get back to you shortly!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Let's start planning your dream celebration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-lg border-2 border-gold shadow-elegant">
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:9021207210" className="text-muted-foreground hover:text-gold transition-colors">9021207210</a><br />
                    <a href="tel:9579666276" className="text-muted-foreground hover:text-gold transition-colors">9579666276</a><br />
                    <a href="tel:9356750510" className="text-muted-foreground hover:text-gold transition-colors">9356750510</a><br />
                    <a href="tel:9322283218" className="text-muted-foreground hover:text-gold transition-colors">9322283218</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:contact@vighnahartaeventwedding.com" className="text-muted-foreground hover:text-gold transition-colors break-all">
                      contact@vighnahartaeventwedding.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/919021207210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center hover:scale-110 transition-transform shadow-gold"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center hover:scale-110 transition-transform shadow-gold"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="eventType">Event Type / Occasion *</Label>
                  <Input
                    id="eventType"
                    name="eventType"
                    required
                    placeholder="Wedding, Reception, Birthday, etc."
                    value={formData.eventType}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="eventDate">Event Date *</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="eventLocation">Event Location</Label>
                  <Input
                    id="eventLocation"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="guestCount">Guest Count</Label>
                  <Input
                    id="guestCount"
                    name="guestCount"
                    type="number"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="budget">Approximate Budget</Label>
                <Input
                  id="budget"
                  name="budget"
                  placeholder="e.g., ₹5,00,000"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="vision">Describe Your Vision</Label>
                <Textarea
                  id="vision"
                  name="vision"
                  rows={4}
                  placeholder="Tell us about your dream celebration..."
                  value={formData.vision}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-gold text-primary font-semibold hover:scale-105 transition-transform shadow-gold"
              >
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
