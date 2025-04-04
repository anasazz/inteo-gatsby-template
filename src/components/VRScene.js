import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { assets } from '../assets';
// Import A-Frame components at the top level instead of dynamically
import { Scene, Entity } from 'aframe-react';

// Memoized VRScene component to prevent unnecessary re-renders
const VRScene = memo(({ selectedScene, sceneKeys }) => {
  const [sceneSrcs, setSceneSrcs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadErrors, setLoadErrors] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [thumbnailsVisible, setThumbnailsVisible] = useState(true);
  
  // Camera rotation state
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 });
  
  // Auto-rotation state
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRotateIntervalRef = useRef(null);
  
  // Touch tracking for swipe gestures
  const touchStartRef = useRef({ x: 0, y: 0 });
  const isTouchingRef = useRef(false);
  const sceneRef = useRef(null);
  
  // Use ref to track if the component is mounted
  const isMounted = useRef(true);
  
  // Keep track of the current scene to avoid duplicate loading
  const currentSceneRef = useRef(selectedScene);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, []);

  // Set default scene on first load
  useEffect(() => {
    if (!selectedScene && sceneKeys.length > 0) {
      loadScene(sceneKeys[0]);
    } else if (selectedScene) {
      loadScene(selectedScene);
    }
  }, []);

  // Handle scene changes with debounce
  useEffect(() => {
    // Prevent unnecessary loading if the scene hasn't changed
    if (selectedScene && selectedScene !== currentSceneRef.current) {
      console.log(`Selected scene changed: ${selectedScene}`);
      currentSceneRef.current = selectedScene;
      loadScene(selectedScene);
    }
  }, [selectedScene]);

  // Auto-rotation effect
  useEffect(() => {
    if (autoRotate) {
      // Start auto-rotation
      autoRotateIntervalRef.current = setInterval(() => {
        setCameraRotation(prev => ({
          ...prev,
          y: prev.y - 0.2 // Slow auto-rotation, counterclockwise
        }));
      }, 30); // Update every 30ms for smooth animation
    } else {
      // Stop auto-rotation
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
    }
    
    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, [autoRotate]);

  // Setup touch and mouse event handlers
  useEffect(() => {
    const sceneElement = sceneRef.current;
    if (!sceneElement) return;

    // Touch events for mobile
    const handleTouchStart = (e) => {
      // Stop auto-rotation when user interacts
      setAutoRotate(false);
      
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
        isTouchingRef.current = true;
      }
    };

    const handleTouchMove = (e) => {
      if (!isTouchingRef.current || e.touches.length !== 1) return;

      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      
      // Calculate deltas (how far the touch has moved)
      const deltaX = touchX - touchStartRef.current.x;
      const deltaY = touchY - touchStartRef.current.y;
      
      // Update camera rotation based on touch movement
      // Note: we invert deltaX for a more natural feeling rotation
      setCameraRotation(prev => ({
        y: prev.y - deltaX * 0.2, // Horizontal rotation (looking left/right)
        x: Math.max(-90, Math.min(90, prev.x + deltaY * 0.2)) // Vertical rotation (looking up/down), clamped to prevent over-rotation
      }));
      
      // Update touch start position for the next move event
      touchStartRef.current = {
        x: touchX,
        y: touchY
      };
    };

    const handleTouchEnd = () => {
      isTouchingRef.current = false;
      
      // Restart auto-rotation after a delay if user isn't interacting
      setTimeout(() => {
        if (!isTouchingRef.current) {
          setAutoRotate(true);
        }
      }, 3000); // Resume auto-rotation after 3 seconds of inactivity
    };

    // Mouse events for desktop
    const handleMouseDown = (e) => {
      // Stop auto-rotation when user interacts
      setAutoRotate(false);
      
      touchStartRef.current = {
        x: e.clientX,
        y: e.clientY
      };
      isTouchingRef.current = true;
    };

    const handleMouseMove = (e) => {
      if (!isTouchingRef.current) return;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate deltas
      const deltaX = mouseX - touchStartRef.current.x;
      const deltaY = mouseY - touchStartRef.current.y;
      
      // Update camera rotation based on mouse movement
      setCameraRotation(prev => ({
        y: prev.y - deltaX * 0.2,
        x: Math.max(-90, Math.min(90, prev.x + deltaY * 0.2))
      }));
      
      // Update mouse position for next move
      touchStartRef.current = {
        x: mouseX,
        y: mouseY
      };
    };

    const handleMouseUp = () => {
      isTouchingRef.current = false;
      
      // Restart auto-rotation after a delay if user isn't interacting
      setTimeout(() => {
        if (!isTouchingRef.current) {
          setAutoRotate(true);
        }
      }, 3000); // Resume auto-rotation after 3 seconds of inactivity
    };

    // Add event listeners
    sceneElement.addEventListener('touchstart', handleTouchStart);
    sceneElement.addEventListener('touchmove', handleTouchMove);
    sceneElement.addEventListener('touchend', handleTouchEnd);
    
    sceneElement.addEventListener('mousedown', handleMouseDown);
    sceneElement.addEventListener('mousemove', handleMouseMove);
    sceneElement.addEventListener('mouseup', handleMouseUp);
    sceneElement.addEventListener('mouseleave', handleMouseUp);

    // Cleanup
    return () => {
      sceneElement.removeEventListener('touchstart', handleTouchStart);
      sceneElement.removeEventListener('touchmove', handleTouchMove);
      sceneElement.removeEventListener('touchend', handleTouchEnd);
      
      sceneElement.removeEventListener('mousedown', handleMouseDown);
      sceneElement.removeEventListener('mousemove', handleMouseMove);
      sceneElement.removeEventListener('mouseup', handleMouseUp);
      sceneElement.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  const loadScene = useCallback(async (sceneKey) => {
    if (!isMounted.current) return;
    console.log(`Loading scene: ${sceneKey}`);
    
    setLoading(true);
    setLoadProgress(0);
    setLoadErrors([]);
    
    // Reset camera rotation when changing scenes
    setCameraRotation({ x: 0, y: 0 });
    
    // Reset auto-rotation
    setAutoRotate(true);
    
    // Force UI to update before proceeding with loading
    await new Promise(resolve => setTimeout(resolve, 50));
    
    try {
      const sceneAssets = assets[sceneKey];
      console.log(`Assets for ${sceneKey}:`, sceneAssets);

      if (!sceneAssets || !sceneAssets.length) {
        console.error(`No assets found for scene: ${sceneKey}`);
        setLoadErrors(prev => [...prev, `No assets found for ${sceneKey}`]);
        setLoading(false);
        return;
      }

      const totalAssets = sceneAssets.length;
      let loadedCount = 0;
      const loadedAssets = [];

      // Add a minimum loading time to ensure progress is visible
      const minLoadingTime = 1000; // 1 second (reduced from 1.5s)
      const startTime = Date.now();

      // Preload images in parallel instead of sequentially
      const loadPromises = sceneAssets.map(async (asset, index) => {
        try {
          // Using a small delay between starting loads to avoid overwhelming the browser
          await new Promise(resolve => setTimeout(resolve, index * 50));
          
          if (!isMounted.current) return null;
          
          const module = await import(`../images/3602/${sceneKey}/${asset}`);
          console.log(`Successfully loaded: ${asset}`);
          
          if (!isMounted.current) return null;
          
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / totalAssets) * 100));
          
          return module.default;
        } catch (error) {
          console.error(`Error loading asset ${asset}:`, error);
          if (isMounted.current) {
            setLoadErrors((prev) => [...prev, asset]);
          }
          return null;
        }
      });

      // Wait for all images to load
      const results = await Promise.all(loadPromises);
      
      if (!isMounted.current) return;
      
      // Filter out any null results
      const validAssets = results.filter(Boolean);
      
      // Ensure minimum loading time for UI feedback
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
      }

      if (!isMounted.current) return;
      
      setSceneSrcs(validAssets);
      // Set the first image as selected by default
      if (validAssets.length > 0) {
        setSelectedImage(validAssets[0]);
      }
      console.log(`Loaded assets for ${sceneKey}:`, validAssets);
    } catch (error) {
      console.error("Error loading scene images:", error);
    } finally {
      if (isMounted.current) {
        setLoading(false);
        console.log("Loading complete for scene:", sceneKey);
      }
    }
  }, []);

  const handleImageClick = useCallback((src) => {
    setSelectedImage(src);
  }, []);

  const toggleThumbnails = useCallback(() => {
    setThumbnailsVisible(prev => !prev);
  }, []);

  const toggleAutoRotate = useCallback(() => {
    setAutoRotate(prev => !prev);
  }, []);

  // Add swipe instructions for mobile users
  const [showInstructions, setShowInstructions] = useState(true);
  
  useEffect(() => {
    if (showInstructions) {
      const timer = setTimeout(() => {
        setShowInstructions(false);
      }, 5000); // Hide instructions after 5 seconds
      
      return () => clearTimeout(timer);
    }
  }, [showInstructions]);

  return (
    <div className="w-full h-full relative bg-black overflow-hidden" ref={sceneRef}>
      {/* Control buttons */}
      <div className="absolute top-4 right-4 z-30 flex gap-2">
        {/* Auto-rotate toggle */}
        <button 
          onClick={toggleAutoRotate}
          className={`bg-gray-900/80 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors ${
            autoRotate ? 'ring-2 ring-blue-400' : ''
          }`}
          aria-label={autoRotate ? "Désactiver la rotation automatique" : "Activer la rotation automatique"}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
          </svg>
        </button>
        
        {/* Toggle Thumbnails Button */}
        <button 
          onClick={toggleThumbnails}
          className={`bg-gray-900/80 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors ${
            thumbnailsVisible ? 'ring-2 ring-blue-400' : ''
          }`}
          aria-label={thumbnailsVisible ? "Masquer les miniatures" : "Afficher les miniatures"}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </button>
      </div>

      {/* VR Scene - Now with camera controlled by swipe gestures and auto-rotation */}
      <Scene embedded className="w-full h-full">
        {/* Camera with rotation based on touch/swipe inputs */}
        <Entity primitive="a-camera" look-controls="enabled: false" position="0 0 0" rotation={`${cameraRotation.x} ${cameraRotation.y} 0`} />
        
        {/* Sky sphere with the 360 image */}
        <Entity
          primitive="a-sky"
          src={selectedImage || sceneSrcs[0]}
        />
      </Scene>

      {/* Swipe Instructions - shows briefly when scene loads */}
      {showInstructions && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white px-4 py-3 rounded-lg text-center z-40 backdrop-blur-sm max-w-xs">
          <div className="flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="font-medium">Vue 360°</span>
          </div>
          <p className="text-sm">Balayez pour regarder autour de vous</p>
        </div>
      )}

      {/* Preview thumbnails containers - Made always visible on mobile */}
      {/* Mobile: Thumbnail bar at bottom - ALWAYS visible */}
      <div className="absolute bottom-0 left-0 right-0 md:hidden z-20">
        <div className="bg-black/70 backdrop-blur-sm pt-3 pb-4 px-2">
          <p className="text-white text-xs mb-1 px-2 opacity-80">Sélectionnez une vue:</p>
          
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
                    alt={`Vue ${index + 1}`}
                    width="64"
                    height="64"
                    loading="lazy"
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

      {/* Desktop/Tablet: Sidebar with thumbnails - Only shown when thumbnailsVisible is true */}
      {thumbnailsVisible && (
        <div className="hidden md:block absolute top-0 left-0 bottom-0 z-20">
          <div className="h-full bg-black/50 backdrop-blur-sm p-3 flex flex-col">
            <p className="text-white text-xs mb-3 opacity-80">Vues:</p>
            
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
                      alt={`Vue ${index + 1}`}
                      width="80"
                      height="80"
                      loading="lazy"
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
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white font-medium">Chargement {loadProgress}%</p>
          </div>
        </div>
      )}

      {/* Display load errors if any */}
      {loadErrors.length > 0 && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-red-500 bg-black/80 backdrop-blur-sm p-3 rounded-lg shadow-lg max-w-xs sm:max-w-md z-30">
          <p className="font-medium">Échec du chargement:</p>
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
});

// Add a display name for debugging
VRScene.displayName = 'VRScene';

export default VRScene;