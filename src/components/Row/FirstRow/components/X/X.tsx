import MeshComponent from '../../../../MeshComponent/MeshComponent';
import Floor from '../../../Floor/Floor';
import { XGLTFResult } from '../../FirstRow.types';

const X = ({ position, nodes }: ObjectI & XGLTFResult) => {
	// const xGroupRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(null);
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

	// const handleClick = (event: ThreeEvent<MouseEvent>) => {
	// 	const rotationSpeed = 0.2;
	// 	event.stopPropagation();

	// 	camera.lookAt(0, 0, 0);

	// 	if (xGroupRef?.current) {
	// 		xGroupRef.current.rotation.x -= rotationSpeed;
	// 		setInitMaterialRotation([Math.PI / -2.5, 0, 0]);
	// 		setInitMaterialPosition(arrayToVector3([0, -150, 50]));
	// 		setInitTitleRotation([-90, Math.PI / 1, 0]);
	// 		setInitTitlePosition([0, -60, 0]);
	// 		setInitScale(2);
	// 	}
	// };

	return (
		<group
			name='xGroup'
			position={position}
			// ref={xGroupRef}
			// onClick={handleClick}
		>
			<group name='xBottleGroup' position={[0, 0, 10]}>
				<MeshComponent
					name='xBottleTitle'
					geometry={nodes?.xBottleTitle.geometry}
					material={nodes?.xBottleTitle.material}
					meshPosition={[0, -30, 0]}
					materialType='plastic'
					variant='white'
				/>
				<group
					name='xBottleTagGroup'
					position={[0.02, -12.82, 3.28]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.25}
				>
					<group name='xBottleTagGroupItem'>
						<MeshComponent
							name='xBottleTagBg'
							geometry={nodes?.xBottleTagBg.geometry}
							material={nodes?.xBottleTagBg.material}
							meshPosition={[0, 0, -8]}
							meshScale={[1, 1, 1.8]}
							materialType='plastic'
							variant='purple'
						/>
						<MeshComponent
							name='xBottleTagItemLogo'
							geometry={nodes?.xBottleTagItemLogo.geometry}
							material={nodes?.xBottleTagItemLogo.material}
							meshPosition={[-0.09, -0.07, -5.1]}
						>
							<group
								name='xBottleTagSkull'
								position={[-0.14, -1.51, -2]}
								rotation={[0.26, 0, 0]}
								scale={[0.15, 0.12, 0.07]}
							>
								<group
									name='xBottleSkullGroup'
									position={[0.27, 48.1, 57.92]}
									scale={0.4}
								>
									<MeshComponent
										name='xBottleSkullTeethDown'
										geometry={nodes?.xBottleSkullTeethDown.geometry}
										material={nodes?.xBottleSkullTeethDown.material}
										meshPosition={[-0.07, -43.67, -0.8]}
										meshRotation={[0, 0, 0]}
										meshScale={1.12}
										materialType='plastic'
										variant='greenEw'
									/>
									<MeshComponent
										name='xBottleSkullTeethUp'
										geometry={nodes?.xBottleSkullTeethUp.geometry}
										material={nodes?.xBottleSkullTeethUp.material}
										meshPosition={[-0.39, 5.78, -0.03]}
										meshScale={1.12}
										materialType='plastic'
										variant='greenEw'
									/>
								</group>
								<MeshComponent
									name='xBottleSkullJaw'
									geometry={nodes?.xBottleSkullJaw.geometry}
									material={nodes?.xBottleSkullJaw.material}
									meshPosition={[-0.35, 5.73, 13.52]}
									meshScale={[0.35, 0.4, 0.4]}
									materialType='plastic'
									variant='greenEw'
								/>
								<MeshComponent
									name='xBottleSkullHead'
									geometry={nodes?.xBottleSkullHead.geometry}
									material={nodes?.xBottleSkullHead.material}
									meshPosition={[-0.76, 130.47, 4.79]}
									meshRotation={[0.05, 0, 0]}
									meshScale={[0.58, 0.48, 0.58]}
									materialType='plastic'
									variant='greenEw'
								/>
							</group>
						</MeshComponent>
					</group>
					<group name='xBottleLettersGroup' position={[0.56, -15.11, -5]}>
						<MeshComponent
							name='xBottleLettersItem'
							geometry={nodes?.xBottleLettersItem1.geometry}
							material={nodes?.xBottleLettersItem.material}
							meshPosition={[20.42, -9.61, 0]}
							meshRotation={[0, 0, -0.03]}
							meshScale={[1, 1, 1.79]}
							materialType='plastic'
							variant='redBloody'
						/>
						<MeshComponent
							name='xBottleLettersItem1'
							geometry={nodes?.xBottleLettersItem2.geometry}
							material={nodes?.xBottleLettersItem.material}
							meshPosition={[0, 4.6, 0]}
							meshRotation={[0, 0, 0.05]}
							meshScale={[1, 1, 1.79]}
							materialType='plastic'
							variant='redBloody'
						/>
						<MeshComponent
							name='xBottleLettersItem2'
							geometry={nodes?.xBottleLettersItem.geometry}
							material={nodes?.xBottleLettersItem.material}
							meshPosition={[0, -4.16, 0]}
							meshRotation={[0, 0, 0.05]}
							meshScale={1}
							materialType='plastic'
							variant='redBloody'
						/>
					</group>
				</group>
				<MeshComponent
					name='xBottleBody'
					geometry={nodes?.xBottleBody.geometry}
					material={nodes?.xBottleBody.material}
					meshPosition={[0, -0.5, 3.25]}
				/>
				<MeshComponent
					name='xBottleTop'
					geometry={nodes?.xBottleTop.geometry}
					material={nodes?.xBottleTop.material}
					meshPosition={[0, -0.5, 14.28]}
					materialType='plastic'
					variant='white'
				/>
				<MeshComponent
					name='xBottleTopBase'
					geometry={nodes?.xBottleTopBase.geometry}
					material={nodes?.xBottleTopBase.material}
					meshPosition={[0, -0.5, 16.06]}
					meshRotation={[0, Math.PI / 2, 0]}
					materialType='plastic'
					variant='white'
				/>
				<MeshComponent
					name='xBottleTopLetters'
					geometry={nodes?.xBottleTopLetters.geometry}
					material={nodes?.xBottleTopLetters.material}
					meshPosition={[-0.25, -0.69, 21.87]}
					materialType='plastic'
					variant='white'
				/>
			</group>
			<Floor
				geometry={nodes?.floor.geometry}
				material={nodes?.floor.material}
			/>
		</group>
	);
};

export default X;
