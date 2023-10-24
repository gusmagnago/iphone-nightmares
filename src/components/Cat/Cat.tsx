import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    hand1: THREE.Mesh;
    catEye: THREE.Mesh;
    stripe1: THREE.Mesh;
    catMouthBlack: THREE.Mesh;
    catEar: THREE.Mesh;
    catBody: THREE.Mesh;
    teeth: THREE.Mesh;
    catMouthRed: THREE.Mesh;
  };
};

const Cat = ({ position }: ObjectI) => {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	return (
		<group name='catComp' position={position}>
			<group name='hands' position={[0.85, -33.32, 32.25]}>
				<mesh
					name='hand1'
					geometry={nodes.hand1.geometry}
					material={nodes.hand1.material}
					castShadow
					receiveShadow
					position={[-20.07, 0.49, 18.26]}
					rotation={[Math.PI / 2, 0, 0]}
				/>
				<mesh
					name='hand2'
					geometry={nodes.hand1.geometry}
					material={nodes.hand1.material}
					castShadow
					receiveShadow
					position={[20.07, 0.49, 18.26]}
					rotation={[Math.PI / 2, 0, 0]}
				/>
			</group>
			<group name='catEyes' position={[-13.61, 2, 27.15]}>
				<mesh
					name='catEye'
					geometry={nodes.catEye.geometry}
					material={nodes.catEye.material}
					castShadow
					receiveShadow
					position={[28.06, 0, 0]}
				/>
				<mesh
					name='catEye1'
					geometry={nodes.catEye.geometry}
					material={nodes.catEye.material}
					castShadow
					receiveShadow
				/>
			</group>
			<group name='stripes' position={[0.42, 24.5, 11.93]}>
				<mesh
					name='stripe1'
					geometry={nodes.stripe1.geometry}
					material={nodes.stripe1.material}
					castShadow
					receiveShadow
					position={[8.71, 0, 0]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<mesh
					name='strip2'
					geometry={nodes.stripe1.geometry}
					material={nodes.stripe1.material}
					castShadow
					receiveShadow
					position={[0.2, 0, 0]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<mesh
					name='strip3'
					geometry={nodes.stripe1.geometry}
					material={nodes.stripe1.material}
					castShadow
					receiveShadow
					position={[-8.71, 0, 0]}
					rotation={[0, Math.PI / 2, 0]}
				/>
			</group>
			<group name='catMouthGroup' position={[0.42, -21.38, 20.72]}>
				<mesh
					name='catMouthBlack'
					geometry={nodes.catMouthBlack.geometry}
					material={nodes.catMouthBlack.material}
					castShadow
					receiveShadow
					position={[-0.12, -0.47, -0.99]}
				/>
				<group name='teethGroup' position={[0.06, -0.63, 5.35]}>
					<mesh
						name='teeth1'
						geometry={nodes.teeth.geometry}
						material={nodes.teeth.material}
						castShadow
						receiveShadow
						position={[7.43, 0, 0]}
						rotation={[Math.PI, Math.PI / 2, 0]}
						scale={1}
					/>
					<mesh
						name='teeth2'
						geometry={nodes.teeth.geometry}
						material={nodes.teeth.material}
						castShadow
						receiveShadow
						position={[-7.43, 0, 0]}
						rotation={[Math.PI, Math.PI / 2, 0]}
						scale={1}
					/>
				</group>
				<mesh
					name='catMouthRed'
					geometry={nodes.catMouthRed.geometry}
					material={nodes.catMouthRed.material}
					castShadow
					receiveShadow
					position={[0, 2.32, 0.91]}
				/>
			</group>
			<group name='catEarsGroup' position={[-20.03, 29.5, 16.01]}>
				<mesh
					name='catEar'
					geometry={nodes.catEar.geometry}
					material={nodes.catEar.material}
					castShadow
					receiveShadow
					position={[42.14, 0, 0]}
					rotation={[-Math.PI, 1.48, -Math.PI]}
				/>
				<mesh
					name='catEar1'
					geometry={nodes.catEar.geometry}
					material={nodes.catEar.material}
					castShadow
					receiveShadow
					rotation={[0, 1.22, 0]}
					scale={1}
				/>
			</group>
			<mesh
				name='catBody'
				geometry={nodes.catBody.geometry}
				material={nodes.catBody.material}
				castShadow
				receiveShadow
				position={[0.42, -7, -5.99]}
			/>
		</group>
	);
};

export default Cat;
