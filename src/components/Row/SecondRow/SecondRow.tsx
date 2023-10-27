import { useGLTF } from '@react-three/drei';
import { arrayToVector3 } from '../../../utils';

import { CameraGLTFNodes, ClockGLTFNodes, ContactsGLTFNodes, FindMyGLTFNodes, SecondRowGLTFResult } from './SecondRow.types';
import Camera from './components/Camera/Camera';
import FindMay from './components/FindMy/FindMay';
import Contacts from './components/Contacts/Contacts';
import Clock from './components/Clock/Clock';

const SecondRow = () => {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as SecondRowGLTFResult;
	return (
		<group position={arrayToVector3([10, 25, 20])}>
			<Clock nodes={nodes as ClockGLTFNodes} position={arrayToVector3([-90, 0, 0])}/>
			<Contacts nodes={nodes as unknown as ContactsGLTFNodes} position={arrayToVector3([-30, 0, 0])}/>
			<FindMay nodes={nodes as unknown as FindMyGLTFNodes} position={arrayToVector3([30, 0, 0])}/>
			<Camera nodes={nodes as CameraGLTFNodes} position={arrayToVector3([90, 0, 0])}/>
		</group>
	);
};

export default SecondRow;
