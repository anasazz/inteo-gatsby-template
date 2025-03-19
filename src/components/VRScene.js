import React, { useState, useEffect } from 'react';
import { assets } from '../assets';

const sceneKeys = Object.keys(assets);

const VRScene = ({ selectedScene }) => {
  const [sceneSrcs, setSceneSrcs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadErrors, setLoadErrors] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [thumbnailsVisible, setThumbnailsVisible] = useState(true);

  // Set default scene on first load
  useEffect(() => {
    if (!selectedScene && sceneKeys.length > 0) {
      loadScene(sceneKeys[0]);
    } else if (selectedScene) {
      loadScene(selectedScene);
    }
  }, []);

  // Handle scene changes
  useEffect(() => {
    if (selectedScene) {
      console.log(`Selected scene: ${selectedScene}`);
      loadScene(selectedScene);
    }
  }, [selectedScene]);

  const loadScene = async (sceneKey) => {
    console.log(`Loading scene: ${sceneKey}`);
    setLoading(true);
    setLoadProgress(0);
    setLoadErrors([]);
    
    // Force UI to update before proceeding with loading
    await new Promise(resolve => setTimeout(resolve, 50));
    
    try {
      const sceneAssets = assets[sceneKey];
      console.log(`Assets for ${sceneKey}:`, sceneAssets);

      const totalAssets = sceneAssets.length;
      let loadedCount = 0;
      const loadedAssets = [];

      // Add a minimum loading time to ensure progress is visible
      const minLoadingTime = 1500; // 1.5 seconds
      const startTime = Date.now();

      for (const asset of sceneAssets) {
        console.log(`Loading asset: ${asset} for scene ${sceneKey}`);
        try {
          const module = await import(`../images/3602/${sceneKey}/${asset}`);
          console.log(`Successfully loaded: ${asset}`);
          loadedAssets.push(module.default);
        } catch (error) {
          console.error(`Error loading asset ${asset}:`, error);
          setLoadErrors((prev) => [...prev, asset]);
        }
        
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / totalAssets) * 100));
        
        // Add a small delay between each load to make progress more visible
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Ensure minimum loading time for UI feedback
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
      }

      setSceneSrcs(loadedAssets.filter(Boolean));
      // Set the first image as selected by default
      if (loadedAssets.length > 0) {
        setSelectedImage(loadedAssets[0]);
      }
      console.log(`Loaded assets for ${sceneKey}:`, loadedAssets);
    } catch (error) {
      console.error("Error loading scene images:", error);
    } finally {
      setLoading(false);
      console.log("Loading complete for scene:", sceneKey);
    }
  };

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const toggleThumbnails = () => {
    setThumbnailsVisible(!thumbnailsVisible);
  };

  if (loading) {
    return (
      <div className="w-full h-[700px] md:h-[500px] lg:h-[700px] flex flex-col items-center justify-center bg-gray-900">
        <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl shadow-2xl flex flex-col items-center">
          <p className="mb-4 text-lg font-medium text-white">Loading {selectedScene}...</p>
          <div className="w-64 h-3 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
              style={{ width: `${loadProgress}%` }}
            ></div>
          </div>
          <p className="mt-4 font-bold text-white">{loadProgress}%</p>
        </div>
      </div>
    );
  }

  const { Scene, Entity } = require('aframe-react');

  return (
    <div className="w-full h-[700px] md:h-[500px] lg:h-[700px] relative bg-black overflow-hidden">
      {/* Toggle Thumbnails Button */}
      <button 
        onClick={toggleThumbnails}
        className="absolute top-4 right-4 z-30 bg-gray-900/80 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        aria-label={thumbnailsVisible ? "Hide thumbnails" : "Show thumbnails"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>

      {/* VR Scene */}
      <Scene embedded className="w-full h-full">
        {/* Rotating sky animation with slow, continuous rotation */}
        <Entity
          primitive="a-sky"
          src={selectedImage || sceneSrcs[0]}
          animation="property: rotation; to: 0 360 0; dur: 60000; loop: true" // 1 minute to complete a full rotation
        />

        {/* Camera animation that moves slowly */}
        <Entity
          primitive="a-camera"
          position={{ x: 0, y: 1.6, z: -5 }}
          animation="property: position; to: 5 1.6 0; dur: 60000; easing: linear; loop: true" // Camera moves slowly in a loop
        >
          <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} />
        </Entity>
      </Scene>

      {/* Preview thumbnails containers */}
      {thumbnailsVisible && (
        <>
          {/* Mobile: Thumbnail bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 md:hidden z-20">
            <div className="bg-black/70 backdrop-blur-sm pt-3 pb-4 px-2">
              <p className="text-white text-xs mb-1 px-2 opacity-80">Select view:</p>
              
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-2 pl-2 min-w-min">
                  {sceneSrcs.map((src, index) => (
                    <div 
                      key={index}
                      className={`flex-shrink-0 relative ${
                        selectedImage === src ? 'scale-105 z-10' : ''
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Scene ${index + 1}`}
                        className={`w-16 h-16 object-cover rounded-lg ${
                          selectedImage === src 
                            ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/50' 
                            : 'opacity-70'
                        }`}
                        onClick={() => handleImageClick(src)}
                      />
                      <span className="absolute bottom-1 left-1 text-xs bg-black/60 px-1 rounded text-white">
                        {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet: Sidebar with thumbnails */}
          <div className="hidden md:block absolute top-0 left-0 bottom-0 z-20">
            <div className="h-full bg-black/50 backdrop-blur-sm p-3 flex flex-col">
              <p className="text-white text-xs mb-3 opacity-80">Views:</p>
              
              <div className="overflow-y-auto flex-grow styled-scrollbar">
                <div className="flex flex-col gap-3 pr-1">
                  {sceneSrcs.map((src, index) => (
                    <div 
                      key={index}
                      className={`relative ${
                        selectedImage === src ? 'scale-105 z-10' : ''
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Scene ${index + 1}`}
                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all ${
                          selectedImage === src 
                            ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/50' 
                            : 'opacity-70 hover:opacity-100'
                        }`}
                        onClick={() => handleImageClick(src)}
                      />
                      <span className="absolute bottom-1 left-1 text-xs bg-black/60 px-1 rounded text-white">
                        {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Display load errors if any */}
      {loadErrors.length > 0 && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-red-500 bg-black/80 backdrop-blur-sm p-3 rounded-lg shadow-lg max-w-xs sm:max-w-md z-30">
          <p className="font-medium">Failed to load:</p>
          <ul className="text-sm mt-1">
            {loadErrors.map((error, index) => (
              <li key={index} className="truncate">{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .styled-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
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

export default VRScene;