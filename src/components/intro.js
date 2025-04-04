import React, { useEffect, useState } from "react";
import newvideo from "../videos/video.mp4";

const LandingHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
      
      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24">
        

        
        {/* Right side - Video */}
        <div className={`w-full  h-full relative transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <video 
              className="w-full h-full object-cover float-start bg-white rounded-3xl"
              autoPlay 
              muted 
              loop 
              playsInline
              poster="/api/placeholder/2160/3840"
            >
              {/* In a real implementation, you would replace this with your actual video source */}
              <source src={newvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80 md:to-black/60"></div>
          </div>
        </div>
      </div>
      
     
    </section>
  );
};

export default LandingHero;