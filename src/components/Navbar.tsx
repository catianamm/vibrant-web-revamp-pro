
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
          ? "bg-black/80 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">
              <img src="https://vibrantss.com/wp-content/uploads/2025/05/logo_vibrants_texto.png" alt="VibrantSs" className="h-1/2" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <a href="#services" className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors">
              Projetos
            </a>
            <a href="#about" className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors">
              Quem Somos
            </a>
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-3">
              <a
                href="#services"
                className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projetos
              </a>
              <a
                href="#about"
                className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Quem Somos
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
