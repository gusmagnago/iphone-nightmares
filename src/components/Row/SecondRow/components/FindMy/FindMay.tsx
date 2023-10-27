import { arrayToVector3 } from '../../../../../utils';
import MeshComponent from '../../../../MeshComponent/MeshComponent';
import Floor from '../../../Floor/Floor';
import { FindMyGLTFResult } from '../../SecondRow.types';
import LightHouse from './LightHouse/LightHouse';

const FindMay = ({ position, nodes }: ObjectI & FindMyGLTFResult) => {

	const findMyLegs = [
		{ position: [-0.14, 7.49, 0] },
		{ position: [-7.91, 1.67, 0] },
		{ position: [7.91, 1.67, 0] },
		{ position: [4.64, -7.49, 0] },
		{ position: [-4.97, -7.49, 0] },
	];

	return (
		<group name='findMyGroup' position={position}>
			<MeshComponent
				name='findMyTitle'
				geometry={nodes.findMyTitle.geometry}
				material={nodes.findMyTitle.material}
				meshPosition={[5, -30, 0]}
			/>
			<group name='LighthouseComp' position={[0, 0, 0]}>
				<group name='LighthouseBody' position={[0, 0, 33]}>
					<MeshComponent
						name='LighthouseBodyTop'
						geometry={nodes.LighthouseBodyTop.geometry}
						material={nodes.LighthouseBodyTop.material}
						meshPosition={[0, 0, 47]}
					/>
					<group name='LighthouseLigth' position={[-1.61, -5.73, 40.63]}>
						<pointLight
							name='LighthouseLigthMaterial'
							castShadow
							intensity={2}
							decay={6}
							distance={100}
							shadow-mapSize-width={1024}
							shadow-mapSize-height={1024}
							shadow-camera-near={100}
							shadow-camera-far={100000}
							color='#fd8181'
							position={[0.7, 5.14, -4.78]}
							scale={0.47}
						/>
					</group>
					<MeshComponent
						name='LighthouseStar'
						geometry={nodes.LighthouseStar.geometry}
						material={nodes.LighthouseStar.material}
						meshPosition={[0, 0, 28.32]}
					/>
					<MeshComponent
						name='LighthouseStar'
						geometry={nodes.LighthouseStar.geometry}
						material={nodes.LighthouseStar.material}
						meshPosition={[0, 0, 46.3]}
					/>
					<group name='LighthouseLegs' position={[0.16, 0.98, 37.6]}>
						{findMyLegs.map(({ position }, index) => (
							<MeshComponent
								geometry={nodes.LighthouseLeg.geometry}
								material={nodes.LighthouseLeg.material}
								meshPosition={position}
								meshRotation={[Math.PI / 2, 0, 0]}
								key={`lighthouseLeg-${index}-val`}
							/>
						))}
					</group>
					<MeshComponent
						name='LighthouseGlass'
						geometry={nodes.LighthouseGlass.geometry}
						material={nodes.LighthouseGlass.material}
						meshPosition={[0, 0, 27.33]}
					/>
					<LightHouse
						position={arrayToVector3([0, 0, 5])}
						whiteGeometry={{
							geometry: nodes.LighthouseBodyPartWhite.geometry,
							material: nodes.LighthouseBodyPartWhite.material,
						}}
						redGeometry={{
							geometry: nodes.LighthouseBodyPartRed.geometry,
							material: nodes.LighthouseBodyPartRed.material,
						}}
					/>
				</group>
				<MeshComponent
					name='LighthouseBase'
					geometry={nodes.LighthouseBase.geometry}
					material={nodes.LighthouseBase.material}
					meshPosition={[0, 0, 0]}
				/>
			</group>
			<Floor
				position={[0, 0, 0]}
				geometry={nodes.floor.geometry}
				material={nodes.floor.material}
			/>
		</group>
	);
};

export default FindMay;
