import React from "react";
import { Phone, Mail } from "lucide-react";

const socialLinks = [
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
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 12 22 8.5 21.6 6.9C21.3 5.5 20.2 4.3 18.8 4C17.1 3.6 12 3.6 12 3.6C12 3.6 6.9 3.6 5.2 4C3.8 4.3 2.7 5.5 2.4 6.9C2 8.5 2 12 2 12C2 12 2 15.5 2.4 17.1C2.7 18.5 3.8 19.7 5.2 20C6.9 20.4 12 20.4 12 20.4C12 20.4 17.1 20.4 18.8 20C20.2 19.7 21.3 18.5 21.6 17.1C22 15.5 22 12 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.75 15.5L15.5 12L9.75 8.5V15.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/yourprofile/",
    svg: (
      <svg
        height="20"
        width="20"
        viewBox="0 0 511.998 511.998"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M405.017,52.467C369.774,18.634,321.001,0,267.684,0C186.24,0,136.148,33.385,108.468,61.39
          c-34.114,34.513-53.675,80.34-53.675,125.732c0,56.993,23.839,100.737,63.76,117.011c2.68,1.098,5.377,1.651,8.021,1.651
          c8.422,0,15.095-5.511,17.407-14.35c1.348-5.071,4.47-17.582,5.828-23.013c2.906-10.725,0.558-15.884-5.78-23.353
          c-11.546-13.662-16.923-29.817-16.923-50.842c0-62.451,46.502-128.823,132.689-128.823c68.386,0,110.866,38.868,110.866,101.434
          c0,39.482-8.504,76.046-23.951,102.961c-10.734,18.702-29.609,40.995-58.585,40.995c-12.53,0-23.786-5.147-30.888-14.121
          c-6.709-8.483-8.921-19.441-6.222-30.862c3.048-12.904,7.205-26.364,11.228-39.376c7.337-23.766,14.273-46.213,14.273-64.122
          c0-30.632-18.832-51.215-46.857-51.215c-35.616,0-63.519,36.174-63.519,82.354c0,22.648,6.019,39.588,8.744,46.092
          c-4.487,19.01-31.153,132.03-36.211,153.342c-2.925,12.441-20.543,110.705,8.618,118.54c32.764,8.803,62.051-86.899,65.032-97.713
          c2.416-8.795,10.869-42.052,16.049-62.495c15.817,15.235,41.284,25.535,66.064,25.535c46.715,0,88.727-21.022,118.298-59.189
          c28.679-37.02,44.474-88.618,44.474-145.282C457.206,127.983,438.182,84.311,405.017,52.467z"/>
      </svg>
    ),
  }
];




const TopBar = () => {
  return (
    <div className="container bg-primary-600 rounded-xl md:rounded-3xl text-white py-1 px-2 sm:px-4 md:px-6 my-3 md:my-5 w-full">
      {/* Desktop view */}
      <div className="hidden md:flex gap-4 lg:gap-8 justify-between py-3">
        {/* Left side: Email and Phone */}
        <div className="flex items-center flex-wrap gap-3 lg:gap-6">
          <div className="flex items-center gap-2">
            <Mail className="text-white" size={18} />
            <span className="font-light text-sm lg:text-base">contact@ndesign.ma</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-white" size={18} />
            <span className="font-light text-sm lg:text-base">+212 6 900 900 75</span>
          </div>
        </div>

        {/* Right side: Social Links */}
        <div className="flex gap-2 lg:gap-3">
          {socialLinks.map(({ name, href, svg }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
              {svg}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex justify-between items-center py-2">
        {/* Left side: Phone and Email */}
        <div className="flex items-center gap-3">
          <a href="tel:+212690090075" className="hover:opacity-70 transition">
            <Phone className="text-white" size={16} />
          </a>
          <a href="mailto:contact@ndesign.ma" className="hover:opacity-70 transition">
            <Mail className="text-white" size={16} />
          </a>
        </div>
        {/* Right side: Social icons */}
        <div className="flex items-center gap-2">
          {socialLinks.map(({ name, href, svg }) => (
            <a 
              key={name} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-70 transition"
            >
              {React.cloneElement(svg, {
                width: 16,
                height: 16,
              })}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;