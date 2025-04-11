
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        {
          "bg-background/80 backdrop-blur-md shadow-sm": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-foreground">
          Biyaluxe
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-biyaluxe-purple transition-colors duration-300">Home</a>
            <a href="#about" className="text-foreground hover:text-biyaluxe-purple transition-colors duration-300">About</a>
            <a href="#products" className="text-foreground hover:text-biyaluxe-purple transition-colors duration-300">Products</a>
            <a href="#features" className="text-foreground hover:text-biyaluxe-purple transition-colors duration-300">Why Us</a>
            <a href="#testimonials" className="text-foreground hover:text-biyaluxe-purple transition-colors duration-300">Reviews</a>
            <a href="#contact" className="text-foreground hover:text-biyaluxe-purple transition-colors duration-300">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
        
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <button 
            onClick={toggleMenu} 
            className="text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <a 
            href="#home" 
            className="text-2xl font-medium text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-2xl font-medium text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#products" 
            className="text-2xl font-medium text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
            onClick={toggleMenu}
          >
            Products
          </a>
          <a 
            href="#features" 
            className="text-2xl font-medium text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
            onClick={toggleMenu}
          >
            Why Us
          </a>
          <a 
            href="#testimonials" 
            className="text-2xl font-medium text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
            onClick={toggleMenu}
          >
            Reviews
          </a>
          <a 
            href="#contact" 
            className="text-2xl font-medium text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
