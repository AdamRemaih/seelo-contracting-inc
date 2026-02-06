import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    value: "Greater Metro Area",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Sat: 7am-7pm",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contact us today for a free estimate. We'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
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

          {/* Contact Form */}
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
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="(403) 891-5229" type="tel" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input placeholder="john@example.com" type="email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Needed
                </label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                  <option value="">Select a service</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="lawn-care">Lawn Care</option>
                  <option value="snow-removal">Snow Removal</option>
                  <option value="seasonal-contract">Seasonal Contract</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                />
              </div>
              <Button variant="default" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
