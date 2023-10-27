
import Doll from '../../../../Doll/Doll';
import MeshComponent from '../../../../MeshComponent/MeshComponent';
import Floor from '../../../Floor/Floor';
import { GrindrGLTFResult } from '../../FirstRow.types';


const Grindr = ({ position, nodes }: ObjectI & GrindrGLTFResult) => {
	return (
		<group name='grindrGroup' position={position}>
			<MeshComponent
				name='grindrTitle'
				geometry={nodes.grindrTitle.geometry}
				material={nodes.grindrTitle.material}
				meshPosition={[5, -30, 0]}
			/>
			<group
				name='grindrChar'
				position={[0.11, 2.98, 37]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<group
					name='grindrMask'
					position={[0, 3.85, 2.72]}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<group name='grindrMaskIronGroup' position={[0.37, 5.64, -3.53]}>
						<MeshComponent
							geometry={nodes.grindrMaskIron.geometry}
							material={nodes.grindrMaskIron.material}
							meshPosition={[-0.31, 4.8, -3.05]}
							meshRotation={[0, 0, 0]}
						/>
						<MeshComponent
							geometry={nodes.grindrMaskIron.geometry}
							material={nodes.grindrMaskIron.material}
							meshPosition={[10.53, -5.01, -3.05]}
							meshRotation={[0, 0, 0]}
						/>
						<MeshComponent
							name='grindrMaskIron2'
							geometry={nodes.grindrMaskIron.geometry}
							material={nodes.grindrMaskIron.material}
							meshPosition={[-10.53, -5.01, -3.05]}
							meshRotation={[0, 0, 0]}
						/>
					</group>
					<group name='grindrMaskRedGroup' position={[0.03, -2.64, -1.7]}>
						<MeshComponent
							geometry={nodes.grindrMaskRed.geometry}
							material={nodes.grindrMaskRed.material}
							meshPosition={[5.97, -4.5, -0.89]}
							meshRotation={[0.29, -0.06, 0.68]}
							meshScale={1}
						/>
						<MeshComponent
							geometry={nodes.grindrMaskRed.geometry}
							material={nodes.grindrMaskRed.material}
							meshPosition={[-5.68, -4.57, -0.89]}
							meshRotation={[0.29, -0.08, -0.62]}
							meshScale={1}
						/>
						<MeshComponent
							geometry={nodes.grindrMaskRed.geometry}
							material={nodes.grindrMaskRed.material}
							meshPosition={[0, 6.18, 2.5]}
							meshRotation={[Math.PI, 0, 0]}
						/>
					</group>
					<group name='grindrMaskEyesGroup' position={[0.41, -1.26, -2.26]}>
						<MeshComponent
							name='grindrMaskEye'
							geometry={nodes.grindrMaskEye.geometry}
							material={nodes.grindrMaskEye.material}
							meshPosition={[5, 0, 0]}
							meshRotation={[-Math.PI, 0, 2.84]}
						/>
						<MeshComponent
							name='grindrMaskEye1'
							geometry={nodes.grindrMaskEye.geometry}
							material={nodes.grindrMaskEye.material}
							meshPosition={[-5, 0, 0]}
							meshRotation={[0, 0, -0.3]}
						/>
					</group>
					<MeshComponent
						geometry={nodes.grindrMaskShape.geometry}
						material={nodes.grindrMaskShape.material}
						meshPosition={[-9.62, 12.65, -5.91]}
					/>
				</group>
				<Doll nodes={nodes} position={[30.5, -18.57, 3.36]}/>
			</group>
			<Floor
				position={[0, 0, 0]}
				geometry={nodes.floor.geometry}
				material={nodes.floor.material}
			/>
		</group>
	);
};

export default Grindr;
