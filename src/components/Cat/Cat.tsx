import MeshComponent from '../MeshComponent/MeshComponent';
import { CatGLTFResult } from './Cat.types';

const Cat = ({ position, nodes }: ObjectI & CatGLTFResult) => {
	const catLittlePaws = [
		{
			position: [-20.07, 0.49, 18.26],
		},
		{
			position: [20.07, 0.49, 18.26],
		},
	];

	const catEyes = [
		{
			position: [0, 0, 0],
		},
		{
			position: [30, 0, 0],
		},
	];

	const catStripes = [
		{
			position: [8.7, 0, 0],
		},
		{
			position: [0, 0, 0],
		},
		{
			position: [-8.7, 0, 0],
		},
	];

	const catTeeth = [
		{
			position: [7.43, 0, 0],
		},
		{
			position: [-7.43, 0, 0],
		},
	];

	const catEars = [
		{
			position: [40, 0, 0],
		},
		{
			position: [0, 0, 0],
		},
	];

	return (
		<group name='catComp' position={position}>
			<group name='hands' position={[0.85, -35, 32.25]}>
				{catLittlePaws.map(({ position }, index) => (
					<MeshComponent
						key={`catLittlePaw-${index}`}
						geometry={nodes?.hand1.geometry}
						material={nodes?.hand1.material}
						meshPosition={position}
						meshRotation={[Math.PI / 2, 0, 0]}
						materialType={'metallic'}
						variant='gray'
					/>
				))}
			</group>
			<group name='catEyes' position={[-15, 0, 27]}>
				{catEyes.map(({ position }, index) => (
					<MeshComponent
						key={`catEye-${index}`}
						geometry={nodes?.catEye.geometry}
						material={nodes?.catEye.material}
						meshPosition={position}
						materialType='glossy'
						variant='black'
					/>
				))}
			</group>
			<group name='stripes' position={[0.42, 24.5, 11.93]}>
				{catStripes.map(({ position }, index) => (
					<MeshComponent
						key={`catStripe-${index}`}
						geometry={nodes?.stripe1.geometry}
						material={nodes?.stripe1.material}
						meshPosition={position}
						meshRotation={[0, Math.PI / 2, 0]}
						materialType={'plastic'}
						variant={'black'}
					/>
				))}
			</group>
			<group name='catMouthGroup' position={[0.42, -21.38, 20.72]}>
				<MeshComponent
					name='catMouthBlack'
					geometry={nodes?.catMouthBlack.geometry}
					material={nodes?.catMouthBlack.material}
					meshPosition={[-0.12, -0.47, -0.99]}
					materialType={'plastic'}
					variant={'black'}
				/>
				<group name='teethGroup' position={[0.06, -0.63, 5.35]}>
					{catTeeth.map(({ position }, index) => (
						<MeshComponent
							key={`catTeeth-${index}`}
							geometry={nodes?.teeth.geometry}
							material={nodes?.teeth.material}
							meshPosition={position}
							meshRotation={[Math.PI, Math.PI / 2, 0]}
							meshScale={1}
							materialType={'plastic'}
							variant={'white'}
						/>
					))}
				</group>
				<MeshComponent
					name='catMouthRed'
					geometry={nodes?.catMouthRed.geometry}
					material={nodes?.catMouthRed.material}
					meshPosition={[0, 2.32, 0.91]}
					materialType={'plastic'}
					variant={'redBloody'}
				/>
			</group>
			<group name='catEarsGroup' position={[-20.03, 29.5, 16.01]}>
				{catEars.map(({ position }, index) => (
					<MeshComponent
						key={`catEar-${index}`}
						geometry={nodes?.catEar.geometry}
						material={nodes?.catEar.material}
						meshPosition={position}
						meshRotation={[-Math.PI, 8, -Math.PI]}
						materialType={'metallic'}
						variant={'gray'}
					/>
				))}
			</group>
			<MeshComponent
				name='catBody'
				geometry={nodes?.catBody.geometry}
				material={nodes?.catBody.material}
				meshPosition={[0.42, -7, -5.99]}
				materialType={'metallic'}
				variant={'gray'}
			/>
		</group>
	);
};

export default Cat;
