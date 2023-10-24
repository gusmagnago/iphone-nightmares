import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import JackOLantern from '../JackOLantern/JackOLantern';
import Bat from '../Bat/Bat';
import Cat from '../Cat/Cat';
// import Bat from '../Bat/Bat';

type GLTFResult = GLTF & {
  nodes: {
    sphere: THREE.Mesh;
    star: THREE.Mesh;
    jackBody: THREE.Mesh;
    jackEye: THREE.Mesh;
    jackMouth: THREE.Mesh;
    wing: THREE.Mesh;
    teeth: THREE.Mesh;
    mouth: THREE.Mesh;
    horn: THREE.Mesh;
    body: THREE.Mesh;
    moon: THREE.Mesh;
  };
};

export default function BackgroundImage() {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	const jackOLantern = [
		{
			position: new THREE.Vector3(-30, -70, 15),
			rotation: new THREE.Euler(0, 0.35, 0),
			scale: 0.78,
		},
		{
			position: new THREE.Vector3(-10, -90, 25),
			rotation: new THREE.Euler(0, -0.17, 0),
			scale: 0.49,
		},
	];

	const bats = [
		{
			position: new THREE.Vector3(-48.82, 4.98, 25),
			rotation: new THREE.Euler(0.24, 0.77, -0.14),
			scale: 0.23,
		},
		{
			position: new THREE.Vector3(-66.73, 62.47, 20),
			rotation: new THREE.Euler(0.58, 0.62, -0.08),
			scale: 0.23,
		},
		{
			position: new THREE.Vector3(78.3, -72.8, 20),
			rotation: new THREE.Euler(-0.39, -0.83, -0.3),
			scale: 0.23,
		},
		{
			position: new THREE.Vector3(28.72, 31.04, 20),
			rotation: new THREE.Euler(0.36, -0.75, 0.25),
			scale: 0.23,
		},
	];

	const catPosition = new THREE.Vector3(7.91, -56.92, 8.39);

	return (
		<group name='background' position={[0, 0, -500]}>
			{jackOLantern.map(({ position, rotation, scale }, index) => (
				<JackOLantern
					position={position}
					rotation={rotation}
					scale={scale}
					key={index}
				/>
			))}
			{bats.map(({ position, rotation, scale }, index) => (
				<Bat
					position={position}
					rotation={rotation}
					scale={scale}
					key={index}
				/>
			))}
			<mesh
				name='moon'
				geometry={nodes.moon.geometry}
				material={nodes.moon.material}
				castShadow
				receiveShadow
				position={[-70, 0, 2]}
			/>
			<Cat position={catPosition} rotation={undefined} scale={0} />
		</group>
	);
}
