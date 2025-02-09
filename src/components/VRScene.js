import React, { useState, useEffect } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import 'aframe-extras';
import gelatoImage from '../images/360/gelato.jpeg';
import gelatoImage2 from '../images/360/gelato2.jpeg';
import gelatoImage3 from '../images/360/gelato5.jpeg';
import arrowTexture from '../images/360/arrow.png';

const VRScene = () => {
  const [currentScene, setCurrentScene] = useState(gelatoImage);
  const [arrows, setArrows] = useState({
    [gelatoImage]: [
      { id: 1, position: { x: 1, y: -3, z: -4 }, rotation: { x: -90, y: -28, z: 25 }, targetScene: gelatoImage2 }
    ],
    [gelatoImage2]: [
      { id: 2, position: { x: 2, y: -2, z: 3 }, rotation: { x: -90, y: 0, z: 0 }, targetScene: gelatoImage3 },
      { id: 3, position: { x: -2, y: -3, z: -5 }, rotation: { x: -90, y: 180, z: 5 }, targetScene: gelatoImage }
    ],
    [gelatoImage3]: [
      { id: 4, position: { x: 0, y: -4, z: 5 }, rotation: { x: -90, y: 180, z: 25 }, targetScene: gelatoImage2 }
    ]
  });
  const [selectedArrow, setSelectedArrow] = useState(null);

  // Add arrow function
  const addArrow = (image) => {
    const newArrow = {
      id: Date.now(),
      position: { x: 0, y: 0.01, z: -3 },
      rotation: { x: -90, y: 0, z: 0 },
      targetScene: image
    };
    setArrows((prevArrows) => ({
      ...prevArrows,
      [image]: [...prevArrows[image], newArrow]
    }));
  };

  // Remove arrow function
  const removeArrow = () => {
    if (selectedArrow) {
      const updatedArrows = arrows[currentScene].filter((arrow) => arrow.id !== selectedArrow.id);
      setArrows((prevArrows) => ({
        ...prevArrows,
        [currentScene]: updatedArrows
      }));
      setSelectedArrow(null);
    }
  };

  // Handle arrow click to switch scenes
  const handleArrowClick = (targetScene) => {
    setCurrentScene(targetScene);
  };

  // Copy the location of the selected arrow to clipboard
  const copyArrowLocation = (arrow) => {
    const location = {
      position: arrow.position,
      rotation: arrow.rotation
    };
    navigator.clipboard.writeText(JSON.stringify(location));
    alert('Arrow location copied to clipboard!');
  };

  // Update selected arrow's position and rotation
  const updateArrowPositionAndRotation = (position, rotation) => {
    if (selectedArrow) {
      const updatedArrows = arrows[currentScene].map((arrow) =>
        arrow.id === selectedArrow.id ? { ...arrow, position, rotation } : arrow
      );
      setArrows((prevArrows) => ({
        ...prevArrows,
        [currentScene]: updatedArrows
      }));
    }
  };

  // Persist arrows on scene change (useEffect for persistence)
  useEffect(() => {
    const saveArrowsToLocalStorage = () => {
      localStorage.setItem('arrowsData', JSON.stringify(arrows)); // Save the arrow positions and rotations
    };

    saveArrowsToLocalStorage();
  }, [arrows]);

  // Load arrows from localStorage when the component mounts (to restore positions and rotations)
  useEffect(() => {
    const loadedArrows = localStorage.getItem('arrowsData');
    if (loadedArrows) {
      setArrows(JSON.parse(loadedArrows)); // Set arrows from localStorage
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '700px', position: 'relative' }}>
      {/* UI for Arrow Controls */}
      {/* <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          zIndex: 1000
        }}
      >
        <h3>Arrow Controls</h3>
        <button onClick={() => addArrow(currentScene)}>Add Arrow</button>
        <button onClick={removeArrow}>Remove Arrow</button>

        {selectedArrow && (
          <div style={{ marginTop: '10px' }}>
            <h4>Arrow {selectedArrow.id} Live Location</h4>
            <p>
              Position: {JSON.stringify(selectedArrow.position)}<br />
              Rotation: {JSON.stringify(selectedArrow.rotation)}
            </p>
            <div>
              <label>Position (x, y, z):</label>
              <input
                type="number"
                value={selectedArrow.position.x}
                onChange={(e) => {
                  const newPosition = { ...selectedArrow.position, x: e.target.value };
                  updateArrowPositionAndRotation(newPosition, selectedArrow.rotation);
                }}
              />
              <input
                type="number"
                value={selectedArrow.position.y}
                onChange={(e) => {
                  const newPosition = { ...selectedArrow.position, y: e.target.value };
                  updateArrowPositionAndRotation(newPosition, selectedArrow.rotation);
                }}
              />
              <input
                type="number"
                value={selectedArrow.position.z}
                onChange={(e) => {
                  const newPosition = { ...selectedArrow.position, z: e.target.value };
                  updateArrowPositionAndRotation(newPosition, selectedArrow.rotation);
                }}
              />
            </div>
            <div>
              <label>Rotation (x, y, z):</label>
              <input
                type="number"
                value={selectedArrow.rotation.x}
                onChange={(e) => {
                  const newRotation = { ...selectedArrow.rotation, x: e.target.value };
                  updateArrowPositionAndRotation(selectedArrow.position, newRotation);
                }}
              />
              <input
                type="number"
                value={selectedArrow.rotation.y}
                onChange={(e) => {
                  const newRotation = { ...selectedArrow.rotation, y: e.target.value };
                  updateArrowPositionAndRotation(selectedArrow.position, newRotation);
                }}
              />
              <input
                type="number"
                value={selectedArrow.rotation.z}
                onChange={(e) => {
                  const newRotation = { ...selectedArrow.rotation, z: e.target.value };
                  updateArrowPositionAndRotation(selectedArrow.position, newRotation);
                }}
              />
            </div>
            <button onClick={() => copyArrowLocation(selectedArrow)}>Copy Location</button>
          </div>
        )}
      </div> */}

      <Scene embedded style={{ width: '100%', height: '100%' }}>
        {/* Sky background */}
        <Entity primitive="a-sky" src={currentScene} />

        {/* Camera with cursor */}
        <Entity primitive="a-camera" position={{ x: 0, y: 1.6, z: 0 }}>
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: 'scale',
              startEvents: 'click',
              from: '0.1 0.1 0.1',
              to: '1 1 1',
              dur: 150
            }}
          />
        </Entity>

        {/* Render arrows based on the current scene */}
        {arrows[currentScene]?.map((arrow) => (
          <Entity
            key={arrow.id}
            primitive="a-plane"
            src={arrowTexture} // Transparent arrow texture
            width="0.5"
            height="0.5"
            position={arrow.position}
            rotation={arrow.rotation}
            grabbable
            material={{ transparent: true, opacity: 1 }} // Add this line to make the background transparent

            draggable
            events={{
              click: () => handleArrowClick(arrow.targetScene),
              mouseenter: () => {
                const arrowEntity = document.querySelector(`[data-arrow-id="${arrow.id}"]`);
                arrowEntity.setAttribute('color', 'yellow');
                setSelectedArrow({
                  id: arrow.id,
                  position: arrowEntity.getAttribute('position'),
                  rotation: arrowEntity.getAttribute('rotation')
                });
              },
              mouseleave: () => {
                const arrowEntity = document.querySelector(`[data-arrow-id="${arrow.id}"]`);
                arrowEntity.setAttribute('color', 'white');
              }
            }}
            data-arrow-id={arrow.id} // Add a custom attribute for easy selection
          />
        ))}

        <Entity light={{ type: 'point', intensity: 1.5 }} position={{ x: 2, y: 4, z: -3 }} />
      </Scene>
    </div>
  );
};

export default VRScene;
