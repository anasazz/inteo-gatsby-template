import React, { useState, useEffect } from 'react';
import { assets } from '../assets';

const sceneKeys = Object.keys(assets);

const VRScene = ({ selectedScene }) => {
  const [sceneSrcs, setSceneSrcs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadErrors, setLoadErrors] = useState([]); // Track errors
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  useEffect(() => {
    if (selectedScene) {
      console.log(`Selected scene: ${selectedScene}`);
      loadScene(selectedScene);
    }
  }, [selectedScene]);

  const loadScene = async (sceneKey) => {
    console.log(`Loading scene: ${sceneKey}`);
    setLoading(true);
    setLoadErrors([]); // Reset errors on new scene load
    try {
      const sceneAssets = assets[sceneKey];
      console.log(`Assets for ${sceneKey}:`, sceneAssets);

      const loadedAssets = await Promise.all(
        sceneAssets.map(async (asset) => {
          console.log(`Loading asset: ${asset} for scene ${sceneKey}`);
          try {
            const module = await import(`../images/3602/${sceneKey}/${asset}`); // Dynamic path based on selected scene
            console.log(`Successfully loaded: ${asset}`);
            return module.default;
          } catch (error) {
            console.error(`Error loading asset ${asset}:`, error);
            setLoadErrors((prev) => [...prev, asset]); // Add to error list
            return null; // Return null for failed assets
          }
        })
      );

      setSceneSrcs(loadedAssets.filter(Boolean)); // Filter out failed images
      console.log(`Loaded assets for ${sceneKey}:`, loadedAssets);
    } catch (error) {
      console.error("Error loading scene images:", error);
    } finally {
      setLoading(false);
      console.log("Loading complete for scene:", sceneKey);
    }
  };

  const handleImageClick = (src) => {
    setSelectedImage(src); // Update selected image when clicked
  };

  if (loading) {
    return (
      <div className="w-full h-[700px] flex items-center justify-center">
        <p>Loading...</p>
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
            onClick={() => loadScene(scene)}
            className="px-4 py-2 bg-gray-700 text-white rounded"
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

      {/* Preview images for the selected scene */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex gap-4">
        {sceneSrcs.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Scene Image ${index}`}
            className="w-32 h-32 object-cover border-2 border-white cursor-pointer"
            onClick={() => handleImageClick(src)} // Click to change the scene image
          />
        ))}
      </div>

      {/* Display load errors if any */}
      {loadErrors.length > 0 && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-red-500">
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
