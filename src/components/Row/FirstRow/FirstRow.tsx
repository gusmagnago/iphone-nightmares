import { arrayToVector3 } from '../../../utils';

import {
	FirstRowGLTFResult,
	GrindrGLTFNodes,
	HealthGLTFNodes,
	SoundCloudGLTFNodes,
	XGLTFNodes,
} from './FirstRow.types';

import Grindr from './components/Grindr/Grindr';
import X from './components/X/X';
import SoundCloud from './components/SoundCloud/SoundCloud';
import Health from './components/Health/Health';

const FirstRow = ({ nodes }: FirstRowGLTFResult) => {
	return (
		<group position={arrayToVector3([10, 90, 23])}>
			<Health
				nodes={nodes as HealthGLTFNodes}
				position={arrayToVector3([-90, 0, 0])}
			/>
			<SoundCloud
				nodes={nodes as SoundCloudGLTFNodes}
				position={arrayToVector3([-30, 0, 0])}
			/>
			<X nodes={nodes as XGLTFNodes} position={arrayToVector3([30, 0, 0])} />
			<Grindr
				nodes={nodes as GrindrGLTFNodes}
				position={arrayToVector3([90, 0, 0])}
			/>
		</group>
	);
};

export default FirstRow;
