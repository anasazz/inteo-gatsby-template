import React, { useState, useEffect } from "react";
import ReactCompareImage from "react-compare-image";
import heroImg from "../images/archi/archi1.png";
import afterImg from "../images/archi/archi2.png";

const InteriorDesignHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setIsLoaded(true);

    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const getFontSize = () => {
    if (windowWidth === null) return "2rem";
    return windowWidth < 640 ? "2.5rem" : windowWidth < 1024 ? "4rem" : "6rem";
  };

  const getImageHeight = () => {
    if (windowWidth === null) return "450px";
    return windowWidth < 640 ? "300px" : windowWidth < 1024 ? "450px" : "600px";
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

      {/* Image comparison container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          transition: "all 1s ease",
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(2rem)",
          borderRadius: "1rem",
          overflow: "hidden",
          border: "1px solid #333",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
          height: getImageHeight()
        }}
      >
        <div style={{ height: "100%", position: "relative", }}>
          <ReactCompareImage
            leftImage={heroImg}
            rightImage={afterImg}
            sliderLineWidth={4}
            sliderLineColor="white"
            handleSize={40}
            handle={
              <div style={{ 
                width: "40px", 
                height: "40px", 
                border: "3px solid white", 
                borderRadius: "50%", 
                backgroundColor: "white",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "bold",
                color: "black"
              }}>
                ←→
              </div>
            }
            leftImageLabel="AVANT"
            rightImageLabel="APRÈS"
            leftImageCss={{ 
              objectFit: "cover", 
              height: "100%"
            }}
            rightImageCss={{ 
              objectFit: "cover", 
              height: "100%"
            }}
            sliderPositionPercentage={0.5}
            hover={false}
            vertical={false}
          />
        </div>
      </div>
      
      {/* Optional instruction text */}
      <div style={{ textAlign: "center", marginTop: "1rem", color: "#aaa", fontSize: "14px" }}>
        Faites glisser pour comparer les designs avant et après
      </div>
    </div>
  );
};

export default InteriorDesignHero;