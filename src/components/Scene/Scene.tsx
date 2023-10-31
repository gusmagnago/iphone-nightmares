import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

import BackgroundImage from '../Background/BackgroundImage';
import Footer from '../Footer/Footer';
import Widgets from '../Widgets/Widgets';

import Info from '../Info/Info';
import Iphone from '../Iphone/Iphone';
import FirstRow from '../Row/FirstRow/FirstRow';
import SecondRow from '../Row/SecondRow/SecondRow';
import { InfoGLTFNodes } from '../Info/Info.types';
import { IphoneGLTFNodes } from '../Iphone/Iphone.types';
import { FooterGLTFNodes } from '../Footer/Footer.types';
import { BGGLTFNodes } from '../Background/BackgroundImage.types';
import { WidgetGLTFNodes } from '../Widgets/Widgets.types';
import { FirstRowGLTFNodes } from '../Row/FirstRow/FirstRow.types';
import { SecondRowGLTFNodes } from '../Row/SecondRow/SecondRow.types';

type GLTFResult = GLTF & {
  nodes:
    | InfoGLTFNodes
    | IphoneGLTFNodes
    | FooterGLTFNodes
    | WidgetGLTFNodes
    | FirstRowGLTFNodes
    | SecondRowGLTFNodes;
};

const Scene = ({ ...props }) => {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	return (
		<>
			<group {...props} position={[0, 0, 0]}>
				<scene>
					<Info nodes={nodes as InfoGLTFNodes} />
					<Iphone nodes={nodes as IphoneGLTFNodes} />
					<Widgets nodes={nodes as WidgetGLTFNodes} />
					<BackgroundImage nodes={nodes as BGGLTFNodes} />
					<FirstRow nodes={nodes as FirstRowGLTFNodes} />
					<SecondRow nodes={nodes as SecondRowGLTFNodes} />
					<Footer nodes={nodes as FooterGLTFNodes} />
				</scene>
			</group>
		</>
	);
};

useGLTF.preload('./iphoneNightmares.gltf');

export default Scene;
