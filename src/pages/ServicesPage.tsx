import { motion } from "framer-motion";
import { 
  TreeDeciduous, 
  Snowflake, 
  Leaf, 
  Flower2, 
  Shovel, 
  Truck,
  Building2,
  Home,
  HardHat,
  Pickaxe,
  Construction,
  Layers,
  Shield,
  Droplets
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import landscapingImage from "@/assets/landscaping-service.jpg";
import snowImage from "@/assets/snow-removal.jpg";
import concreteImage from "@/assets/concrete-service.jpg";
import asphaltImage from "@/assets/asphalt-service.jpg";
import excavationImage from "@/assets/excavation-service.jpg";

const ServicesPage = () => {
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
                Our Services
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
                Professional Property Services
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                From landscaping to snow removal, concrete to excavation—we provide comprehensive 
                property services for both residential and commercial clients.
              </p>
              
              {/* Commercial & Residential Badges */}
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/20 text-primary-foreground font-medium">
                  <Home className="w-5 h-5" />
                  Residential Services
                </span>
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/20 text-primary-foreground font-medium">
                  <Building2 className="w-5 h-5" />
                  Commercial Services
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Landscaping Service */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={landscapingImage}
                  alt="Professional landscaping"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                  Landscaping Excellence
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  Transform Your Outdoor Space
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Whether you need a complete landscape overhaul or regular maintenance, 
                  our expert team delivers stunning results for homes and businesses alike.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Lawn Care</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Flower2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Garden Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TreeDeciduous className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Tree Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <HardHat className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Hardscaping</span>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Get a Free Quote
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Concrete Service */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:order-2"
              >
                <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                  Built to Last
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  Professional Concrete Work
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  From driveways to foundations, patios to walkways—our concrete services 
                  deliver quality craftsmanship that stands the test of time.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-earth/20 flex items-center justify-center">
                      <Construction className="w-5 h-5 text-earth" />
                    </div>
                    <span className="text-foreground font-medium">Driveways</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-earth/20 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-earth" />
                    </div>
                    <span className="text-foreground font-medium">Patios & Walkways</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-earth/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-earth" />
                    </div>
                    <span className="text-foreground font-medium">Foundations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-earth/20 flex items-center justify-center">
                      <Flower2 className="w-5 h-5 text-earth" />
                    </div>
                    <span className="text-foreground font-medium">Decorative Concrete</span>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Get a Free Quote
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:order-1"
              >
                <img
                  src={concreteImage}
                  alt="Concrete services"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Asphalt Service */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={asphaltImage}
                  alt="Asphalt paving services"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                  Smooth Surfaces
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  Expert Asphalt Paving
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Quality asphalt paving and repair for driveways, parking lots, and roadways. 
                  We build durable surfaces that handle heavy traffic and harsh weather.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Paving</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Seal Coating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
                      <Construction className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Crack Repair</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Resurfacing</span>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Get a Free Quote
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Excavation Service */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:order-2"
              >
                <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                  Ground Work
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  Professional Excavation
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Land clearing, grading, and excavation services for construction projects 
                  of all sizes. We prepare your site for success.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center">
                      <Pickaxe className="w-5 h-5 text-amber" />
                    </div>
                    <span className="text-foreground font-medium">Site Preparation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center">
                      <TreeDeciduous className="w-5 h-5 text-amber" />
                    </div>
                    <span className="text-foreground font-medium">Land Clearing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-amber" />
                    </div>
                    <span className="text-foreground font-medium">Grading</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-amber" />
                    </div>
                    <span className="text-foreground font-medium">Trenching</span>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Get a Free Quote
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:order-1"
              >
                <img
                  src={excavationImage}
                  alt="Excavation services"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Snow Removal Service */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={snowImage}
                  alt="Snow removal service"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                  Winter Ready
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  Reliable Snow Removal
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Don't let winter slow you down. Our 24/7 snow removal services keep 
                  your residential and commercial properties safe and accessible.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-snow flex items-center justify-center">
                      <Snowflake className="w-5 h-5 text-snow-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Snow Plowing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-snow flex items-center justify-center">
                      <Shovel className="w-5 h-5 text-snow-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Sidewalk Clearing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-snow flex items-center justify-center">
                      <Truck className="w-5 h-5 text-snow-foreground" />
                    </div>
                    <span className="text-foreground font-medium">24/7 Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-snow flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-snow-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Commercial Lots</span>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Schedule Service
                  </Button>
                </Link>
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
                Ready to Get Started?
              </h2>
              <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
                Contact us today for a free estimate. We serve both residential and commercial properties.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                  Request a Free Quote
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

export default ServicesPage;
