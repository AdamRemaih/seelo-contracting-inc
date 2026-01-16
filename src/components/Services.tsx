import { motion } from "framer-motion";
import { TreeDeciduous, Snowflake, Leaf, Flower2, Shovel, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import landscapingImage from "@/assets/landscaping-service.jpg";
import snowImage from "@/assets/snow-removal.jpg";

const landscapingServices = [
  { icon: Leaf, title: "Lawn Care", description: "Mowing, edging, and fertilization" },
  { icon: Flower2, title: "Garden Design", description: "Custom beds and plantings" },
  { icon: TreeDeciduous, title: "Tree Service", description: "Pruning, trimming & removal" },
];

const snowServices = [
  { icon: Snowflake, title: "Snow Plowing", description: "Driveways and parking lots" },
  { icon: Shovel, title: "Sidewalk Clearing", description: "Safe, salt-free options" },
  { icon: Truck, title: "24/7 Response", description: "Emergency storm service" },
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

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
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
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Year-Round Property Care
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From spring blooms to winter storms, we keep your property looking its best
          </p>
        </motion.div>

        {/* Landscaping Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
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
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium">
                <TreeDeciduous className="w-4 h-4" />
                Landscaping
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Professional Landscaping Services
            </h3>
            <p className="text-muted-foreground">
              Create the outdoor space you've always dreamed of. Our expert team handles 
              everything from regular lawn maintenance to complete landscape transformations.
            </p>
            <div className="grid gap-4">
              {landscapingServices.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-border hover:border-primary/50 transition-colors">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Snow Removal Services */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Reliable Snow Removal
            </h3>
            <p className="text-muted-foreground">
              When winter hits, count on Ceelo for fast, reliable snow removal. We keep 
              your driveways, walkways, and parking lots safe and accessible all season long.
            </p>
            <div className="grid gap-4">
              {snowServices.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-border hover:border-snow-foreground/30 transition-colors bg-snow/30">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="w-12 h-12 rounded-lg bg-snow flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-snow-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:order-2"
          >
            <img
              src={snowImage}
              alt="Snow removal service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snow text-snow-foreground font-medium">
                <Snowflake className="w-4 h-4" />
                Snow Removal
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
