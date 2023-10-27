
import BackgroundImage from '../Background/BackgroundImage';
import Footer from '../Footer/Footer';
import Widgets from '../Widgets/Widgets';

import Info from '../Info/Info';
import Iphone from '../Iphone/Iphone';
import FirstRow from '../Row/FirstRow/FirstRow';
import SecondRow from '../Row/SecondRow/SecondRow';

const Scene = ({ ...props }) => {
	return (
		<>
			<group {...props}>
				<scene>
					<Info />
					<Iphone />
					<Widgets />
					<BackgroundImage />
					<FirstRow/>
					<SecondRow />
					<Footer />
				</scene>
			</group>
		</>
	);
};

export default Scene;
