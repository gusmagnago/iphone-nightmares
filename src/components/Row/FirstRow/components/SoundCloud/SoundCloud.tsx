import MeshComponent from '../../../../MeshComponent/MeshComponent';
import { SoundCloudGLTFResult } from '../../FirstRow.types';
import Floor from '../../../Floor/Floor';

const SoundCloud = ({ position, nodes }: ObjectI & SoundCloudGLTFResult) => {
	return (
		<group name="soundCloudGroup" position={position}>
			<MeshComponent
				name="SoundCloudTitle"
				geometry={nodes.SoundCloudTitle.geometry}
				material={nodes.SoundCloudTitle.material}
				meshPosition={[0, -30, 0]}
			/>
			<group name="soundClouds" position={[0, 0, 10]}>
				<group
					name="soundCloudLight"
					position={[-5.7, -7.96, 2.59]}
					rotation={[-Math.PI, 0.09, -2.79]}
					scale={0.1}
				>
					<MeshComponent
						name="soundCloudLightining"
						geometry={nodes.soundCloudLightining.geometry}
						material={nodes.soundCloudLightining.material}
						meshPosition={[5.54, 15.32, -3.97]}
						meshRotation={[-0.07, 0.07, 0]}
						meshScale={1}
					/>
				</group>
				<group name="soundCloudLight1" position={[5.86, 5.54, 3.28]} scale={0.18}>
					<MeshComponent
						name="soundCloudLightining1"
						geometry={nodes.soundCloudLightining1.geometry}
						material={nodes.soundCloudLightining.material}
						meshPosition={[5.54, 15.32, -3.97]}
						meshRotation={[-0.07, 0.07, 0]}
						meshScale={1}
					/>
				</group>
				<group name="soundCloudsGroup" position={[0, -2.12, 0]}>
					<MeshComponent
						geometry={nodes.soundCloudCloud.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[2.71, 0.14, -1.94]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud1.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[7.56, -3.53, -1.94]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud2.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[1.82, -0.82, 2.09]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud3.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[1.82, -2.82, -0.31]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud4.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[1.82, 3.18, 0.4]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud5.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[4.6, 1.83, -1.94]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud6.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[4.76, -2.53, -1.92]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud7.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[9.94, -1.53, -2.24]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud8.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[3.94, 1.47, 0.49]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud9.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[-3.06, -1.53, -1.44]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud10.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[-5.16, -2.53, -1.44]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud11.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[-7.56, -0.53, -1.44]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud12.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[-10.06, -1.53, -1.44]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud13.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[-12.06, -2.53, -1.44]}
					/>
					<MeshComponent
						geometry={nodes.soundCloudCloud14.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[-14.06, -2.53, -1.44]}
					/>
					<MeshComponent
						name="Sphere"
						geometry={nodes.soundCloudCloud15.geometry}
						material={nodes.soundCloudCloud.material}
						meshPosition={[-16.06, -2.53, -1.44]}
					/>
				</group>
			</group>
			<Floor
				position={[0, 0, 0]}
				geometry={nodes.floor.geometry}
				material={nodes.floor.material}
			/>
		</group>
           
	);
};

export default SoundCloud;