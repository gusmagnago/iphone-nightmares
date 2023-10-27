import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import Bat from '../Bat/Bat';
import MeshComponent from '../MeshComponent/MeshComponent';

type GLTFResult = GLTF & {
  nodes: {
    weatherCloud1: THREE.Mesh;
    weatherCloud2: THREE.Mesh;
    weatherCloud3: THREE.Mesh;
    weatherCloud4: THREE.Mesh;
    weatherCloud5: THREE.Mesh;
    weatherCloud6: THREE.Mesh;
    weatherCloud7: THREE.Mesh;
    weatherMoon: THREE.Mesh;
    weatherBG: THREE.Mesh;
    weatherValItem1: THREE.Mesh;
    weatherValItem2: THREE.Mesh;
    weatherCity: THREE.Mesh;
    weatherDesc: THREE.Mesh;
    weatherTitle: THREE.Mesh;
  };
};

const Weather = ({ position }: ObjectPos) => {

	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	const weatherBats = [
		{
			position: new THREE.Vector3(4.97, 13.57, 22.43),
			rotation: new THREE.Euler(-0.21, 0.64, -0.5),
			scale: 0.07,
		},
		{
			position: new THREE.Vector3(16.04, 1.84, 19.79),
			rotation: new THREE.Euler(0.29, -0.49, 0),
			scale: 0.07,
		},
	];

	return (
		<group name='weatherGroup' position={position}>
			<group name='weatherGroupClouds' position={[13.5, 11.9, 6.5]}>
				<group name='cloudsGroup' position={[3.75, -1.5, 2]}>
					<group name='clouds'>
						<group name='weatherClouds' position={[-18.5, -6, 6]}>
							<MeshComponent
								name='weatherCloud'
								geometry={nodes.weatherCloud1.geometry}
								material={nodes.weatherCloud1.material}
								meshPosition={[-0.25, -3.5, -4]}
							/>
							<MeshComponent
								geometry={nodes.weatherCloud2.geometry}
								material={nodes.weatherCloud2.material}
								meshPosition={[0.75, -3.5, 0]}
							/>
							<MeshComponent
								geometry={nodes.weatherCloud3.geometry}
								material={nodes.weatherCloud3.material}
								meshPosition={[-1.25, 0.5, -2]}
							/>
							<MeshComponent
								geometry={nodes.weatherCloud4.geometry}
								material={nodes.weatherCloud4.material}
								meshPosition={[5.75, -1.5, -4]}
							/>
						</group>
						<group name='weatherClouds1'>
							<MeshComponent
								name='weatherCloud4'
								geometry={nodes.weatherCloud5.geometry}
								material={nodes.weatherCloud5.material}
								meshPosition={[-8.75, 0.5, -2.5]}
							/>
							<MeshComponent
								name='weatherCloud5'
								geometry={nodes.weatherCloud6.geometry}
								material={nodes.weatherCloud6.material}
								meshPosition={[1.25, 0.5, -4.5]}
							/>
							<MeshComponent
								name='weatherCloud6'
								geometry={nodes.weatherCloud7.geometry}
								material={nodes.weatherCloud7.material}
								meshPosition={[1.25, -3.5, -3.5]}
							/>
						</group>
					</group>
				</group>
				<MeshComponent
					geometry={nodes.weatherMoon.geometry}
					material={nodes.weatherMoon.material}
					meshPosition={[-8, 0, -5]}
				/>
			</group>
			{weatherBats.map(({ position, rotation, scale }, index) => (
				<Bat
					position={position}
					rotation={rotation}
					scale={scale}
					key={index}
				/>
			))}
			<MeshComponent
				name='weatherBG'
				geometry={nodes.weatherBG.geometry}
				material={nodes.weatherBG.material}
				meshPosition={[0, 6.8, -1.25]}
			/>
			<group name='weatherValGroup' position={[-11.34, 32.36, 5]}>
				<MeshComponent
					geometry={nodes.weatherValItem1.geometry}
					material={nodes.weatherValItem1.material}
					meshPosition={[9, -1, 0]}
				/>
				<MeshComponent
					geometry={nodes.weatherValItem2.geometry}
					material={nodes.weatherValItem2.material}
					meshPosition={[-9, 1, 0]}
				/>
			</group>
			<MeshComponent
				geometry={nodes.weatherCity.geometry}
				material={nodes.weatherCity.material}
				meshPosition={[-21.7, 43.36, 5]}
			/>
			<MeshComponent
				geometry={nodes.weatherDesc.geometry}
				material={nodes.weatherDesc.material}
				meshPosition={[-7.6, -19.64, 5]}
			/>
			<MeshComponent
				geometry={nodes.weatherTitle.geometry}
				material={nodes.weatherTitle.material}
				meshPosition={[3.3, -51.64, -1.25]}
			/>
		</group>
	);
};

export default Weather;
