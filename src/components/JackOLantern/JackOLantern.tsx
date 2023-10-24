import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

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
					<mesh
						name='sphere'
						geometry={nodes.sphere.geometry}
						material={nodes.sphere.material}
						castShadow
						receiveShadow
						position={[-0.06, 0.19, -0.16]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={1.01}
					/>
					<mesh
						name='star'
						geometry={nodes.star.geometry}
						material={nodes.star.material}
						castShadow
						receiveShadow
						position={[0, -3.79, 0]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={1.01}
					/>
				</group>
				<mesh
					geometry={nodes.jackBody.geometry}
					material={nodes.jackBody.material}
					castShadow
					receiveShadow
					position={[-0.08, -7, -23]}
				>
					<meshBasicMaterial color={'#f27d14'} />
				</mesh>
			</group>
		</group>
	);
};

export default JackOLantern;
