import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import JackOLantern from '../JackOLantern/JackOLantern';

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
				<mesh
					name="Text1"
					geometry={nodes.dateInfoText.geometry}
					material={nodes.dateInfoText.material}
					castShadow
					receiveShadow
					position={[9.94, 0, -4.15]}
				/>
				<JackOLantern {...weatherJack}/>
			</group>
			<mesh
				name="dateInfoGlass"
				geometry={nodes.dateInfoGlass.geometry}
				material={nodes.dateInfoGlass.material}
				castShadow
				receiveShadow
				position={[0.15, 2.79, 0]}
			/>
			<mesh
				name="calendarBG"
				geometry={nodes.calendarBG.geometry}
				material={nodes.calendarBG.material}
				castShadow
				receiveShadow
				position={[0, 6.8, -1.25]}
			/>
			<mesh
				name="calendarDate"
				geometry={nodes.calendarDateText.geometry}
				material={nodes.calendarDateText.material}
				castShadow
				receiveShadow
				position={[-22.11, 41.29, 0.13]}
			/>
			<mesh
				name="calendarDate1"
				geometry={nodes.calendarDate.geometry}
				material={nodes.calendarDate.material}
				castShadow
				receiveShadow
				position={[-24.34, 33.36, -0.86]}
			/>
			<mesh
				name="calendarText"
				geometry={nodes.calendarText.geometry}
				material={nodes.calendarText.material}
				castShadow
				receiveShadow
				position={[-0.34, -51.64, -1.25]}
			/>
		</group>
  
	);
};

export default Calendar;