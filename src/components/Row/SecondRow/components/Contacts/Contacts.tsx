import MeshComponent from '../../../../MeshComponent/MeshComponent';
import Floor from '../../../Floor/Floor';
import { ContactsGLTFResult } from '../../SecondRow.types';

const Camera = ({ position, nodes }: ObjectI & ContactsGLTFResult) => {
	const {
		contactsTitle,
		bookComCircle,
		bookComCStar,
		bookComBodySide,
		bookComBodyBar,
		bookComBodyBack,
		bookComBodyFront,
		floor,
	} = nodes;

	// const clockGroupRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(
	// 	null
	// );
	// const { camera } = useThree();
	// const [initScale, setInitScale] = useState<THREE.Vector3 | number>(1);
	// const [initMaterialPosition, setInitMaterialPosition] = useState(position);
	// const [initMaterialRotation, setInitMaterialRotation] = useState<number[]>([
	// 	0, 0, 0,
	// ]);
	// const [initTitlePosition, setInitTitlePosition] = useState<number[]>([
	// 	2, -30, 0,
	// ]);
	// const [initTitleRotation, setInitTitleRotation] = useState<number[]>([
	// 	0, 0, 0,
	// ]);

	const renderBars = (yVal: number) => {
		const instancesVal = 10;
		const instanceDistance = 12;
		const originalXVal = -52.48;

		const instances = Array.from({ length: instancesVal }, (_, i) => {
			const newX = originalXVal + instanceDistance * i;

			return (
				<MeshComponent
					key={i}
					name={`bookComBodyBar_${i}`}
					geometry={bookComBodyBar.geometry}
					material={bookComBodyBar.material}
					meshPosition={[newX, yVal, -33]}
					meshScale={[3.72, 5.16, 2.52]}
					materialType='metallic'
					variant='black'
				/>
			);
		});

		return <>{instances}</>;
	};

	// const handleClick = (event: ThreeEvent<MouseEvent>) => {
	// 	const rotationSpeed = 0.2;
	// 	event.stopPropagation();

	// 	camera.lookAt(0, 0, 0);

	// 	if (clockGroupRef?.current) {
	// 		clockGroupRef.current.rotation.x -= rotationSpeed;
	// 		setInitMaterialRotation([Math.PI / -2.5, 0, 0]);
	// 		setInitMaterialPosition(arrayToVector3([0, -150, 50]));
	// 		setInitTitleRotation([-90, Math.PI / 1, 0]);
	// 		setInitTitlePosition([5, -60, 0]);
	// 		setInitScale(2);
	// 	}
	// };

	return (
		<group
			name='contactsGroup'
			position={position}
			// ref={clockGroupRef}
			// onClick={handleClick}
		>
			<MeshComponent
				name='contactsTitle'
				geometry={contactsTitle?.geometry}
				material={contactsTitle?.material}
				meshPosition={[2, -30, 0]}
				materialType='plastic'
				variant='white'
			/>
			<group name='bookComp' position={[0, 0, 15]}>
				<MeshComponent
					name='bookComCircle'
					geometry={bookComCircle.geometry}
					material={bookComCircle.material}
					meshPosition={[0, 0, 14]}
					materialType='metallic'
					variant='black'
				/>
				<MeshComponent
					name='bookComCStar'
					geometry={bookComCStar.geometry}
					material={bookComCStar.material}
					meshPosition={[0, 0, 13]}
					meshRotation={[0, 0, -1.83]}
					materialType='metallic'
					variant='black'
				/>
				<group
					name='bookComBody'
					position={[0.7, -18.18, -0.95]}
					scale={[0.27, 0.19, 0.4]}
				>
					<MeshComponent
						name='bookComBodySide'
						geometry={bookComBodySide.geometry}
						material={bookComBodySide.material}
						meshPosition={[61.51, 94.13, 0.38]}
						meshRotation={[0, Math.PI / 2, 0]}
						meshScale={[0.24, 0.99, 0.04]}
						materialType='metallic'
						variant='black'
					/>
					<MeshComponent
						name='bookComBodySide1'
						geometry={bookComBodySide.geometry}
						material={bookComBodySide.material}
						meshPosition={[-64.9, 94.13, 0.38]}
						meshRotation={[0, Math.PI / 2, 0]}
						meshScale={[0.24, 0.99, 0.04]}
						materialType='metallic'
						variant='black'
					/>
					{renderBars(171.92)}
					{renderBars(12.74)}
					<MeshComponent
						name='bookComBodyBack'
						geometry={bookComBodyBack.geometry}
						material={bookComBodyBack.material}
						meshPosition={[-2, 94.13, -33.17]}
						meshScale={[0.99, 0.99, 0.04]}
						materialType='glossy'
						variant='greenEw'
					/>
					<MeshComponent
						name='bookComBodyFront'
						geometry={bookComBodyFront.geometry}
						material={bookComBodyFront.material}
						meshPosition={[-2, 94.13, 35.59]}
						meshScale={[0.99, 0.99, 0.04]}
						materialType='metallic'
						variant='brown'
					/>
				</group>
			</group>
			<Floor geometry={floor.geometry} material={floor.material} />
		</group>
	);
};

export default Camera;
