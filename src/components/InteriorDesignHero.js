import React, { useState, useEffect } from "react";
import heroImg from "../images/bg/nnn.png";

const InteriorDesignHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      {/* Mobile title (shown below 640px) */}
      <div 
        style={{ 
          display: window.innerWidth < 640 ? "block" : "none",
          width: "100%", 
          maxWidth: "1280px", 
          margin: "0 auto 2rem auto", 
          textAlign: "center"
        }}
      >
        <p 
          style={{ 
            fontSize: "2.5rem", // 40px
            fontFamily: "Cormorant Garamond",
            lineHeight: 1.2
          }}
        >
          INTERIOR
          <br />
          DESIGN STUDIO
        </p>
      </div>

      {/* Tablet title (shown between 640px and 1024px) */}
      <div 
        style={{ 
          display: window.innerWidth >= 640 && window.innerWidth < 1024 ? "block" : "none",
          width: "100%", 
          maxWidth: "1280px", 
          margin: "0 auto 2rem auto", 
          textAlign: "center"
        }}
      >
        <p 
          style={{ 
            fontSize: "4rem", // 64px
            fontFamily: "Cormorant Garamond",
            lineHeight: 1.2
          }}
        >
          INTERIOR
          <br />
          DESIGN STUDIO
        </p>
      </div>

      {/* Desktop title (shown above 1024px) */}
      <div 
        style={{ 
          display: window.innerWidth >= 1024 ? "block" : "none",
          width: "100%", 
          maxWidth: "1280px", 
          margin: "0 auto 2rem auto", 
          textAlign: "center"
        }}
      >
        <p 
          style={{ 
            fontSize: "6rem", // 96px
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
            height: window.innerWidth < 640 ? "300px" : window.innerWidth < 1024 ? "450px" : "600px",
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