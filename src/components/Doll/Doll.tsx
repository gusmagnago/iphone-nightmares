import * as THREE from 'three';

import MeshComponent from '../MeshComponent/MeshComponent';
import { DollProps } from './Doll.types';
import { arrayToEuler, arrayToVector3 } from '../../utils';

const Doll = ({
	position,
	rotation,
	nodes,
	hasCostume,
	dollClothingMaterial,
	dollMakeUp,
}: DollProps) => {
	const chestValues = [
		{
			position: new THREE.Vector3(-4.5, 0, 0),
			rotate: new THREE.Euler(Math.PI, Math.PI, Math.PI),
			titPosition: [-2.54, -2, 1.2],
			titRotation: [Math.PI, Math.PI, Math.PI],
		},
		{
			position: new THREE.Vector3(4.5, 0, 0),
			rotate: new THREE.Euler(0, 0, 0),
			titPosition: [2.54, -2.03, 1.2],
			titRotation: [0, 0, 0],
		},
	];

	const eyes = [
		{
			position: [14.5, 0, 0],
		},
		{
			position: [-14.5, 0, 0],
		},
	];

	const dollLegs = [
		{ position: new THREE.Vector3(0, 2.14, 0) },
		{ position: new THREE.Vector3(0, 4.02, 0) },
	];

	const dollShoes = [
		{
			position: new THREE.Vector3(4.21, -4.5, -0.1),
			rotation: new THREE.Euler(0, 0.77, 0),
		},
		{
			position: new THREE.Vector3(-5.79, -4.5, -0.1),
			rotation: new THREE.Euler(0, -0.77, 0),
		},
	];

	const dollShoeFingers = [
		{
			position: new THREE.Vector3(6.97, 9.85, 4.58),
			rotation: new THREE.Euler(0, 0.64, 0),
		},
		{
			position: new THREE.Vector3(31.37, 9.85, -10.39),
			rotation: new THREE.Euler(0, 1.34, 0),
		},
		{ position: new THREE.Vector3(-20.55, 9.85, 1.72) },
	];

	return (
		<group
			name='doll'
			position={arrayToVector3(position)}
			rotation={arrayToEuler(rotation)}
			scale={[0.76, 0.81, 0.9]}
		>
			<group
				name='dollFaceComp'
				position={[-39.8, 13.89, 10.35]}
				scale={[1, 0.93, 1]}
			>
				<group name='dollEyesGroup' position={[0, 2.29, 0]} scale={0.23}>
					{eyes.map(({ position }, index) => (
						<MeshComponent
							key={`dollEye-${index}`}
							name='dollEye'
							geometry={nodes?.grindrDollEye.geometry}
							material={nodes?.grindrDollEye.material}
							meshPosition={position}
							materialType='glossy'
							variant='black'
						/>
					))}
				</group>
				<MeshComponent
					name='dollMouth'
					geometry={nodes?.grindrDollMouth.geometry}
					material={
						hasCostume ? dollMakeUp.lipstick : nodes?.grindrDollMouth.material
					}
					meshPosition={[0, 0, -0.4]}
					meshScale={[1, 0.3, 1]}
					materialType='plastic'
					variant={hasCostume ? 'redBloody' : 'black'}
				/>
				<MeshComponent
					name='dollBg'
					geometry={nodes?.grindrDollBg.geometry}
					material={nodes?.grindrDollBg.material}
					meshPosition={[0, 2.05, -1.13]}
					meshScale={[1, 1, 1.46]}
					materialType='plastic'
					variant='brownLight'
				/>
			</group>
			<group name='dollBodyComp' position={[-39.8, 6.62, -0.09]}>
				<MeshComponent
					name='dollBody'
					geometry={nodes?.grindrDollBody.geometry}
					material={
						hasCostume ? dollClothingMaterial : nodes?.grindrDollBody.material
					}
					meshPosition={[0, 0, -1.97]}
					materialType='metallic'
					variant={hasCostume ? 'black' : 'brown'}
				>
					<MeshComponent
						name='dollChest'
						geometry={nodes?.grindrDollChest.geometry}
						material={
							hasCostume
								? dollClothingMaterial
								: nodes?.grindrDollChest.material
						}
						meshPosition={[0, -3.36, 12.01]}
						meshScale={[1, 0.92, 1.46]}
						materialType={hasCostume ? 'glossy' : 'metallic'}
						variant={hasCostume ? 'blackLight' : 'brownLight'}
					>
						<group name='dollChestGroup' position={[-0.05, 5.5, 0.42]}>
							<MeshComponent
								name='dollBelly'
								geometry={nodes?.grindrDollBelly.geometry}
								material={
									hasCostume
										? dollClothingMaterial
										: nodes?.grindrDollBelly.material
								}
								meshPosition={[0, -8, -0.5]}
								meshRotation={[-0.34, 0.01, -0.02]}
								meshScale={[0.95, 0.96, 0.27]}
								materialType={hasCostume ? 'glossy' : 'metallic'}
								variant={hasCostume ? 'blackLight' : 'brownLight'}
							/>
							{chestValues.map(
								({ position, rotate, titPosition, titRotation }, index) => (
									<group
										name='dollTits'
										position={position}
										rotation={rotate}
										key={`dollChest-${index}`}
									>
										<MeshComponent
											geometry={nodes?.grindrDollTit.geometry}
											material={
												hasCostume
													? dollClothingMaterial
													: nodes?.grindrDollTit.material
											}
											meshPosition={titPosition}
											meshRotation={titRotation}
											meshScale={[0.91, 0.8, 0.96]}
											materialType={hasCostume ? 'glossy' : 'metallic'}
											variant={hasCostume ? 'blackLight' : 'brown'}
										/>
										<MeshComponent
											geometry={nodes?.dollChestTit.geometry}
											material={nodes?.dollChestTit.material}
											meshPosition={[0, 0, 0]}
											meshRotation={[-0.23, 0.01, -0.02]}
											meshScale={[1, 0.99, 0.36]}
											materialType={hasCostume ? 'glossy' : 'metallic'}
											variant={hasCostume ? 'blackLight' : 'brownLight'}
										/>
									</group>
								)
							)}
						</group>
					</MeshComponent>
				</MeshComponent>
			</group>
			<group name='dollLegs' position={[-39.09, -14.03, -0.32]}>
				<group name='dollLegs' position={[-0.71, 1.02, -1.74]}>
					{dollLegs.map(({ position }, index) => (
						<group
							name='dollLegSocks'
							key={`dollLegSocks-${index}`}
							position={position}
							scale={[1, 0.65, 1]}
						>
							<MeshComponent
								name='dollLegItem'
								geometry={nodes?.grindrDollLegItem.geometry}
								material={nodes?.grindrDollLegItem.material}
								meshPosition={[-3.5, -0.63, 0]}
								meshRotation={[Math.PI, 0, 0]}
								meshScale={[1, 1.14, 1]}
								materialType='metallic'
								variant={hasCostume ? 'black' : 'brownLight'}
							/>
							<MeshComponent
								name='dollLegItem1'
								geometry={nodes?.grindrDollLegItem.geometry}
								material={nodes?.grindrDollLegItem.material}
								meshPosition={[3.5, -0.63, 0]}
								meshRotation={[Math.PI, 0, 0]}
								meshScale={[1, 1.14, 1]}
								materialType='metallic'
								variant={hasCostume ? 'black' : 'brownLight'}
							/>
						</group>
					))}
				</group>
				{dollShoes.map(({ position, rotation }, index) => (
					<group
						name='dollShoe'
						position={position}
						rotation={rotation}
						scale={0.08}
						key={`dollShoe-${index}`}
					>
						<MeshComponent
							name='dollShoeLeg'
							geometry={nodes?.grindrDollShoeLeg.geometry}
							material={nodes?.grindrDollShoeLeg.material}
							meshPosition={[1.92, 30.08, -28.29]}
							meshRotation={[-Math.PI, -0.2, -Math.PI / 2]}
							meshScale={1}
							materialType='metallic'
							variant='black'
						/>
						{dollShoeFingers.map(({ position, rotation }, index) => (
							<group
								name='dollShoeFinger'
								position={position}
								rotation={rotation}
								scale={1}
								key={`dollShoeFinger-${index}`}
							>
								<MeshComponent
									name='dollShoeBack'
									geometry={nodes?.grindrDollShoeBack.geometry}
									material={nodes?.grindrDollShoeBack.material}
									meshPosition={[0, -9.85, 0]}
									meshRotation={[-Math.PI / 2, 0, -2.01]}
									materialType='metallic'
									variant='black'
								/>
								<MeshComponent
									name='dollShoeFront'
									geometry={nodes?.grindrDollShoeFront.geometry}
									material={nodes?.grindrDollShoeFront.material}
									meshPosition={[-28.22, 26.6, 61.9]}
									meshRotation={[2.73, -1.22, 2.24]}
									meshScale={1}
									materialType='glossy'
									variant='grayLight'
								/>
							</group>
						))}
					</group>
				))}
			</group>
		</group>
	);
};

export default Doll;
