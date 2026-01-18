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
  Construction
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import landscapingImage from "@/assets/landscaping-service.jpg";
import snowImage from "@/assets/snow-removal.jpg";

const services = [
  {
    icon: TreeDeciduous,
    title: "Landscaping",
    description: "Complete landscape design, installation, and maintenance. From gardens to hardscapes, we create beautiful outdoor spaces.",
    features: ["Landscape Design", "Planting & Gardens", "Hardscape Installation", "Irrigation Systems"],
  },
  {
    icon: Construction,
    title: "Concrete",
    description: "Professional concrete services for driveways, patios, walkways, and foundations. Quality work that lasts.",
    features: ["Driveways", "Patios & Walkways", "Foundations", "Decorative Concrete"],
  },
  {
    icon: Truck,
    title: "Asphalt",
    description: "Expert asphalt paving and repair for driveways, parking lots, and roadways. Durable surfaces built to last.",
    features: ["Paving", "Seal Coating", "Crack Repair", "Resurfacing"],
  },
  {
    icon: Pickaxe,
    title: "Excavation",
    description: "Land clearing, grading, and excavation services for construction projects of all sizes.",
    features: ["Site Preparation", "Land Clearing", "Grading", "Trenching"],
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    description: "Reliable 24/7 snow plowing and ice management. Keep your property safe and accessible all winter.",
    features: ["Snow Plowing", "Salting & Sanding", "Sidewalk Clearing", "Emergency Response"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Landscaping Highlight */}
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

        {/* Snow Removal Highlight */}
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:order-1"
              >
                <img
                  src={snowImage}
                  alt="Snow removal service"
                  className="w-full h-full object-cover"
                />
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
