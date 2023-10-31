import { arrayToVector3 } from '../../../utils';

import Camera from './components/Camera/Camera';
import FindMay from './components/FindMy/FindMay';
import Contacts from './components/Contacts/Contacts';
import Clock from './components/Clock/Clock';

import { CameraGLTFNodes, ClockGLTFNodes, ContactsGLTFNodes, FindMyGLTFNodes, SecondRowGLTFResult } from './SecondRow.types';

const SecondRow = ({nodes}: SecondRowGLTFResult) => {
	return (
		<group position={arrayToVector3([10, 25, 25])}>
			<Clock nodes={nodes as ClockGLTFNodes} position={arrayToVector3([-90, 0, 0])}/>
			<Contacts nodes={nodes as unknown as ContactsGLTFNodes} position={arrayToVector3([-30, 0, 0])}/>
			<FindMay nodes={nodes as unknown as FindMyGLTFNodes} position={arrayToVector3([30, 0, 0])}/>
			<Camera nodes={nodes as CameraGLTFNodes} position={arrayToVector3([90, 0, 0])}/>
		</group>
	);
};

export default SecondRow;
