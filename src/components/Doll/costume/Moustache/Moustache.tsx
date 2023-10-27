import { arrayToEuler, arrayToVector3 } from '../../../../utils';
import MeshComponent from '../../../MeshComponent/MeshComponent';
import { MoustacheProps } from '../../Doll.types';

const Moustache = ({ nodes, material, position, rotation }: MoustacheProps) => {
	
	// position={}
	// 		rotation={}
	console.log(material);
    
	return (
		<group
			name='clockDollMoustacheGroup'
			position={arrayToVector3(position)}
			rotation={arrayToEuler(rotation)}
			scale={[1.02, 1.14, 1.13]}
		>
			<MeshComponent
				name='clockDollMoustache'
				geometry={nodes.clockDollMoustache.geometry}
				material={material}
				meshPosition={[-0.64, 0.5, -0.5]}
				meshRotation={[1.59, 0.04, -0.18]}
				meshScale={[0.57, 0.73, 0.88]}
			/>
			<MeshComponent
				name='clockDollMoustache1'
				geometry={nodes.clockDollMoustache1.geometry}
				material={material}
				meshPosition={[-0.31, 0.5, -0.29]}
				meshRotation={[Math.PI / 2, 0, 0]}
				meshScale={[0.56, 0.73, 0.88]}
			/>
			<MeshComponent
				name='clockDollMoustache2'
				geometry={nodes.clockDollMoustache2.geometry}
				material={material}
				meshPosition={[-0.36, 0.5, 0.05]}
				meshRotation={[1.61, -0.06, 0.27]}
				meshScale={[0.58, 0.72, 0.88]}
			/>
		</group>
	);
};

export default Moustache;
