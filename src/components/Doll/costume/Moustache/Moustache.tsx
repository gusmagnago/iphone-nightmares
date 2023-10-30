import { arrayToEuler, arrayToVector3 } from '../../../../utils';
import MeshComponent from '../../../MeshComponent/MeshComponent';
import { MoustacheProps } from '../../Doll.types';

const Moustache = ({ nodes, material, position, rotation }: MoustacheProps) => {
	const dollMoustache = [
		{
			position: [-0.64, 0.5, -0.5],
			rotation: [1.59, 0.04, -0.18],
		},
		{
			position: [-0.31, 0.5, -0.29],
			rotation: [Math.PI / 2, 0, 0],
		},
		{
			position: [-0.36, 0.5, 0.05],
			rotation: [1.61, -0.06, 0.27],
		},
	];

	return (
		<group
			name='clockDollMoustacheGroup'
			position={arrayToVector3(position)}
			rotation={arrayToEuler(rotation)}
			scale={[1.02, 1.14, 1.13]}
		>
			{dollMoustache.map(({ position, rotation }, index) => (
				<MeshComponent
					key={`dollMoustache-${index}`}
					geometry={nodes?.clockDollMoustache.geometry}
					material={material}
					meshPosition={position}
					meshRotation={rotation}
					meshScale={[0.57, 0.73, 0.88]}
					materialType='plastic'
					variant='black'
				/>
			))}
		</group>
	);
};

export default Moustache;
