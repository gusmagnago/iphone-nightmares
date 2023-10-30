import MeshComponent from '../../../../MeshComponent/MeshComponent';
import { SoundCloudGLTFResult } from '../../FirstRow.types';
import Floor from '../../../Floor/Floor';

const SoundCloud = ({ position, nodes }: ObjectI & SoundCloudGLTFResult) => {
	const soundClouds = [
		{
			geometry: nodes?.soundCloudCloud.geometry,
			position: [2.71, 0.14, -1.94],
		},
		{
			geometry: nodes?.soundCloudCloud1.geometry,
			position: [7.56, -3.53, -1.94],
		},
		{
			geometry: nodes?.soundCloudCloud2.geometry,
			position: [1.82, -0.82, 2.09],
		},
		{
			geometry: nodes?.soundCloudCloud3.geometry,
			position: [1.82, -2.82, -0.31],
		},
		{
			geometry: nodes?.soundCloudCloud4.geometry,
			position: [1.82, 3.18, 0.4],
		},
		{
			geometry: nodes?.soundCloudCloud5.geometry,
			position: [4.6, 1.83, -1.94],
		},
		{
			geometry: nodes?.soundCloudCloud6.geometry,
			position: [4.76, -2.53, -1.92],
		},
		{
			geometry: nodes?.soundCloudCloud7.geometry,
			position: [9.94, -1.53, -2.24],
		},
		{
			geometry: nodes?.soundCloudCloud8.geometry,
			position: [3.94, 1.47, 0.49],
		},
		{
			geometry: nodes?.soundCloudCloud9.geometry,
			position: [-3.06, -1.53, -1.44],
		},
		{
			geometry: nodes?.soundCloudCloud10.geometry,
			position: [-5.16, -2.53, -1.44],
		},
		{
			geometry: nodes?.soundCloudCloud11.geometry,
			position: [-7.56, -0.53, -1.44],
		},
		{
			geometry: nodes?.soundCloudCloud12.geometry,
			position: [-10.06, -1.53, -1.44],
		},
		{
			geometry: nodes?.soundCloudCloud13.geometry,
			position: [-12.06, -2.53, -1.44],
		},
		{
			geometry: nodes?.soundCloudCloud14.geometry,
			position: [-14.06, -2.53, -1.44],
		},
		{
			geometry: nodes?.soundCloudCloud15.geometry,
			position: [-16.06, -2.53, -1.44],
		},
	];

	return (
		<group name='soundCloudGroup' position={position}>
			<MeshComponent
				name='SoundCloudTitle'
				geometry={nodes?.SoundCloudTitle.geometry}
				material={nodes?.SoundCloudTitle.material}
				meshPosition={[0, -30, 0]}
				materialType='plastic'
				variant='white'
			/>
			<group name='soundClouds' position={[0, 0, 10]}>
				<group
					name='soundCloudLight'
					position={[-5.7, -7.96, 2.59]}
					rotation={[-Math.PI, 0.09, -2.79]}
					scale={0.1}
				>
					<MeshComponent
						name='soundCloudLightining'
						geometry={nodes?.soundCloudLightining.geometry}
						material={nodes?.soundCloudLightining.material}
						meshPosition={[5.54, 15.32, -3.97]}
						meshRotation={[-0.07, 0.07, 0]}
						meshScale={1}
						materialType='plastic'
						variant='yellow'
					/>
				</group>
				<group
					name='soundCloudLight1'
					position={[5.86, 5.54, 3.28]}
					scale={0.18}
				>
					<MeshComponent
						name='soundCloudLightining1'
						geometry={nodes?.soundCloudLightining1.geometry}
						material={nodes?.soundCloudLightining.material}
						meshPosition={[5.54, 15.32, -3.97]}
						meshRotation={[-0.07, 0.07, 0]}
						meshScale={1}
						materialType='plastic'
						variant='yellow'
					/>
				</group>
				<group name='soundCloudsGroup' position={[0, -2.12, 0]}>
					{soundClouds.map(({ position, geometry }, index) => (
						<MeshComponent
							key={`soundCloud-${index}`}
							geometry={geometry}
							material={nodes?.soundCloudCloud.material}
							meshPosition={position}
							materialType='metallic'
							variant='white'
						/>
					))}
				</group>
			</group>
			<Floor
				position={[0, 0, 0]}
				geometry={nodes?.floor.geometry}
				material={nodes?.floor.material}
			/>
		</group>
	);
};

export default SoundCloud;
