import {  arrayToVector3 } from '../../../../../utils';
import Candle from '../../../../Candle/Candle';
import MeshComponent from '../../../../MeshComponent/MeshComponent';
import Floor from '../../../Floor/Floor';
import { CameraGLTFResult } from '../../SecondRow.types';

const Camera = ({ position, nodes }: ObjectI & CameraGLTFResult) => {
	const cameraLegs = [
		{
			position: [15.5, 10, 0],
		},
		{
			position: [-15.5, 10, 0],
		},
		{
			position: [15.5, -10, 0],
		},
		{
			position: [-15.5, -10, 0],
		},
	];

	return (
		<group name='cameraGroup' position={position}>
			<MeshComponent
				name='cameraTitle'
				geometry={nodes?.cameraTitle.geometry}
				material={nodes?.cameraTitle.material}
				meshPosition={[0, -30, 0]}
				materialType='plastic'
				variant='white'
			/>
			<Candle
				position={arrayToVector3([8, 14, 22])}
				scale={0.02}
				nodes={nodes}
			/>
			<group name='cameraTable' position={[0, 0, 38]}>
				<group name='cameraTableGroup' position={[0, 0, -27]}>
					{cameraLegs.map((leg, index) => (
						<MeshComponent
							key={`cameraTableLeg-${index}`}
							geometry={nodes?.cameraTableLeg.geometry}
							material={nodes?.cameraTableLeg.material}
							meshPosition={leg.position}
							meshRotation={[Math.PI / 2, 0, 0]}
							materialType='plastic'
							variant='black'
						/>
					))}
				</group>
				<MeshComponent
					name='cameraTableCrystal'
					geometry={nodes?.cameraTableCrystal.geometry}
					material={nodes?.cameraTableCrystal.material}
					meshPosition={[0, 0, -9.82]}
					materialType='glass'
					variant='glass'
				/>
				<MeshComponent
					name='cameraCrystalHolder'
					geometry={nodes?.cameraCrystalHolder.geometry}
					material={nodes?.cameraCrystalHolder.material}
					meshPosition={[0, 0, -19.58]}
					materialType='metallic'
					variant='gray'
				/>
				<MeshComponent
					name='cameraTableShape'
					geometry={nodes?.cameraTableShape.geometry}
					material={nodes?.cameraTableShape.material}
					meshPosition={[0, 0, -21.27]}
					materialType='plastic'
					variant='black'
                    
				/>
			</group>
			<Floor
				position={[0, 0, 0]}
				geometry={nodes?.floor.geometry}
				material={nodes?.floor.material}
			/>
		</group>
	);
};

export default Camera;
