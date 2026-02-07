import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import work1 from "@/assets/work/work-1.jpg";
import work2 from "@/assets/work/work-2.jpg";
import work3 from "@/assets/work/work-3.jpg";
import work4 from "@/assets/work/work-4.jpg";
import work5 from "@/assets/work/work-5.jpg";
import work6 from "@/assets/work/work-6.jpg";
import work7 from "@/assets/work/work-7.jpg";
import work8 from "@/assets/work/work-8.jpg";
import work9 from "@/assets/work/work-9.jpg";
import work10 from "@/assets/work/work-10.jpg";
import work11 from "@/assets/work/work-11.jpg";
import work12 from "@/assets/work/work-12.jpg";
import work13 from "@/assets/work/work-13.jpg";
import work14 from "@/assets/work/work-14.jpg";
import work15 from "@/assets/work/work-15.jpg";
import work16 from "@/assets/work/work-16.jpg";
import work17 from "@/assets/work/work-17.jpg";
import work18 from "@/assets/work/work-18.jpg";
import work19 from "@/assets/work/work-19.jpg";

const projects = [
  { src: work1, alt: "Concrete slab foundation work", category: "Concrete" },
  { src: work2, alt: "Excavation site preparation", category: "Excavation" },
  { src: work3, alt: "Excavator on job site", category: "Excavation" },
  { src: work4, alt: "Underground pipe and utility installation", category: "Excavation" },
  { src: work5, alt: "Stamped concrete patio with fire pit prep", category: "Concrete" },
  { src: work6, alt: "Bobcat mini excavator on commercial site", category: "Excavation" },
  { src: work7, alt: "Commercial concrete ramps and walkways", category: "Concrete" },
  { src: work8, alt: "Courtyard concrete walkway with pergola", category: "Concrete" },
  { src: work9, alt: "Residential concrete steps and landing", category: "Concrete" },
  { src: work10, alt: "Asphalt pathway installation", category: "Asphalt" },
  { src: work11, alt: "Commercial snow removal service", category: "Snow Removal" },
  { src: work12, alt: "Concrete retaining wall formwork", category: "Concrete" },
  { src: work13, alt: "Asphalt patch repair with roller", category: "Asphalt" },
  { src: work14, alt: "Fresh asphalt strip repair", category: "Asphalt" },
  { src: work15, alt: "Commercial parking lot snow clearing", category: "Snow Removal" },
  { src: work16, alt: "Industrial alleyway snow removal", category: "Snow Removal" },
  { src: work17, alt: "Commercial property snow plowing", category: "Snow Removal" },
  { src: work18, alt: "Parking lot snow removal service", category: "Snow Removal" },
  { src: work19, alt: "Concrete retaining wall rebar and formwork", category: "Concrete" },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const OurWorkPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                Portfolio
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
                Our Work
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Browse through our completed projects showcasing quality craftsmanship
                across concrete, excavation, landscaping, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-6 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-30">
          <div className="container mx-auto px-4 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] relative"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                        {project.category}
                      </span>
                      <p className="text-primary-foreground text-sm mt-2 font-medium">
                        {project.alt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                No projects in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Contact us today for a free estimate and let us bring your vision to life.
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Get a Free Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground p-2"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={filtered[lightboxIndex]?.src}
              alt={filtered[lightboxIndex]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurWorkPage;
