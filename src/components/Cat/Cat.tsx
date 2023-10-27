import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import MeshComponent from '../MeshComponent/MeshComponent';

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
			<group name='hands' position={[0.85, -35, 32.25]}>
				<MeshComponent
					geometry={nodes.hand1.geometry}
					material={nodes.hand1.material}
					meshPosition={[-20.07, 0.49, 18.26]}
					meshRotation={[Math.PI / 2, 0, 0]}
				/>
				<MeshComponent
					geometry={nodes.hand1.geometry}
					material={nodes.hand1.material}
					meshPosition={[20.07, 0.49, 18.26]}
					meshRotation={[Math.PI / 2, 0, 0]}
				/>
			</group>
			<group name='catEyes' position={[-15, 0, 27]}>
				<MeshComponent
					geometry={nodes.catEye.geometry}
					material={nodes.catEye.material}
					meshPosition={[0, 0, 0]}
				/>
				<MeshComponent
					geometry={nodes.catEye.geometry}
					material={nodes.catEye.material}
					meshPosition={[30, 0, 0]}
				/>
			</group>
			<group name='stripes' position={[0.42, 24.5, 11.93]}>
				<MeshComponent
					geometry={nodes.stripe1.geometry}
					material={nodes.stripe1.material}
					meshPosition={[8.71, 0, 0]}
					meshRotation={[0, Math.PI / 2, 0]}
				/>
				<MeshComponent
					geometry={nodes.stripe1.geometry}
					material={nodes.stripe1.material}
					meshPosition={[0.2, 0, 0]}
					meshRotation={[0, Math.PI / 2, 0]}
				/>
				<MeshComponent
					geometry={nodes.stripe1.geometry}
					material={nodes.stripe1.material}
					meshPosition={[-8.71, 0, 0]}
					meshRotation={[0, Math.PI / 2, 0]}
				/>
			</group>
			<group name='catMouthGroup' position={[0.42, -21.38, 20.72]}>
				<MeshComponent
					name='catMouthBlack'
					geometry={nodes.catMouthBlack.geometry}
					material={nodes.catMouthBlack.material}
					meshPosition={[-0.12, -0.47, -0.99]}
				/>
				<group name='teethGroup' position={[0.06, -0.63, 5.35]}>
					<MeshComponent
						name='teeth1'
						geometry={nodes.teeth.geometry}
						material={nodes.teeth.material}
						meshPosition={[7.43, 0, 0]}
						meshRotation={[Math.PI, Math.PI / 2, 0]}
						meshScale={1}
					/>
					<MeshComponent
						name='teeth2'
						geometry={nodes.teeth.geometry}
						material={nodes.teeth.material}
						meshPosition={[-7.43, 0, 0]}
						meshRotation={[Math.PI, Math.PI / 2, 0]}
						meshScale={1}
					/>
				</group>
				<MeshComponent
					name='catMouthRed'
					geometry={nodes.catMouthRed.geometry}
					material={nodes.catMouthRed.material}
					meshPosition={[0, 2.32, 0.91]}
				/>
			</group>
			<group name='catEarsGroup' position={[-20.03, 29.5, 16.01]}>
				<MeshComponent
					name='catEar'
					geometry={nodes.catEar.geometry}
					material={nodes.catEar.material}
					meshPosition={[40, 0, 0]}
					meshRotation={[-Math.PI, 8, -Math.PI]}
				/>
				<MeshComponent
					geometry={nodes.catEar.geometry}
					material={nodes.catEar.material}
					meshPosition={[0, 0, 0]}
					meshRotation={[-Math.PI, -8, -Math.PI]}
				/>
			</group>
			<MeshComponent
				name='catBody'
				geometry={nodes.catBody.geometry}
				material={nodes.catBody.material}
				meshPosition={[0.42, -7, -5.99]}
			/>
		</group>
	);
};

export default Cat;
