import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", href: "#services" },
    { name: "Legacy", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "bg-brand-light/80 backdrop-blur-xl py-4 shadow-2xl shadow-black/5" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <img
            src="https://muhammadh29.sg-host.com/wp-content/uploads/2025/10/cropped-cropped-Ponce-Tree-Services-logo.png"
            alt="Ponce Tree Services"
            className={`h-12 md:h-16 w-auto object-contain transition-all duration-700 ${
              isScrolled ? "brightness-100" : "brightness-0 invert"
            }`}
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:text-brand-accent ${
                isScrolled ? "text-brand-dark" : "text-brand-light"
              }`}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="tel:2145194046"
            className={`btn-premium flex items-center gap-3 ${
              isScrolled 
                ? "bg-brand-dark text-brand-light hover:bg-brand-accent" 
                : "bg-brand-light text-brand-dark hover:bg-brand-accent hover:text-brand-light"
            }`}
          >
            <Phone size={14} />
            214.519.4046
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden transition-colors duration-500 ${
            isScrolled ? "text-brand-dark" : "text-brand-light"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 bg-brand-dark z-50 flex flex-col p-12 lg:hidden"
        >
          <div className="flex justify-between items-center mb-24">
            <img
              src="https://muhammadh29.sg-host.com/wp-content/uploads/2025/10/cropped-cropped-Ponce-Tree-Services-logo.png"
              alt="Logo"
              className="h-12 brightness-0 invert"
            />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-light">
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif italic text-brand-light hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:2145194046"
              className="mt-12 text-2xl font-sans font-bold text-brand-accent"
            >
              214.519.4046
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
