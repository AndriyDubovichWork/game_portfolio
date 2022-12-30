import React from 'react';

import './App.css';

import { OrbitControls, Stars, useFBX } from '@react-three/drei';
import { Canvas, useLoader } from 'react-three-fiber';

import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Car = () => {
  const fbx = useFBX('/assets/cars/Models/car_1.fbx');
  const colorMap = useLoader(TextureLoader, '/assets/cars/Textures/car_1.png');
  return (
    <mesh>
      <primitive object={fbx} />
      <meshStandardMaterial map={colorMap} attach={'material'} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.9} />
      <spotLight position={[10, 15, 10]} angle={0.3} intensity={1} />
      <OrbitControls />
      <Car />
      <Stars />
    </Canvas>
  );
};

export default App;
