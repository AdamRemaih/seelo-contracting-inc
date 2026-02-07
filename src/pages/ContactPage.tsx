import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FORMSPREE_URL = "https://formspree.io/f/xvzbozdd";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(403) 891-5229",
    href: "tel:+14038915229",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@seelo.ca",
    href: "mailto:info@seelo.ca",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Calgary",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Sat: 7am-7pm",
  },
];

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
        form.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                Contact Us
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
                Get in Touch
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Ready to transform your property? Contact us today for a free estimate.
                We'll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Contact Information</h2>
                  <p className="text-muted-foreground">Reach out to us through any of these channels.</p>
                </div>

                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Emergency Snow Removal</h4>
                  <p className="text-muted-foreground mb-4">
                    Available 24/7 during winter storms. Call our emergency line:
                  </p>
                  <a
                    href="tel:+14038915229"
                    className="inline-flex items-center gap-2 text-accent font-semibold text-lg hover:underline"
                  >
                    <Phone className="w-5 h-5" />
                    (403) 891-5229
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Request a Free Quote
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <Input name="name" placeholder="John Smith" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input name="phone" placeholder="(123) 456-7890" type="tel" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <Input name="email" placeholder="john@example.com" type="email" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
                      <select name="property_type" className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground" required>
                        <option value="">Select type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service Needed</label>
                      <select name="service" className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground" required>
                        <option value="">Select a service</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="concrete">Concrete</option>
                        <option value="asphalt">Asphalt</option>
                        <option value="excavation">Excavation</option>
                        <option value="snow-removal">Snow Removal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea name="message" placeholder="Tell us about your project..." rows={4} required />
                  </div>
                  <Button variant="default" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
