import React, { useState, useEffect, useCallback } from "react";
import CtaButton from "../images/cta-button.svg";
import VRScene from "./VRScene";
import { assets } from "../assets";
import LandingHero from "./intro";

const places = Object.keys(assets);

const Hero = () => {
  const [selectedScene, setSelectedScene] = useState(places.length > 0 ? places[0] : null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // If the places list changes (unlikely but for completeness)
  useEffect(() => {
    if (places.length > 0 && !places.includes(selectedScene)) {
      setSelectedScene(places[0]);
    }
  }, [places]);

  // Memoize the handler to prevent recreating it on each render
  const handleSceneSelect = useCallback((place) => {
    // Only update if the selection actually changed
    if (selectedScene !== place) {
      setSelectedScene(place);
      setSelectedAsset(null);
      
      // After state update, scroll to the vrSceneContainer element
      setTimeout(() => {
        const sceneElement = document.getElementById('vrSceneContainer');
        if (sceneElement) {
          sceneElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200); // Short delay to ensure state updates are processed
    }
    
    setMenuOpen(false); // Close dropdown on selection (mobile)
    return false;
  }, [selectedScene]);

  return (
    <div id='works' className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header with title */}
      <div className="pt-6 pb-2 px-4 text-center">
        <h1 className="text-2xl text-display-xl text-white sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Expérience de Visite Virtuelle
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-xl text-display-xs mx-auto">
        Explorez des vues immersives à 360° de nos lieux emblématiques.
        </p>
      </div>

      {/* Mobile: Scene Selection Dropdown */}
      <div className="md:hidden px-4 my-3 relative z-10">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white shadow-lg"
          type="button"
        >
          <span className="capitalize font-medium">{selectedScene || "Sélectionner un lieu"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${menuOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-gray-800 rounded-lg border border-gray-700 shadow-xl z-20 max-h-60 overflow-y-auto styled-scrollbar">
            {places.map((place, index) => (
              <button
                key={index}
                className={`w-full text-left hover:border-white border-b-neutral-100 px-4 py-3 rounded-md capitalize transition-colors ${
                  selectedScene === place
                    ? "bg-blue-600 text-white"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
                onClick={() => handleSceneSelect(place)}
                type="button"
              >
                {place}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Scene Selection Buttons */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 my-4 px-4">
        {places.map((place, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all 
                      capitalize hover:shadow-lg ${
                      selectedScene === place 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md' 
                        : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                      }`}
            onClick={() => handleSceneSelect(place)}
            type="button"
          >
            {place}
          </button>
        ))}
      </div>

      {/* VR Scene Container */}
      <div id="vrSceneContainer" className="relative overflow-hidden rounded-lg mx-auto mb-8 shadow-2xl max-w-7xl">
        <div className="w-full h-[600px] md:h-[650px] lg:h-[800px] relative rounded-lg overflow-hidden">
          <VRScene 
            selectedScene={selectedScene} 
            selectedAsset={selectedAsset}
            sceneKeys={places}
          />
        </div>
        
        {/* Info overlay - optional */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none md:block hidden">
          <div className="container mx-auto">
            <h3 className="text-lg md:text-xl font-medium capitalize">{selectedScene}</h3>
            <p className="text-sm text-gray-300">Naviguez dans la vue à 360° en faisant glisser ou en utilisant les contrôles</p>
          </div>
        </div>
      </div>

      {/* Add custom styles for scrollbars */}
      <style jsx global>{`
        .styled-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.1);
          border-radius: 10px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 10px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Hero;