import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import JackOLantern from '../JackOLantern/JackOLantern';
import MeshComponent from '../MeshComponent/MeshComponent';

type GLTFResult = GLTF & {
  nodes: {
    dateInfoGlass: THREE.Mesh;
    calendarBG: THREE.Mesh;
    calendarDate: THREE.Mesh;
    calendarDate1: THREE.Mesh;
    calendarText: THREE.Mesh;
    calendarDateText: THREE.Mesh;
    dateInfoText: THREE.Mesh;
  };
};

const Calendar = ({ position }: ObjectPos) => {

	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	const weatherJack = {
		position: new THREE.Vector3(-30, 1, 3),
		rotation: new THREE.Euler(0, Math.PI / 9, 0),
		scale: 0.3
	};

	return (
		<group name="calendarGroup" position={position}>
			<group name="dateInfo" position={[0.29, 2.86, 8.9]}>
				<MeshComponent
					geometry={nodes.dateInfoText.geometry}
					material={nodes.dateInfoText.material}
					meshPosition={[9.94, 0, -4.15]}
				/>
				<JackOLantern {...weatherJack}/>
			</group>
			<MeshComponent
				geometry={nodes.dateInfoGlass.geometry}
				material={nodes.dateInfoGlass.material}
				meshPosition={[0.15, 2.79, 0]}
			/>
			<MeshComponent
				geometry={nodes.calendarBG.geometry}
				material={nodes.calendarBG.material}
				meshPosition={[0, 6.8, -1.25]}
			/>
			<MeshComponent
				geometry={nodes.calendarDateText.geometry}
				material={nodes.calendarDateText.material}
				meshPosition={[-24.34, 33.36, -0.86]}
			/>
			<MeshComponent
				geometry={nodes.calendarDate.geometry}
				material={nodes.calendarDate.material}
				meshPosition={[-22.11, 41.29, 0.13]}
			/>
			<MeshComponent
				geometry={nodes.calendarText.geometry}
				material={nodes.calendarText.material}
				meshPosition={[-0.34, -51.64, 0]}
			/>
		</group>
  
	);
};

export default Calendar;