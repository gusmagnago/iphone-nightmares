import * as THREE from 'three';
import Weather from '../Weather/Weather';
import Calendar from '../Calendar/Calendar';
import { WeatherGLTFNodes } from '../Weather/Weather.types';
import { WidgetGLTFResult } from './Widgets.types';
import { CalendarGLTFNodes } from '../Calendar/Calendar.types';

const Widgets = ({ nodes }: WidgetGLTFResult) => {
	const weatherPos = new THREE.Vector3(-60, 0, 0);
	const calendarPos = new THREE.Vector3(60, 0, 0);

	return (
		<group position={[0, 170, 25]}>
			<Weather position={weatherPos} nodes={nodes as WeatherGLTFNodes} />
			<Calendar position={calendarPos} nodes={nodes as CalendarGLTFNodes} />
		</group>
	);
};

export default Widgets;
