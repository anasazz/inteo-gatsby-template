import React, { useEffect, useState } from "react";
import newvideo from "../videos/video.mp4";
import secondvideo from "../videos/bg-vid.mp4";

const LandingHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Check screen size initially and add resize listener
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // 768px is standard md breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Select video based on screen size
  const videoSource = isLargeScreen ? secondvideo : newvideo;

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
      <p>
        
      </p>
      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24">
        
        {/* Right side - Video */}
        <div className={`w-full h-full relative transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center overflow-hidden">
            {/* Video container with rounded corners */}
            <div 
              className="w-full h-full md:h-full lg:h-full relative" 
              style={{ 
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              <video 
                className="w-full h-auto max-w-none md:max-h-full lg:max-h-full object-contain float-start bg-white"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="/api/placeholder/2160/3840"
                style={{ borderRadius: '16px' }}
              >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video overlay gradient - inside container to respect rounded corners */}
              <div 
                className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80 md:to-black/60"
                style={{ borderRadius: '16px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;