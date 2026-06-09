import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsappUrl, whatsappMessage } from "../constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll monitoring for high-end blurred header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = () => {
    window.open(getWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  };

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "O que inclui", href: "#o-que-inclui" },
    { name: "Nichos", href: "#nichos" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Oferta", href: "#oferta" },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand/Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-gold-600 to-gold-400 flex items-center justify-center shadow-lg shadow-gold-500/20 text-black font-bold text-lg font-display">
              T
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
              Top <span className="text-[#D4AF37]">Site</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 font-medium text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleCtaClick}
              className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 shadow-lg shadow-gold-500/10 hover:shadow-gold-500/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 cursor-pointer"
            >
              Quero meu site
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={handleCtaClick}
              className="bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold p-2 rounded-lg text-xs flex items-center gap-1 shadow-md shadow-gold-500/10 active:scale-95"
            >
              <MessageCircle size={14} />
              Quero meu site
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-1"
              aria-label="Alternar Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A]/95 border-b border-white/10 text-white overflow-hidden backdrop-blur-md"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-gray-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800 px-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleCtaClick();
                  }}
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-black font-bold py-3 px-4 rounded-lg text-sm text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle size={18} />
                  Quero Meu Site Especial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
