import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import {  OrbitControls } from '@react-three/drei';

import Scene from './components/Scene/Scene';
import Glow from './effects/Glow/Glow';
import { palette } from './materials';
import { ModelsContextProvider } from './context/modelsContext';

export const App = () => {
	return (
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
				<ModelsContextProvider>
					<color attach='background' args={['#eaeaea']} />
					<hemisphereLight intensity={2} color={palette.glass} />
					<directionalLight color={palette.light} intensity={1.5} position={[1, 1, 1]}/>
					<Scene />
					<OrbitControls />
					<Glow
						luminanceThreshold={0.1}
						luminanceSmoothing={10}
						intensity={0.3}
					/>
				</ModelsContextProvider>
			</Canvas>
		</Suspense>
	);
};

export default App;
