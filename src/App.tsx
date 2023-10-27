import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {  OrbitControls, OrthographicCamera } from '@react-three/drei';

import Scene from './components/Scene/Scene';
import Glow from './effects/Glow/Glow';

export const App = () => {
	return (
		<>
			<Suspense fallback={null}>
				<Canvas
					camera={{
						// far: 10000,
						// near: 0,
						position: new THREE.Vector3(0, -10, 500),
					}}
					dpr={window.devicePixelRatio}
					shadows
					flat
					linear
				>
					<color attach='background' args={['#e5e5e5']} />
					<hemisphereLight intensity={3} color='#eaeaea' />
					<Scene />
					{/* <OrthographicCamera makeDefault={true} far={10000} near={-50000} /> */}
					<OrbitControls />
					<Glow
						luminanceThreshold={0.1}
						luminanceSmoothing={10}
						intensity={0.3}
					/>
				</Canvas>
			</Suspense>
		</>
	);
};

export default App;
