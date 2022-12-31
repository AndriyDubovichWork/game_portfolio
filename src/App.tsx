import React from 'react';

import './App.css';

import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import { Car } from './models/Car';
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
