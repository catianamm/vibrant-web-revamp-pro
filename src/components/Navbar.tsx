
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Vibrant</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-brand-purple_light transition-colors font-medium text-white">
              Home
            </a>
            <a href="#services" className="hover:text-brand-purple_light transition-colors font-medium text-white">
              Serviços
            </a>
            <a href="#portfolio" className="hover:text-brand-purple_light transition-colors font-medium text-white">
              Portfólio
            </a>
            <a href="#about" className="hover:text-brand-purple_light transition-colors font-medium text-white">
              Sobre
            </a>
            <a href="#contact" className="hover:text-brand-purple_light transition-colors font-medium text-white">
              Contato
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-primary hover:opacity-90">
              Comece Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-md shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-3">
              <a
                href="#home"
                className="py-2 px-4 hover:bg-white/5 rounded-md text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="py-2 px-4 hover:bg-white/5 rounded-md text-white"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                className="py-2 px-4 hover:bg-white/5 rounded-md text-white"
                onClick={() => setIsOpen(false)}
              >
                Portfólio
              </a>
              <a
                href="#about"
                className="py-2 px-4 hover:bg-white/5 rounded-md text-white"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="py-2 px-4 hover:bg-white/5 rounded-md text-white"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
              <Button className="bg-gradient-primary hover:opacity-90">
                Comece Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
