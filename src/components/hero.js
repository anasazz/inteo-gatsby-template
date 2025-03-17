import React, { useState, useEffect } from "react";
import CtaButton from "../images/cta-button.svg";
import VRScene from "./VRScene";
import { assets } from "../assets";

const places = Object.keys(assets);

const Hero = () => {
  const [selectedScene, setSelectedScene] = useState(places.length > 0 ? places[0] : null);
  const [selectedAsset, setSelectedAsset] = useState(null);

  // If the places list changes (unlikely but for completeness)
  useEffect(() => {
    if (places.length > 0 && !places.includes(selectedScene)) {
      setSelectedScene(places[0]);
    }
  }, [places]);

  const handleSceneSelect = (place, e) => {
    // Prevent default button behavior to avoid page scrolling
    e.preventDefault();
    e.stopPropagation();
    
    setSelectedScene(place);
    setSelectedAsset(null);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col text-center gap-4 py-20 bg-red-400">
          <h1 className="text-12xl md:text-display-xl sm:text-display-sm font-semibold ">
            Nous concevons votre Espace <br />
            <span className="text-gray-600 text-2xl font-light">
              Et nous la bâtissons pour vous.
            </span>
          </h1>
        </div>
      </div>

      {/* Scene Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-3 my-6 ">
        {places.map((place, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full border-2 hover:border-gray-600 
              capitalize
                      hover:bg-neutral-500 hover:text-white ${
                      selectedScene === place 
                        ? 'bg-[#293040] text-white border-blue-600' 
                        : 'bg-gray-200 text-black bg-neutral-10000'
                      }`}
            onClick={(e) => handleSceneSelect(place, e)}
            type="button" // Explicitly set type to button to prevent form submission behavior
          >
            {place}
          </button>
        ))}
      </div>

      {/* Display the selected VR Scene */}
      <div className="relative">
        <div className="w-full h-[700px] relative">
          <VRScene selectedScene={selectedScene} selectedAsset={selectedAsset} />
        </div>
      </div>
    </div>
  );
};

export default Hero;