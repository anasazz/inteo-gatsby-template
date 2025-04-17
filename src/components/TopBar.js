import React from "react";
import { Phone, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/2120690090075",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ndesign_ma/",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 2H17C20.3 2 22 3.7 22 7V17C22 20.3 20.3 22 17 22H7C3.7 22 2 20.3 2 17V7C2 3.7 3.7 2 7 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 7.5H16.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8C9.8 8 8 9.8 8 12C8 14.2 9.8 16 12 16C14.2 16 16 14.2 16 12C16 9.8 14.2 8 12 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/NDesignma/61572939956982/",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H15C13.3 2 12 3.3 12 5V8H9V12H12V22H16V12H19L20 8H16V5.5C16 5.2 16.2 5 16.5 5H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ndesign.ma",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 20C6.2 20 4 17.8 4 15C4 12.2 6.2 10 9 10V13C7.9 13 7 13.9 7 15C7 16.1 7.9 17 9 17C10.1 17 11 16.1 11 15V4H14C14.1 5 14.5 6 15 6.9C15.6 7.8 16.5 8.5 17.5 9C18.4 9.4 19.3 9.5 20 9.5V12C19.2 12 18.3 11.9 17.5 11.6C16.6 11.3 15.8 10.8 15 10.3V15C15 17.8 12.8 20 10 20H9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const TopBar = () => {
  return (
    <div className="container bg-neutral-900 rounded-xl md:rounded-3xl text-white py-1 px-2 sm:px-4 md:px-6 my-3 md:my-5 w-full">
      {/* Desktop view */}
      <div className="hidden md:flex gap-4 lg:gap-8 items-center justify-between py-3">
        {/* Left side: Email and Phone */}
        <div className="flex items-center flex-wrap gap-3 lg:gap-6">
          <div className="flex items-center gap-2">
            <Mail className="text-white" size={38} />
            <span className="font-light text-display-xs lg:text-base">contact@ndesign.ma</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-white" size={38} />
            <span className="font-light text-display-xs lg:text-base">+212 6 900 900 75</span>
          </div>
        </div>

        {/* Right side: Social Links */}
        <div className="flex gap-2 lg:gap-3">
          {socialLinks.map(({ name, href, svg }) => (
            <a 
              key={name} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 hover:opacity-80 transition-all duration-300"
            >
              {svg}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile view - Enhanced with larger icons and better spacing */}
      <div className="md:hidden flex justify-between items-center py-3">
        {/* Left side: Phone and Email with larger icons */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:+212690090075" 
            className="hover:scale-110 hover:opacity-80 transition-all duration-300 p-1"
          >
            <Phone className="text-white" size={24} />
          </a>
          <a 
            href="mailto:contact@ndesign.ma" 
            className="hover:scale-110 hover:opacity-80 transition-all duration-300 p-1"
          >
            <Mail className="text-white" size={24} />
          </a>
        </div>
        
        {/* Right side: Social icons with larger size and better hover effect */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ name, href, svg }) => (
            <a 
              key={name} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 hover:opacity-80 transition-all duration-300 p-1"
            >
              {React.cloneElement(svg, {
                width: 24,
                height: 24,
              })}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;