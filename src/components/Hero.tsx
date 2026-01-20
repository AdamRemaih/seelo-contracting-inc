import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake, TreeDeciduous } from "lucide-react";
import heroImage from "@/assets/hero-landscaping.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful landscaped lawn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Service Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
              <TreeDeciduous className="w-4 h-4" />
              Landscaping
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snow text-snow-foreground text-sm font-medium">
              <Snowflake className="w-4 h-4" />
              Snow Removal
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Transform Your Property,
            <br />
            <span className="text-accent">Every Season</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
          >
            From lush summer lawns to cleared winter driveways, Seelo Contracting Inc delivers 
            professional landscaping and snow removal services you can count on.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <Button size="lg" variant="accent" className="text-lg px-8">
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                View Our Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-accent">15+</span>
              <span className="text-primary-foreground/70 text-sm">Years<br/>Experience</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-accent">500+</span>
              <span className="text-primary-foreground/70 text-sm">Happy<br/>Customers</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-accent">24/7</span>
              <span className="text-primary-foreground/70 text-sm">Emergency<br/>Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
