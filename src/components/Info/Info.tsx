import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import MeshComponent from '../MeshComponent/MeshComponent';

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
		<group name='topInfos' position={[0, 250, 0]}>
			<group name='seringes' position={[101.91, 0, -2.66]}>
				<MeshComponent
					geometry={nodes.circle1.geometry}
					material={nodes.circle1.material}
					meshPosition={[-14.82, -1.51, 3.69]}
					meshRotation={[0, 0, Math.PI / 2]}
					meshScale={0.39}
				/>
				<MeshComponent
					geometry={nodes.circle2.geometry}
					material={nodes.circle2.material}
					meshPosition={[-14.82, 1.85, 3.69]}
					meshRotation={[0, 0, Math.PI / 2]}
					meshScale={0.39}
				/>
				<MeshComponent
					geometry={nodes.seringeBody.geometry}
					material={nodes.seringeBody.material}
					meshPosition={[8.36, 0, 4.31]}
					meshRotation={[Math.PI / 2, Math.PI / 2, 0]}
					meshScale={0.39}
				/>
				<MeshComponent
					geometry={nodes.seringeBodyTop.geometry}
					material={nodes.seringeBodyTop.material}
					meshPosition={[6.67, 0, 4.31]}
					meshRotation={[-Math.PI / 2, -Math.PI / 2, 0]}
					meshScale={0.39}
				/>
				<MeshComponent
					geometry={nodes.seringeBodyBottom.geometry}
					material={nodes.seringeBodyBottom.material}
					meshPosition={[-12.22, 0, 4.31]}
					meshRotation={[-Math.PI / 2, -Math.PI / 2, 0]}
					meshScale={0.39}
				/>
				<MeshComponent
					geometry={nodes.blood.geometry}
					material={nodes.blood.material}
					meshPosition={[-9.45, 0, 4.31]}
					meshRotation={[Math.PI / 2, 0, Math.PI / 2]}
					meshScale={0.39}
				/>
				<MeshComponent
					geometry={nodes.seringeBodyTube.geometry}
					material={nodes.seringeBodyTube.material}
					meshPosition={[-3.14, 0, 4.31]}
					meshRotation={[Math.PI / 2, 0, Math.PI / 2]}
					meshScale={0.39}
				/>
			</group>
			<group name='hourCoffin' position={[-92.27, 0, -2.63]}>
				<MeshComponent
					geometry={nodes.hour.geometry}
					material={nodes.hour.material}
					meshPosition={[-9.2, 0, -2.63]}
				/>
				<MeshComponent
					geometry={nodes.coffin.geometry}
					material={nodes.coffin.material}
					meshPosition={[14.95, 3.87, -2.37]}
					meshRotation={[0, 0, 2.44]}
					meshScale={1}
				/>
			</group>
		</group>
	);
};

export default Info;
