import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    batWing: THREE.Mesh;
    teeth: THREE.Mesh;
    batMouth: THREE.Mesh;
    batEar: THREE.Mesh;
    batEye: THREE.Mesh;
    batBody: THREE.Mesh;
  };
};

const Bat = ({ position, rotation, scale }: ObjectI) => {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	return (
		<group position={position} rotation={rotation} scale={scale}>
			<mesh
				geometry={nodes.batWing.geometry}
				material={nodes.batWing.material}
				castShadow
				receiveShadow
				position={[-30, 10, -15]}
			/>
			<mesh
				geometry={nodes.batWing.geometry}
				material={nodes.batWing.material}
				castShadow
				receiveShadow
				position={[30, 10, 0]}
				rotation={[-Math.PI, 0, -Math.PI]}
			/>
			<mesh
				geometry={nodes.teeth.geometry}
				material={nodes.teeth.material}
				castShadow
				receiveShadow
				position={[5.5, 2.5, 33.2]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[1, 0.62, 1]}
			>
				<meshBasicMaterial color={'#FFFFFF'} />
			</mesh>
			<mesh
				name='teeth2'
				geometry={nodes.teeth.geometry}
				material={nodes.teeth.material}
				castShadow
				receiveShadow
				position={[-5.5, 2.5, 33.2]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[1, 0.62, 1]}
			>
				<meshBasicMaterial color={'#FFFFFF'} />
			</mesh>
			<mesh
				geometry={nodes.batMouth.geometry}
				material={nodes.batMouth.material}
				castShadow
				receiveShadow
				position={[-0.45, -4.5, 38.89]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[2.12, 1, 1]}
			/>
			<group position={[0, 10.5, 37.51]}>
				<mesh
					geometry={nodes.batEye.geometry}
					material={nodes.batEye.material}
					castShadow
					receiveShadow
					position={[8.5, 0, 0]}
				/>
				<mesh
					geometry={nodes.batEye.geometry}
					material={nodes.batEye.material}
					castShadow
					receiveShadow
					position={[-8.5, 0, 0]}
				/>
			</group>
			<mesh
				geometry={nodes.batEar.geometry}
				material={nodes.batEar.material}
				castShadow
				receiveShadow
				position={[-19.49, 39.5, 24.26]}
			/>
			<mesh
				geometry={nodes.batEar.geometry}
				material={nodes.batEar.material}
				castShadow
				receiveShadow
				position={[19.73, 39.5, 24.28]}
			/>
			<mesh
				geometry={nodes.batBody.geometry}
				material={nodes.batBody.material}
				castShadow
				receiveShadow
				position={[0, -4.5, -3.03]}
			/>
		</group>
	);
};

export default Bat;
