import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Analytics } from '@vercel/analytics/react';


import {  OrbitControls } from '@react-three/drei';

import Scene from './components/Scene/Scene';
import { palette } from './materials';


export const App = () => {
	return (
		<>
			<Suspense fallback={null}>
				<Canvas
					camera={{
						far: 10000,
						position: new THREE.Vector3(0, -10, 500),
					}}
					dpr={window.devicePixelRatio}
					shadows
					flat
					linear
				>
					<color attach='background' args={['#eaeaea']} />
					<hemisphereLight intensity={2} color={palette.glass} />
					<directionalLight color={palette.light} intensity={1.5} position={[1, 1, 1]}/>
					<Scene />
					<OrbitControls />
				</Canvas>
			</Suspense>
			<Analytics />
		</>
	);
};

export default App;
