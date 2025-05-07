
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
          ? "bg-white bg-opacity-95 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-brand-purple">Vibrant</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-brand-purple transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="hover:text-brand-purple transition-colors font-medium">
              Services
            </a>
            <a href="#portfolio" className="hover:text-brand-purple transition-colors font-medium">
              Portfolio
            </a>
            <a href="#about" className="hover:text-brand-purple transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="hover:text-brand-purple transition-colors font-medium">
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="bg-brand-purple hover:bg-brand-purple/90">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-3">
              <a
                href="#home"
                className="py-2 px-4 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="py-2 px-4 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="py-2 px-4 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="py-2 px-4 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="py-2 px-4 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-brand-purple hover:bg-brand-purple/90">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
