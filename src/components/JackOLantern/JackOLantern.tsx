import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import MeshComponent from '../MeshComponent/MeshComponent';

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
  };
};

const JackOLantern = ({ position, rotation, scale }: ObjectI) => {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	return (
		<group name='jack' position={position} rotation={rotation} scale={scale}>
			<group position={position}>
				<group name='topJack' position={[0.35, 18.51, -23.81]}>
					<MeshComponent
						geometry={nodes.sphere.geometry}
						material={nodes.sphere.material}
						meshPosition={[-0.06, 0.19, -0.16]}
						meshRotation={[-Math.PI / 2, 0, 0]}
						meshScale={1.01}
					/>
					<MeshComponent
						geometry={nodes.star.geometry}
						material={nodes.star.material}
						meshPosition={[0, -3.79, 0]}
						meshRotation={[-Math.PI / 2, 0, 0]}
						meshScale={1.01}
					/>
				</group>
				<MeshComponent
					geometry={nodes.jackBody.geometry}
					material={nodes.jackBody.material}
					meshPosition={[-0.08, -7, -23]}
				>
					<meshBasicMaterial color={'#f27d14'} />
				</MeshComponent>
			</group>
		</group>
	);
};

export default JackOLantern;
