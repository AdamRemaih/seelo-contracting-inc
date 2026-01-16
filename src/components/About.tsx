import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";

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

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              About Ceelo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Property Care Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              For over 15 years, Ceelo has been the go-to choice for homeowners and 
              businesses looking for reliable, professional landscaping and snow removal 
              services. We take pride in treating every property like our own.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of experienced professionals uses top-quality equipment and 
              eco-friendly practices to deliver results that exceed expectations. 
              Whether it's a perfectly manicured lawn or a cleared driveway at dawn, 
              we're committed to your satisfaction.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
  );
};

export default About;
