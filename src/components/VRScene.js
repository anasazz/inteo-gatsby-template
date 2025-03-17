import React, { useState, useEffect } from 'react';
import { assets } from '../assets';

const sceneKeys = Object.keys(assets);

const VRScene = ({ selectedScene }) => {
  const [sceneSrcs, setSceneSrcs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadErrors, setLoadErrors] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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

  if (loading) {
    return (
      <div className="w-full h-[700px] flex flex-col items-center justify-center bg-black">
        <p className="mb-4 text-lg font-medium text-white">Loading scene...</p>
        <div className="w-64 h-3 bg-black rounded-full overflow-hidden border border-white">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${loadProgress}%` }}
          ></div>
        </div>
        <p className="mt-4 font-bold text-white">{loadProgress}%</p>
      </div>
    );
  }

  const { Scene, Entity } = require('aframe-react');

  return (
    <div style={{ width: '100%', height: '700px', position: 'relative' }}>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
        {sceneKeys.map((scene) => (
          <button
            key={scene}
            onClick={(e) => {
              e.preventDefault(); // Prevent default button behavior
              loadScene(scene);
            }}
            className={`px-4 py-2 rounded text-white ${
              scene === selectedScene ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            {scene}
          </button>
        ))}
      </div>

      {/* VR Scene */}
      <Scene embedded style={{ width: '100%', height: '100%' }}>
        <Entity primitive="a-sky" src={selectedImage || sceneSrcs[0]} />
        <Entity primitive="a-camera" position={{ x: 0, y: 1.6, z: 0 }}>
          <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} />
        </Entity>
      </Scene>

      {/* Preview images - vertical layout on left side */}
      <div className="absolute top-5 left-5 flex flex-col gap-4 max-h-[600px] overflow-y-auto">
        {sceneSrcs.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Scene Image ${index}`}
            className={`w-24 h-24 object-cover border-2 rounded-lg cursor-pointer transition-all ${
              selectedImage === src ? 'border-yellow-500 border-4' : ' border-white hover:border-gray-300'
            }`}
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {/* Display load errors if any */}
      {loadErrors.length > 0 && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-red-500 bg-white bg-opacity-75 p-2 rounded">
          <p>Error loading the following images:</p>
          <ul>
            {loadErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VRScene;