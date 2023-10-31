import { arrayToVector3 } from '../../../../../utils';
import Candle from '../../../../Candle/Candle';
import MeshComponent from '../../../../MeshComponent/MeshComponent';
import Floor from '../../../Floor/Floor';
import { CameraGLTFResult } from '../../SecondRow.types';

const Camera = ({ position, nodes }: ObjectI & CameraGLTFResult) => {
	// const cameraGroupRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(
	// 	null
	// );
	// const { camera } = useThree();
	// const [initScale, setInitScale] = useState<THREE.Vector3 | number>(1);
	// const [initMaterialPosition, setInitMaterialPosition] = useState(position);
	// const [initMaterialRotation, setInitMaterialRotation] = useState<number[]>([
	// 	0, 0, 0,
	// ]);
	// const [initTitlePosition, setInitTitlePosition] = useState<number[]>([
	// 	0, -30, 0,
	// ]);
	// const [initTitleRotation, setInitTitleRotation] = useState<number[]>([
	// 	0, 0, 0,
	// ]);

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

	// const handleClick = (event: ThreeEvent<MouseEvent>) => {
	// 	const rotationSpeed = 0.2;
	// 	event.stopPropagation();

	// 	camera.lookAt(0, 0, 0);

	// 	if (cameraGroupRef?.current) {
	// 		cameraGroupRef.current.rotation.x -= rotationSpeed;
	// 		setInitMaterialRotation([Math.PI / -2.5, 0, 0]);
	// 		setInitMaterialPosition(arrayToVector3([0, -150, 50]));
	// 		setInitTitleRotation([-90, Math.PI / 1, 0]);
	// 		setInitTitlePosition([5, -60, 0]);
	// 		setInitScale(2);
	// 	}
	// };

	return (
		<group
			name='cameraGroup'
			position={position}
			// ref={cameraGroupRef}
			// onClick={handleClick}
		>
			<MeshComponent
				name='cameraTitle'
				geometry={nodes?.cameraTitle.geometry}
				material={nodes?.cameraTitle.material}
				meshPosition={
					[
						0, -30, 0,
					]
				}
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
				geometry={nodes?.floor.geometry}
				material={nodes?.floor.material}
			/>
		</group>
	);
};

export default Camera;
