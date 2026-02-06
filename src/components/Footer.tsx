import { Link } from "react-router-dom";
import { TreeDeciduous, Snowflake, Facebook, Instagram, Phone, Mail } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              
              <span className="text-2xl font-bold tracking-tight">Seelo Contracting Inc</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Professional landscaping and snow removal services. Keeping your 
              property beautiful and safe, every season.
            </p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/30 text-sm">
                <TreeDeciduous className="w-4 h-4" />
                Landscaping
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-snow/20 text-sm">
                <Snowflake className="w-4 h-4" />
                Snow Removal
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+14038915229" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  (403) 891-5229
                </a>
              </li>
              <li>
                <a href="mailto:info@seelo.ca" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  info@seelo.ca
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              
              <a href="https://www.instagram.com/seelocontracting/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Seelo Contracting Inc. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Licensed & Insured | Serving Calgary
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;