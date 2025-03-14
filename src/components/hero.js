import React, { useState } from "react";
import CtaButton from "../images/cta-button.svg";
import VRScene from "./VRScene";
import { assets } from "../assets";
// import VRScene from "./VRScene";



const places = Object.keys(assets); // Get keys of the assets as the first selection options

const Hero = () => {
  const [selectedScene, setSelectedScene] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col text-center gap-4 py-20 bg-red-400">
          <h1 className="text-12xl md:text-display-xl sm:text-display-sm font-semibold ">
            Nous concevons votre <br />
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
            className="px-6 py-2 rounded-md bg-gray-200 text-black border-2 hover:border-gray-600 
                      bg-neutral-10000 hover:bg-neutral-500 hover:text-white"
            onClick={() => {
              setSelectedScene(place);
              setSelectedAsset(null); // Reset asset selection when scene changes
            }}
          >
            {place}
          </button>
        ))}
      </div>

      {/* Display Nested Asset Selection */}
      {/* {selectedScene && (
        <div className="my-4">
          <h3 className="text-lg font-semibold">Select an image from {selectedScene}</h3>
          <div className="flex flex-wrap justify-center gap-3 my-6">
            {assets[selectedScene].map((asset, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-md bg-gray-200 text-black border-2 hover:border-gray-600 
                          bg-neutral-10000 hover:bg-neutral-500 hover:text-white"
                onClick={() => setSelectedAsset(asset)}
              >
                {asset}
              </button>
            ))}
          </div>
        </div>
      )} */}

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
