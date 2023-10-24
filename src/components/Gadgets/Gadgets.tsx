import * as THREE from 'three';
import Weather from '../Weather/Weather';
import Calendar from '../Calendar/Calendar';

const Gadgets = () => {

	const weatherPos = new THREE.Vector3(-60, 0, 25);
	const calendarPos = new THREE.Vector3(60, 0, 25);
    
	return (
		<group name='gadgets' position={[0, 180, 25]}>
			<Weather position={weatherPos} />
			<Calendar position={calendarPos} />
		</group>
	);
};

export default Gadgets;
