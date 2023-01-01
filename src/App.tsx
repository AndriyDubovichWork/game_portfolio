import React, { useState } from 'react';

import './App.css';

import { OrbitControls, Plane, Stars } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import { Car } from './models/Car';
const App = () => {
	const [x, setX] = useState(0);
	document.addEventListener('keypress', async (e) => {
		if (e.code === 'KeyW') {
			setX(x + 0.1);
		}
	});
	return (
		<Canvas>
			<ambientLight intensity={1} />
			<spotLight position={[10, 15, 10]} angle={0.3} intensity={1} />

			<OrbitControls />

			<Plane args={[100, 100]} rotation-x={-Math.PI / 2}></Plane>
			<Car position={[0, 0.25, x]} />

			<Stars />
		</Canvas>
	);
};

export default App;
