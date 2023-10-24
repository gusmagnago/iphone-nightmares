import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    screen: THREE.Mesh;
    backScreen: THREE.Mesh;
    border: THREE.Mesh;
  };
};

const Iphone = () => {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;
	return (
		<group name='iphone' position={[0, 0, -500]}>
			<group
				name='container'
				position={[0.1, 7.83, 4.12]}
				rotation={[0, 0, 0]}
				scale={1}
			>
				<group
					name='body'
					position={[10.63, 18.95, 0.83]}
					scale={[1.02, 1.02, 1.04]}
				>
					<mesh
						name='screen'
						geometry={nodes.screen.geometry}
						material={nodes.screen.material}
						castShadow
						receiveShadow
						position={[-9.92, -19.34, 7]}
						scale={[0.98, 0.98, 0.96]}
					/>
					{/* <mesh
            name='backScreen'
            geometry={nodes.backScreen.geometry}
            material={nodes.backScreen.material}
            castShadow
            receiveShadow
            position={[-10.04, -18.07, -9.56]}
            rotation={[-Math.PI, 0, Math.PI]}
            scale={[1.08, 1.08, 1.06]}
          /> */}
					<mesh
						name='border'
						geometry={nodes.border.geometry}
						material={nodes.border.material}
						castShadow
						receiveShadow
						position={[-10.12, -18.72, 0.34]}
						rotation={[-Math.PI, 0, -Math.PI]}
						scale={[-1.08, 1.08, 8.16]}
					/>
				</group>
			</group>
		</group>
	);
};

export default Iphone;
