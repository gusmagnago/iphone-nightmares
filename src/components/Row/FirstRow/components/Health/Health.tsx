import MeshComponent from '../../../../MeshComponent/MeshComponent';
import { HealthGLTFResult } from '../../FirstRow.types';
import Floor from '../../../Floor/Floor';
// import { useRef, useState } from 'react';
// import { ThreeEvent, useThree } from '@react-three/fiber';

const Health = ({ position, nodes }: ObjectI & HealthGLTFResult) => {
	// const healthGroupRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(
	// 	null
	// );
	// const { camera } = useThree();
	// const [initScale, setInitScale] = useState<THREE.Vector3 | number>(0.22);
	// const [initMaterialPosition, setInitMaterialPosition] = useState();
	// const [initMaterialRotation, setInitMaterialRotation] = useState<number[]>([
	// 	0, 0, 0,
	// ]);
	// const [initTitleRotation, setInitTitleRotation] = useState<number[]>([
	// 	0, 0, 0,
	// ]);

	const healthBloods = [
		{ position: [-2.66, -7.41, 0] },
		{ position: [6.73, 7.41, 0] },
		{ position: [-6.73, 5.59, 0] },
	];

	// const handleClick = (event: ThreeEvent<MouseEvent>) => {
	// 	const rotationSpeed = 0.2;
	// 	event.stopPropagation();

	// 	camera.lookAt(0, 0, 0);

	// 	if (healthGroupRef?.current) {
	// 		healthGroupRef.current.rotation.x -= rotationSpeed;
	// 		setInitMaterialPosition([100, , 200]);
	// 		setInitMaterialRotation([Math.PI / 10, 0, 0]);
	// 		setInitTitleRotation([-90, Math.PI / 1, 0]);
	// 		setInitScale(1);
	// 	}
	// };

	return (
		<group
			name='health'
			// ref={healthGroupRef}
			position={position}
			// onClick={handleClick}
		>
			<MeshComponent
				name='healthTitle'
				geometry={nodes?.healthTitle.geometry}
				material={nodes?.healthTitle.material}
				meshPosition={[5.25, -30, 0]}
				materialType='plastic'
				variant='white'
			/>
			<group name='healthHeartGroup' position={[10, 0, 5]} scale={0.22}>
				<group name='healthBloodGroup' position={[-14.29, -49.94, 5.01]}>
					{healthBloods.map(({ position }, index) => (
						<MeshComponent
							key={`healthBlood-${index}`}
							geometry={nodes?.healthBlood.geometry}
							material={nodes?.healthBlood.material}
							meshPosition={position}
							meshRotation={[0, 0, -0.3]}
							meshScale={0.35}
							materialType='plastic'
							variant='redBloody'
						/>
					))}
				</group>
				<MeshComponent
					geometry={nodes?.healthBloodScary.geometry}
					material={nodes?.healthBlood.material}
					meshPosition={[12.49, -10.83, -7.8]}
					materialType='plastic'
					variant='redBloody'
				/>
				<group
					name='healthKnifeGroup'
					position={[0, 0, 1.66]}
					rotation={[0, 0, -0.17]}
				>
					<MeshComponent
						name='healthKnifeBody'
						geometry={nodes?.healthKnifeBody.geometry}
						material={nodes?.healthKnifeBody.material}
						meshPosition={[0, 36.5, -0.36]}
						materialType='metallic'
						variant='grayLight'
					/>
					<MeshComponent
						name='healthKnifeHolder'
						geometry={nodes?.healthKnifeHolder.geometry}
						material={nodes?.healthKnifeHolder.material}
						meshPosition={[2.85, 64.68, -5.36]}
						materialType='plastic'
						variant='gray'
					/>
				</group>
				<MeshComponent
					name='healthHeart'
					geometry={nodes?.healthHeart.geometry}
					material={nodes?.healthHeart.material}
					meshPosition={[-5.82, 2.24, 0]}
					materialType='plastic'
					variant='redBloodstain'
				/>
			</group>
			<Floor
				geometry={nodes?.healthBG.geometry}
				material={nodes?.healthBG.material}
				isHeart
			/>
		</group>
	);
};

export default Health;
