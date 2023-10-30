import * as THREE from 'three';

import JackOLantern from '../JackOLantern/JackOLantern';
import MeshComponent from '../MeshComponent/MeshComponent';

import { CalendarGLTFResult } from './Calendar.types';
import { JackOLanternGLTFNodes } from '../JackOLantern/JackOLantern.types';

const Calendar = ({ position, nodes }: ObjectPos & CalendarGLTFResult) => {
	return (
		<group name='calendarGroup' position={position}>
			<group name='dateInfo' position={[0.29, 2.86, 8.9]}>
				<MeshComponent
					geometry={nodes?.dateInfoText.geometry}
					material={nodes?.dateInfoText.material}
					meshPosition={[9.94, 0, -4.15]}
					materialType='plastic'
					variant='redBloody'
				/>
				<JackOLantern
					nodes={nodes as JackOLanternGLTFNodes}
					position={new THREE.Vector3(-30, 1, 3)}
					rotation={new THREE.Euler(0, Math.PI / 9, 0)}
					scale={0.3}
				/>
			</group>
			<MeshComponent
				geometry={nodes?.dateInfoGlass.geometry}
				material={nodes?.dateInfoGlass.material}
				meshPosition={[0.15, 2.79, 0]}
				materialType='glass'
				variant='white'
			/>
			<MeshComponent
				geometry={nodes?.calendarBG.geometry}
				material={nodes?.calendarBG.material}
				meshPosition={[0, 6.8, -1.25]}
				materialType='plastic'
				variant='white'
			/>
			<MeshComponent
				geometry={nodes?.calendarDateText.geometry}
				material={nodes?.calendarDateText.material}
				meshPosition={[-24.34, 33.36, -0.86]}
				materialType='plastic'
				variant='redBloody'
			/>
			<MeshComponent
				geometry={nodes?.calendarDate.geometry}
				material={nodes?.calendarDate.material}
				meshPosition={[-22.11, 41.29, 0.13]}
				materialType='plastic'
				variant='redBloody'
			/>
			<MeshComponent
				geometry={nodes?.calendarText.geometry}
				material={nodes?.calendarText.material}
				meshPosition={[-0.34, -51.64, 0]}
				materialType='plastic'
				variant='white'
			/>
		</group>
	);
};

export default Calendar;
