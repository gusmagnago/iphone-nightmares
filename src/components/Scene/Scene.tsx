import BackgroundImage from '../Background/BackgroundImage';
import Gadgets from '../Gadgets/Gadgets';

import Info from '../Info/Info';
import Iphone from '../Iphone/Iphone';

const Scene = ({ ...props }) => {
	return (
		<>
			<group {...props}>
				<scene>
					<Info />
					<Iphone />
					<BackgroundImage />
					<Gadgets />
				</scene>
			</group>
		</>
	);
};

export default Scene;
