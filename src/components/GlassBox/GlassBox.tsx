import {  arrayToVector3 } from '../../utils';
import MeshComponent from '../MeshComponent/MeshComponent';
import { GlassBoxProps } from './GlassBox.types';

const GlassBox = ({
	children,
	position,
	geometries,
	materials,
}: GlassBoxProps) => {
	// const glassBoxRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(null);
	// const { camera } = useThree();

	// const [initMaterialPosition, setInitMaterialPosition] = useState(position);
	// const [initMaterialRotation, setInitMaterialRotation] = useState<number[]>([
	// 	0, 0, 0,
	// ]);
	// const [initScale, setInitScale] = useState<number>(1);

	const { footerBoxTop, footerBoxGlass, footerBoxLeg, footerBoxBase } =
    geometries;
	const {
		footerBoxTop: topMaterial,
		footerBoxGlass: glassMaterial,
		footerBoxLeg: legMaterial,
		footerBoxBase: baseMaterial,
	} = materials;

	const footerBoxLegsPosition = [
		[17.48, -17.25, 0],
		[17.48, 17.25, 0],
		[-17.02, 17.25, 0],
		[-17.48, -17.25, 0],
	];

	// const handleClick = (event: ThreeEvent<MouseEvent>) => {
	// 	const rotationSpeed = 0.2;
	// 	event.stopPropagation();

	// 	camera.lookAt(0, 0, 0);

	// 	if (glassBoxRef?.current) {
	// 		glassBoxRef.current.rotation.x -= rotationSpeed;
	// 		setInitMaterialRotation([Math.PI / -2, 0, 0]);
	// 		setInitMaterialPosition([15, 200, 100]);
	// 		setInitScale(2);
	// 	}
	// };

	return (
		<group
			position={arrayToVector3(position)}
			// onClick={handleClick}
		>
			<group position={[-10.48, 3.75, 20.47]}>
				{children}
				<MeshComponent
					name='boxTop'
					geometry={footerBoxTop}
					material={topMaterial}
					meshPosition={[0.26, 0.09, 29]}
					materialType='metallic'
					variant='gray'
				/>
				<MeshComponent
					name='boxGlass'
					geometry={footerBoxGlass}
					material={glassMaterial}
					meshPosition={[0.48, 0.25, -20]}
					materialType='glass'
					variant='greenEw'
					glassThickness={2}
					glassReflectivity={0}
				/>
				<group name='boxLegs' position={[0, 0, 5]}>
					{footerBoxLegsPosition.map((legPosition, index) => (
						<MeshComponent
							key={index}
							name={`boxLeg-${index}`}
							geometry={footerBoxLeg}
							material={legMaterial}
							meshPosition={legPosition}
							meshRotation={[Math.PI / 2, 0, 0]}
							materialType='metallic'
							variant='black'
						/>
					))}
				</group>
			</group>
			<MeshComponent
				name='boxBase'
				geometry={footerBoxBase}
				material={baseMaterial}
				meshPosition={[-10.22, 3, 0]}
				materialType='plastic'
				variant='black'
			/>
		</group>
	);
};

export default GlassBox;
