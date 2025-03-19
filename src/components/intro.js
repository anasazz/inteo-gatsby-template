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
        
        {/* Left side - Text content */}
        <div className={`w-full md:w-1/2 pt-24 md:pt-0 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              ELEVATE
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              BEYOND
            </span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-8"></div>
          
          <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 leading-relaxed">
            Where vision meets innovation
          </p>

          {/* Call to Action button */}
          <div className="mt-12">
            <a 
              href="#discover" 
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium rounded-lg text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover More
            </a>
          </div>
        </div>
        
        {/* Right side - Video */}
        <div className={`w-full md:w-1/2 h-full relative transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <video 
              className="w-2/3 h-full object-cover float-start bg-white rounded-3xl"
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
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;