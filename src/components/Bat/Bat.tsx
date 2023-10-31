import MeshComponent from '../MeshComponent/MeshComponent';
import { BatLTFResult } from './Bat.types';

const Bat = ({ position, rotation, scale, nodes }: ObjectI & BatLTFResult) => {
	const batWings = [
		{ position: [-30, 10, -15] },
		{ position: [30, 10, 0], rotation: [-Math.PI, 0, -Math.PI] },
	];
	const batTeeths = [
		{ position: [5.5, -2.5, 35] },
		{ position: [-5.5, -2.5, 35] },
	];
	const batEyes = [{ position: [8.5, 0, 0] }, { position: [-8.5, 0, 0] }];

	const batEars = [
		{ position: [19.49, 39.5, 24.26] },
		{ position: [-19.49, 39.5, 24.26] },
	];

	return (
		<group position={position} rotation={rotation} scale={scale}>
			{batWings.map(({ position, rotation }, index) => (
				<MeshComponent
					key={`batWing-${index}`}
					geometry={nodes?.batWing.geometry}
					material={nodes?.batWing.material}
					meshPosition={position}
					meshRotation={rotation}
					materialType='metallic'
					variant='purple'
				/>
			))}
			{batTeeths.map(({ position }, index) => (
				<MeshComponent
					key={`batTeeth-${index}`}
					geometry={nodes?.teeth.geometry}
					material={nodes?.teeth.material}
					meshPosition={position}
					meshRotation={rotation}
					meshScale={2.5}
					materialType='glossy'
					variant='white'
				/>
			))}
			<MeshComponent
				geometry={nodes?.batMouth.geometry}
				material={nodes?.batMouth.material}
				meshPosition={[-0.45, -4.5, 38.89]}
				meshRotation={[0, Math.PI / 2, 0]}
				meshScale={[2.12, 1, 1]}
				materialType='plastic'
				variant='redBloody'
			/>
			<group position={[0, 10.5, 37.51]}>
				{batEyes.map(({ position }, index) => (
					<MeshComponent
						key={`batEye-${index}`}
						geometry={nodes?.batEye.geometry}
						material={nodes?.batEye.material}
						meshPosition={position}
						materialType='glossy'
						variant='black'
					/>
				))}
			</group>
			{batEars.map(({ position }, index) => (
				<MeshComponent
					key={`batEar-${index}`}
					geometry={nodes?.batEar.geometry}
					material={nodes?.batEar.material}
					meshPosition={position}
					materialType={'metallic'}
					variant='purple'
				/>
			))}
			<MeshComponent
				geometry={nodes?.batBody.geometry}
				material={nodes?.batBody.material}
				meshPosition={[0, -4.5, -3.03]}
				materialType={'metallic'}
				variant='purple'
			/>
		</group>
	);
};

export default Bat;
