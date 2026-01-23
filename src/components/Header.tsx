import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    href: "/",
    label: "Home"
  }, {
    href: "/services",
    label: "Services"
  }, {
    href: "/about",
    label: "About"
  }, {
    href: "/contact",
    label: "Contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Seelo Contracting Inc" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`font-medium transition-colors ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {link.label}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+14038915229" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(403) 891-5229</span>
            </a>
            <Link to="/contact">
              <Button variant="default" size="lg">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-background border-b border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className={`font-medium py-2 ${location.pathname === link.href ? "text-primary" : "text-foreground"}`}>
                  {link.label}
                </Link>)}
              <a href="tel:+14038915229" className="flex items-center gap-2 text-muted-foreground py-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">(403) 891-5229</span>
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full mt-2">
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;