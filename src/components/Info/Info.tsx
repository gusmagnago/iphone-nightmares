import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    circle1: THREE.Mesh;
    circle2: THREE.Mesh;
    seringeBack: THREE.Mesh;
    seringeBodyTop: THREE.Mesh;
    seringeBodyBottom: THREE.Mesh;
    blood: THREE.Mesh;
    seringeBodyTube: THREE.Mesh;
    seringeBody: THREE.Mesh;
    hour: THREE.Mesh;
    coffin: THREE.Mesh;
  };
};

const Info = () => {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	return (
		<group name='topInfos' position={[0, 250, -500]}>
			<group name='seringes' position={[101.91, 0, -2.66]}>
				<mesh
					name='circle1'
					geometry={nodes.circle1.geometry}
					material={nodes.circle1.material}
					castShadow
					receiveShadow
					position={[-14.82, -1.51, 3.69]}
					rotation={[0, 0, Math.PI / 2]}
					scale={0.39}
				/>
				<mesh
					name='circle2'
					geometry={nodes.circle2.geometry}
					material={nodes.circle2.material}
					castShadow
					receiveShadow
					position={[-14.82, 1.85, 3.69]}
					rotation={[0, 0, Math.PI / 2]}
					scale={0.39}
				/>
				<mesh
					name='seringeBody'
					geometry={nodes.seringeBody.geometry}
					material={nodes.seringeBody.material}
					castShadow
					receiveShadow
					position={[8.36, 0, 4.31]}
					rotation={[Math.PI / 2, Math.PI / 2, 0]}
					scale={0.39}
				/>
				<mesh
					name='seringeBodyTop'
					geometry={nodes.seringeBodyTop.geometry}
					material={nodes.seringeBodyTop.material}
					castShadow
					receiveShadow
					position={[6.67, 0, 4.31]}
					rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
					scale={0.39}
				/>
				<mesh
					name='seringeBodyBottom'
					geometry={nodes.seringeBodyBottom.geometry}
					material={nodes.seringeBodyBottom.material}
					castShadow
					receiveShadow
					position={[-12.22, 0, 4.31]}
					rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
					scale={0.39}
				/>
				<mesh
					name='blood'
					geometry={nodes.blood.geometry}
					material={nodes.blood.material}
					castShadow
					receiveShadow
					position={[-9.45, 0, 4.31]}
					rotation={[Math.PI / 2, 0, Math.PI / 2]}
					scale={0.39}
				/>
				<mesh
					name='seringeBodyTube'
					geometry={nodes.seringeBodyTube.geometry}
					material={nodes.seringeBodyTube.material}
					castShadow
					receiveShadow
					position={[-3.14, 0, 4.31]}
					rotation={[Math.PI / 2, 0, Math.PI / 2]}
					scale={0.39}
				/>
			</group>
			<group name='hourCoffin' position={[-92.27, 0, -2.63]}>
				<mesh
					name='hour'
					geometry={nodes.hour.geometry}
					material={nodes.hour.material}
					castShadow
					receiveShadow
					position={[-9.2, 0, -2.63]}
				/>
				<mesh
					name='coffin'
					geometry={nodes.coffin.geometry}
					material={nodes.coffin.material}
					castShadow
					receiveShadow
					position={[14.95, 3.87, -2.37]}
					rotation={[0, 0, 2.44]}
					scale={1}
				/>
			</group>
		</group>
	);
};

export default Info;
