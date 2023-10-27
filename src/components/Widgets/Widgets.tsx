import * as THREE from 'three';
import Weather from '../Weather/Weather';
import Calendar from '../Calendar/Calendar';

const Widgets = () => {

	const weatherPos = new THREE.Vector3(-60, 0, 0);
	const calendarPos = new THREE.Vector3(60, 0, 0);
    
	return (
		<group position={[0,170, 10]}>
			<Weather position={weatherPos} />
			<Calendar position={calendarPos} />
		</group>
	);
};

export default Widgets;
