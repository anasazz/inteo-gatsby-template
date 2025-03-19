import React, { useState, useEffect } from "react";
import heroImg from "../images/bg/nnn.png";

const InteriorDesignHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null); // Use null initially

  useEffect(() => {
    setIsLoaded(true);

    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);

      // Set the initial window width
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Determine styles only if windowWidth is available
  const getFontSize = () => {
    if (windowWidth === null) return "2rem"; // Default size before hydration
    return windowWidth < 640 ? "2.5rem" : windowWidth < 1024 ? "4rem" : "6rem";
  };

  return (
    <div 
      style={{ 
        position: "relative", 
        width: "100%", 
        backgroundColor: "black", 
        color: "white", 
        overflow: "hidden", 
        padding: "2rem 1rem",
      }}
    >
      {/* Title */}
      <div 
        style={{ 
          display: windowWidth !== null ? "block" : "none", 
          width: "100%", 
          maxWidth: "1280px", 
          margin: "0 auto 2rem auto", 
          textAlign: "center"
        }}
      >
        <p 
          style={{ 
            fontSize: getFontSize(),
            fontFamily: "Cormorant Garamond",
            lineHeight: 1.2
          }}
        >
          INTERIOR
          <br />
          DESIGN STUDIO
        </p>
      </div>

      {/* Image container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          transition: "all 1s ease",
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(2rem)"
        }}
      >
        <div 
          style={{ 
            position: "relative", 
            width: "100%", 
            height: windowWidth < 640 ? "300px" : windowWidth < 1024 ? "450px" : "600px",
            borderRadius: "1rem",
            overflow: "hidden",
            border: "1px solid #333",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
          }}
        >
          <img
            src={heroImg}
            alt="Interior Design Desktop Website"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "1rem"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignHero;
