import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ChevronDown } from "lucide-react"; // Added ChevronDown icon
import Logo from "../images/logos/logo-gray.png";
import Button from "./button";
import TopBar from "./TopBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Ensure the code only runs on the client side
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []); // Empty dependency array to run only once on mount


  const navigation = [
    { name: "Propositions", href: "propositions" },
    { name: "Services", href: "services" },
    { name: "Nos réalisations", href: "works" },
  ];

  return (
    <div className="bg-black pt-2">
        <TopBar />
      <header
        className={`fixed bg-black  left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2  bg-black backdrop-blur-sm shadow-lg top-0"
            : "py-4 bg-black top-15"
        }`}
      >
        
        <div className="container mx-auto px-4 lg:px-4 bg-black">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <div className="flex-1 flex items-center">
              <Link to="/" className="flex items-center ">
                <img 
                  className={`transition-all ml-5 md:ml-0 lg:ml-0  duration-300 ${
                    isScrolled ? "h-8" : "h-10"
                  }`} 
                  src={Logo} 
                  alt="Architect 3D Logo" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 bg-black">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`relative px-4 cursor-pointer hover:underline py-2 text-sm font-medium transition-colors duration-200 group ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
          
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className={isScrolled ? "text-gray-800" : "text-gray-800"} />
              ) : (
                <Menu size={24} className={isScrolled ? "text-gray-800" : "text-gray-800"} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Slide Down Animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all bg-black duration-300 ease-in-out ${
            isOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className={`px-4 py-3 space-y-1 bg-black shadow-lg ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="block py-3 text-gray-800 border-b border-gray-100 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <div className="pt-2 pb-1">
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70} 
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full text-center rounded-md px-4 py-3 font-medium transition-colors" 
                  label="NOUS CONTACTER" 
                />
              </Link>
            </div> */}
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under header */}
      <div className={`transition-all duration-300 ${isScrolled ? "pt-14" : "pt-20"}`}></div>
    </div>
  );
};

export default Header;