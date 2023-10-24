import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import {  OrthographicCamera } from '@react-three/drei';

import Scene from './components/Scene/Scene';

export const App = () => {
	return (
		<>
			<Suspense fallback={null}>
				<Canvas>
					<color attach='background' args={['#e5e5e5']} />
					<hemisphereLight intensity={1.5} color='#eaeaea' />
					<Scene />
					<OrthographicCamera makeDefault={true} far={10000} near={-50000} />
					{/* <OrbitControls
                        autoRotateSpeed={0.85}
                        zoomSpeed={0.75}
                        minPolarAngle={Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                        /> */}
				</Canvas>
			</Suspense>
		</>
	);
};

export default App;
