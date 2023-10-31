import * as THREE from 'three';

import Bat from '../Bat/Bat';
import MeshComponent from '../MeshComponent/MeshComponent';
import Moon, { MoonGLTFNodes } from '../Moon/Moon';
import { arrayToVector3 } from '../../utils';
import { BatGLTFNodes } from '../Bat/Bat.types';
import { WeatherGLTFResult } from './Weather.types';

const Weather = ({ position, nodes }: ObjectPos & WeatherGLTFResult) => {
	const weatherBats = [
		{
			position: new THREE.Vector3(4.97, 13.57, 22.43),
			rotation: new THREE.Euler(-0.21, 0.64, -0.5),
		},
		{
			position: new THREE.Vector3(16.04, 1.84, 19.79),
			rotation: new THREE.Euler(0.29, -0.49, 0),
		},
	];

	const weatherClouds = [
		{
			position: [-0.25, -3.5, 4],
		},
		{
			position: [0.75, -3.5, 0],
		},
		{
			position: [-1.25, 0.5, 2],
		},
		{
			position: [5.75, -1.5, 4],
		},
		{
			position: [-8.75, 0.5, 2.5],
		},
		{
			position: [1.25, 0.5, 4.5],
		},
		{
			position: [1.25, -3.5, 3.5],
		},
	];

	return (
		<group name='weatherGroup' position={position}>
			<group name='weatherGroupClouds' position={[13.5, 11.9, 0]}>
				<group name='cloudsGroup' position={[3.75, -1.5, 2]}>
					<group name='clouds'>
						<group name='weatherClouds' position={[-18.5, -6, 6]}>
							{weatherClouds.map(({ position }, index) => {
								const cloudKey = `weatherCloud${
									index + 1
								}` as keyof typeof nodes;
								const geometry = nodes[cloudKey]?.geometry;

								return (
									<MeshComponent
										name='weatherCloud'
										key={`weatherCloud-${index}`}
										geometry={geometry}
										material={nodes?.weatherCloud1.material}
										meshPosition={position}
										materialType='plastic'
										variant='white'
									/>
								);
							})}
						</group>
					</group>
				</group>
				<Moon
					position={arrayToVector3([-3, 1.5, 0])}
					nodes={nodes as unknown as MoonGLTFNodes}
					scale={0.5}
				/>
			</group>
			{weatherBats.map(({ position, rotation }, index) => (
				<Bat
					position={position}
					rotation={rotation}
					scale={0.07}
					key={index}
					nodes={nodes as unknown as BatGLTFNodes}
				/>
			))}
			<MeshComponent
				name='weatherBG'
				geometry={nodes?.weatherBG.geometry}
				material={nodes?.weatherBG.material}
				meshPosition={[0, 6.8, 0]}
				materialType='glass'
				variant='glass'
			/>
			<group name='weatherValGroup' position={[-11.34, 32.36, 10]}>
				<MeshComponent
					geometry={nodes?.weatherValItem1.geometry}
					material={nodes?.weatherValItem1.material}
					meshPosition={[9, -1, 0]}
					materialType='plastic'
					variant='orangePumpkins'
				/>
				<MeshComponent
					geometry={nodes?.weatherValItem2.geometry}
					material={nodes?.weatherValItem2.material}
					meshPosition={[-9, 1, 0]}
					materialType='plastic'
					variant='orangePumpkins'
				/>
			</group>
			<MeshComponent
				geometry={nodes?.weatherCity.geometry}
				material={nodes?.weatherCity.material}
				meshPosition={[-21.7, 43.36, 5]}
				materialType='plastic'
				variant='white'
			/>
			<MeshComponent
				geometry={nodes?.weatherDesc.geometry}
				material={nodes?.weatherDesc.material}
				meshPosition={[-7.6, -19.64, 5]}
				materialType='plastic'
				variant='white'
			/>
			<MeshComponent
				geometry={nodes?.weatherTitle.geometry}
				material={nodes?.weatherTitle.material}
				meshPosition={[3.3, -51.64, -1.25]}
				materialType='plastic'
				variant='white'
			/>
		</group>
	);
};

export default Weather;
