import MeshComponent from '../../../../MeshComponent/MeshComponent';
import Doll from '../../../../Doll/Doll';
import Floor from '../../../Floor/Floor';

import { GrindrGLTFResult } from '../../FirstRow.types';

const Grindr = ({ position, nodes }: ObjectI & GrindrGLTFResult) => {
	// const grindrGroupRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(
	// 	null
	// );

	// const { camera } = useThree();

	// const [initScale, setInitScale] = useState<THREE.Vector3 | number>(1);
	// const [iniTitleScale, setInitTitleScale] = useState<THREE.Vector3 | number>(
	// 	1
	// );
	// const [initMaterialPosition, setInitMaterialPosition] = useState<number[]>([
	// 	0.11, 2.98, 37,
	// ]);
	// const [initMaterialRotation, setInitMaterialRotation] = useState<number[]>([
	// 	Math.PI / 2,
	// 	0,
	// 	0,
	// ]);
	// const [initTitlePosition, setInitTitlePosition] = useState<number[]>([
	// 	5, -30, 0,
	// ]);

	const grindrMaskIrons = [
		{ position: [-0.31, 4.8, -3.05] },
		{ position: [10.53, -5.01, -3.05] },
		{ position: [-10.53, -5.01, -3.05] },
	];

	const grindrMaskReds = [
		{ position: [5.97, -4.5, -0.89], rotation: [0.29, -0.06, 0.68] },
		{ position: [-5.68, -4.57, -0.89], rotation: [0.29, -0.06, -0.68] },
		{ position: [0, 6.18, 2.5], rotation: [Math.PI, 0, 0] },
	];

	const grindrMaskEyes = [
		{ position: [-5, 0, 0], rotation: [0, 0, -0.3] },
		{ position: [5, 0, 0], rotation: [-Math.PI, 0, 2.84] },
	];

	// const handleClick = (event: ThreeEvent<MouseEvent>) => {
	// 	const rotationSpeed = 0.2;
	// 	event.stopPropagation();

	// 	camera.lookAt(0, 0, 0);

	// 	if (grindrGroupRef?.current) {
	// 		grindrGroupRef.current.rotation.x -= rotationSpeed;
	// 		setInitMaterialPosition([-100, -50, 200]);
	// 		setInitMaterialRotation([Math.PI / 12, 0, 0]);
	// 		setInitTitlePosition([-100, -150, 200]);
	// 		setInitScale(2.5);
	// 		setInitTitleScale(10);
	// 	}
	// };

	return (
		<group
			name='grindrGroup'
			position={position}
			// ref={grindrGroupRef}
			// onClick={handleClick}
		>
			<MeshComponent
				name='grindrTitle'
				geometry={nodes?.grindrTitle.geometry}
				material={nodes?.grindrTitle.material}
				meshPosition={[5, -30, 0]}
				materialType='plastic'
				variant='white'
			/>
			<group
				name='grindrChar'
				position={[0.11, 2.98, 37]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={1}
			>
				<group
					name='grindrMask'
					position={[0, 3.85, 2.72]}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<group name='grindrMaskIronGroup' position={[0.37, 5.64, -3.53]}>
						{grindrMaskIrons.map(({ position }, index) => (
							<MeshComponent
								key={`grindrMaskIron-${index}`}
								geometry={nodes?.grindrMaskIron.geometry}
								material={nodes?.grindrMaskIron.material}
								meshPosition={position}
								meshRotation={[0, 0, 0]}
								materialType='metallic'
								variant='grayLight'
							/>
						))}
					</group>
					<group name='grindrMaskRedGroup' position={[0.03, -2.64, -1.7]}>
						{grindrMaskReds.map(({ position, rotation }, index) => (
							<MeshComponent
								key={`grindrMaskRed-${index}`}
								geometry={nodes?.grindrMaskRed.geometry}
								material={nodes?.grindrMaskRed.material}
								meshPosition={position}
								meshRotation={rotation}
								materialType='plastic'
								variant='redBloody'
							/>
						))}
					</group>
					<group name='grindrMaskEyesGroup' position={[0.41, -1.26, -2.26]}>
						{grindrMaskEyes.map(({ position, rotation }, index) => (
							<MeshComponent
								key={`grindrMaskEye-${index}`}
								geometry={nodes?.grindrMaskEye.geometry}
								material={nodes?.grindrMaskEye.material}
								meshPosition={position}
								meshRotation={rotation}
								materialType='glossy'
								variant='black'
							/>
						))}
					</group>
					<MeshComponent
						geometry={nodes?.grindrMaskShape.geometry}
						material={nodes?.grindrMaskShape.material}
						meshPosition={[-9.62, 12.65, -5.91]}
						materialType='metallic'
						variant='yellow'
					/>
				</group>
				<Doll nodes={nodes} position={[30.5, -18.57, 3.36]} />
			</group>
			<Floor
				geometry={nodes?.floor.geometry}
				material={nodes?.floor.material}
			/>
		</group>
	);
};

export default Grindr;
