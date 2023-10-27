import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import MeshComponent from '../MeshComponent/MeshComponent';

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
			<MeshComponent
				geometry={nodes.batWing.geometry}
				material={nodes.batWing.material}
				meshPosition={[-30, 10, -15]}
			/>
			<MeshComponent
				geometry={nodes.batWing.geometry}
				material={nodes.batWing.material}
				meshPosition={[30, 10, 0]}
				meshRotation={[-Math.PI, 0, -Math.PI]}
			/>
			<MeshComponent
				geometry={nodes.teeth.geometry}
				material={nodes.teeth.material}
				meshPosition={[5.5, 2.5, 33.2]}
				meshRotation={[Math.PI / 2, 0, 0]}
				meshScale={[1, 0.62, 1]}
			>
				<meshBasicMaterial color={'#FFFFFF'} />
			</MeshComponent>
			<MeshComponent
				name='teeth2'
				geometry={nodes.teeth.geometry}
				material={nodes.teeth.material}
				meshPosition={[-5.5, 2.5, 33.2]}
				meshRotation={[Math.PI / 2, 0, 0]}
				meshScale={[1, 0.62, 1]}
			>
				<meshBasicMaterial color={'#FFFFFF'} />
			</MeshComponent>
			<MeshComponent
				geometry={nodes.batMouth.geometry}
				material={nodes.batMouth.material}
				meshPosition={[-0.45, -4.5, 38.89]}
				meshRotation={[0, Math.PI / 2, 0]}
				meshScale={[2.12, 1, 1]}
			/>
			<group position={[0, 10.5, 37.51]}>
				<MeshComponent
					geometry={nodes.batEye.geometry}
					material={nodes.batEye.material}
					meshPosition={[8.5, 0, 0]}
				/>
				<MeshComponent
					geometry={nodes.batEye.geometry}
					material={nodes.batEye.material}
					meshPosition={[-8.5, 0, 0]}
				/>
			</group>
			<MeshComponent
				geometry={nodes.batEar.geometry}
				material={nodes.batEar.material}
				meshPosition={[-19.49, 39.5, 24.26]}
			/>
			<MeshComponent
				geometry={nodes.batEar.geometry}
				material={nodes.batEar.material}
				meshPosition={[19.73, 39.5, 24.28]}
			/>
			<MeshComponent
				geometry={nodes.batBody.geometry}
				material={nodes.batBody.material}
				meshPosition={[0, -4.5, -3.03]}
			/>
		</group>
	);
};

export default Bat;
