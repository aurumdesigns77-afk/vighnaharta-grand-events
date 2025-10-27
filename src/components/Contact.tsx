import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .send(
        "service_v5ji8b2", // replace with your EmailJS service ID
        "template_al6khgn", // replace with your EmailJS template ID
        formData,
        "3UCe3Xaq8-fOo3xkN" // replace with your EmailJS public key
      )
      .then(() => {
        toast({
          title: "Email Sent!",
          description: "Your inquiry has been sent successfully.",
        });
        setFormData({
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
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast({
          title: "Email Sending Failed",
          description: "Please try again later.",
        });
      });
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
              <h3 className="text-2xl font-bold text-primary mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:9021207210"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      9021207210
                    </a>
                    <br />
                    <a
                      href="tel:9579666276"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      9579666276
                    </a>
                    <br />
                    <a
                      href="tel:9356750510"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      9356750510
                    </a>
                    <br />
                    <a
                      href="tel:9322283218"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      9322283218
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:vighnahartaeventplanners@gmail.com"
                      className="text-muted-foreground hover:text-gold transition-colors break-all"
                    >
                      vighnahartaeventplanners@gmail.com
                    </a>
                  </div>
                </div>
                {/* Intragram */}
                <a
                  href="https://www.instagram.com/vighnaharta_wedding_planner_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gold" />
                  <span className="font-semibold  text-sm">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields */}
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
                Send via Email
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
