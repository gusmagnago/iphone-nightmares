import * as THREE from 'three';

import { arrayToEuler, arrayToVector3 } from '../../../../../utils';
import Candle, { CandleNodes } from '../../../../Candle/Candle';
import JackOLantern from '../../../../JackOLantern/JackOLantern';
import MeshComponent from '../../../../MeshComponent/MeshComponent';
import Floor from '../../../Floor/Floor';
import { ClockGLTFResult } from '../../SecondRow.types';
import Doll from '../../../../Doll/Doll';
import { DollGLTFNodes, MoustacheProps } from '../../../../Doll/Doll.types';
import { JackOLanternGLTFNodes } from '../../../../JackOLantern/JackOLantern.types';

const Clock = ({ position, nodes }: ObjectI & ClockGLTFResult) => {
	const renderBars = (xVal: number, yVal: number) => {
		const instancesVal = 10;
		// const instanceDistance = 5;
		const radius = 16; // Adjust the radius as needed
		const rotationStep = (2 * Math.PI) / instancesVal; // Divide 360 degrees into equal parts

		const instances = Array.from({ length: instancesVal }, (_, i) => {
			const angle = rotationStep * i;
			const newX = xVal + Math.cos(angle) * radius;
			const newY = yVal + Math.sin(angle) * radius;
			const rotation = [0, 0, angle]; // Rotate each instance based on the angle

			return (
				<MeshComponent
					key={i}
					name='clockJailBar'
					geometry={nodes?.bookComBodyBar.geometry}
					material={nodes?.bookComBodyBar.material}
					meshPosition={[newX, newY, 1]}
					meshRotation={rotation}
					meshScale={1.3}
					materialType='metallic'
					variant='black'
				/>
			);
		});

		return <>{instances}</>;
	};

	const candleList = [
		{
			position: new THREE.Vector3(9.5, -9, 6),
			scale: 0.02,
		},
		{
			position: new THREE.Vector3(11.44, -11, 4),
			scale: 0.01,
		},
		{
			position: new THREE.Vector3(7.85, -12, 4),
			scale: 0.01,
		},
	];

	const clockJailTexts = [
		{ position: [-11.23, -6.13, 10], rotation: [0, 0, 1.13] },
		{ position: [-7.85, -1.91, 10], rotation: [0, 0, 0.7] },
		{ position: [-3.22, 0.19, 10], rotation: [0, 0, 0.44] },
		{ position: [1.67, 0.2, 10], rotation: [0, 0, -0.17] },
		{ position: [6.15, -1.38, 10], rotation: [0, 0, -0.61] },
		{ position: [8.58, -3.57, 10], rotation: [0, 0, -0.7] },
		{ position: [10.68, -6.67, 10], rotation: [0, 0, -1.13] },
	];

	const makeUp: MoustacheProps[] = [
		{
			nodes: nodes,
			position: [1.13, -0.2, -0.5],
			rotation: [0, 0, 0],
			material: nodes?.clockDollBody.material,
		},
		{
			nodes: nodes,
			position: [1.13, -0.2, -0.5],
			rotation: [0, 0, 0],
			material: nodes?.clockDollBody.material,
		},
	];

	return (
		<group name='contactsGroup' position={position}>
			<MeshComponent
				name='clockTitle'
				geometry={nodes?.clockTitle.geometry}
				material={nodes?.clockTitle.material}
				meshPosition={[0, -30, 0]}
				materialType='plastic'
				variant='white'
			/>
			<group name='clockGroupJail' position={[0, 0, 0]}>
				<JackOLantern
					position={arrayToVector3([-9.32, 3, 6])}
					rotation={arrayToEuler([Math.PI / 2, 0.27, 0])}
					scale={0.15}
					nodes={nodes as JackOLanternGLTFNodes}
				/>
				{candleList.map(({ position, scale }, index) => (
					<Candle
						key={`candleClock-${index}`}
						position={position}
						scale={scale}
						nodes={nodes as unknown as CandleNodes}
					/>
				))}
				<group name='clockJail' position={[0, 0, 0]}>
					<MeshComponent
						name='clockJailBase'
						geometry={nodes?.clockJailBase.geometry}
						material={nodes?.clockJailBase.material}
						meshPosition={[0, 0, 40]}
						materialType='plastic'
						variant='black'
					/>
					{renderBars(0, 0)}
					<group name='clockJailLetters' position={[-0.27, -7.55, 43.5]}>
						<MeshComponent
							name='clockJailLetter'
							geometry={nodes?.clockJailLetter.geometry}
							material={nodes?.clockJailLetter.material}
							meshPosition={[8.85, -1.11, -1.58]}
							meshRotation={[0, 0, 0.7]}
							materialType='plastic'
							variant='redBloody'
						/>
						<MeshComponent
							name='clockJailLetter1'
							geometry={nodes?.clockJailLetter1.geometry}
							material={nodes?.clockJailLetter.material}
							meshPosition={[-8.56, -0.87, -1.58]}
							meshRotation={[0, 0, -Math.PI / 4]}
							meshScale={1}
							materialType='plastic'
							variant='redBloody'
						/>
					</group>
					<group name='clockJailTextGroup' position={[0, 10, 32]}>
						{clockJailTexts.map(({ position, rotation }, index) => (
							<MeshComponent
								key={`clockJailText-${index}`}
								geometry={nodes?.clockJailText.geometry}
								material={nodes?.clockJailText.material}
								meshPosition={position}
								meshRotation={rotation}
								materialType='plastic'
								variant='redBloody'
							/>
						))}
					</group>
					<MeshComponent
						name='clockJailTriangle'
						geometry={nodes?.clockJailTriangle.geometry}
						material={nodes?.clockJailTriangle.material}
						meshPosition={[-2, 8, 42]}
						meshRotation={[0, 0, Math.PI / 3]}
						meshScale={1}
						materialType='glass'
						variant='glass'
                        
					/>
					<MeshComponent
						name='clockBase'
						geometry={nodes?.clockBase.geometry}
						material={nodes?.clockBase.material}
						meshPosition={[0, 0, 0]}
						materialType='plastic'
						variant='black'
					/>
				</group>
				<Doll
					nodes={nodes as unknown as DollGLTFNodes}
					hasCostume
					dollMakeUp={{
						lipstick: nodes?.clockDollBody.material,
						makeUp: makeUp,
					}}
					dollClothingMaterial={nodes?.clockDollBody.material}
					position={[30.5, 0, 18]}
					rotation={[1.5, 0, 0]}
				/>
			</group>
			<Floor
				position={[0, 0, 0]}
				geometry={nodes?.floor.geometry}
				material={nodes?.floor.material}
			/>
		</group>
	);
};

export default Clock;
