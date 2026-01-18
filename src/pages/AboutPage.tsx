import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, TreeDeciduous, Snowflake, Building2, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete coverage for your peace of mind",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "We respect your schedule, every time",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Satisfaction or we make it right",
  },
  {
    icon: Users,
    title: "Local Team",
    description: "Your neighbors, serving your community",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                About Ceelo
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
                Your Trusted Property Care Partner
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                For over 15 years, we've been the go-to choice for homeowners and 
                businesses looking for reliable, professional property services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Built on Hard Work & Trust
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Ceelo started as a small family operation with one truck and a passion for 
                  making properties look their best. Today, we've grown into a full-service 
                  property care company, but our values remain the same.
                </p>
                <p className="text-muted-foreground mb-6">
                  We take pride in treating every property like our own. Whether it's a 
                  perfectly manicured lawn, a freshly paved driveway, or a cleared 
                  parking lot at dawn, we're committed to your satisfaction.
                </p>
                <p className="text-muted-foreground">
                  Our team of experienced professionals uses top-quality equipment and 
                  eco-friendly practices to deliver results that exceed expectations—for 
                  both residential homeowners and commercial businesses.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary rounded-3xl p-8 md:p-12"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <span className="text-5xl md:text-6xl font-bold text-accent">15+</span>
                    <p className="text-primary-foreground/70 mt-2">Years of Service</p>
                  </div>
                  <div className="text-center">
                    <span className="text-5xl md:text-6xl font-bold text-accent">500+</span>
                    <p className="text-primary-foreground/70 mt-2">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <span className="text-5xl md:text-6xl font-bold text-accent">24/7</span>
                    <p className="text-primary-foreground/70 mt-2">Emergency Response</p>
                  </div>
                  <div className="text-center">
                    <span className="text-5xl md:text-6xl font-bold text-accent">100%</span>
                    <p className="text-primary-foreground/70 mt-2">Satisfaction Rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Ceelo?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We're not just another property service company. Here's what sets us apart.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Serving All Property Types
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From cozy homes to large commercial properties, we have the equipment 
                and expertise to handle projects of any size.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Residential</h3>
                <p className="text-muted-foreground mb-4">
                  Keep your home looking its best year-round with our comprehensive 
                  residential services. We treat your property like our own.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Lawn care & landscaping
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Driveway snow removal
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Patio & walkway installation
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Commercial</h3>
                <p className="text-muted-foreground mb-4">
                  Professional property maintenance for businesses. We understand the 
                  importance of a well-maintained commercial property.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Parking lot maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    24/7 snow removal
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Large-scale excavation
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
                Contact us today to discuss your project and get a free estimate.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
