import React, { useState } from 'react';

import './App.css';

import { OrbitControls, Plane, Stars } from '@react-three/drei';
import { Canvas, useFrame } from 'react-three-fiber';
import { Car } from '../models/Car';
import { movement } from '../Logic/Car/movement';

const App = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	document.onkeydown = (e) => movement(x, setX, y, setY, e);

	return (
		<Canvas>
			{/* light*/}
			<ambientLight intensity={1} />

			<spotLight position={[10, 15, 10]} angle={0.3} intensity={1} />

			{/* objects*/}

			<Plane args={[100, 100]} rotation-x={-Math.PI / 2}></Plane>

			<Car position={[y, 0.25, x]} />

			<Stars />
			{/* camera*/}

			<OrbitControls />
		</Canvas>
	);
};

export default App;
