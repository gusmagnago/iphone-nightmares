import * as THREE from 'three';
import JackOLantern from '../JackOLantern/JackOLantern';
import Bat from '../Bat/Bat';
import Cat from '../Cat/Cat';
import { CatGLTFNodes } from '../Cat/Cat.types';
import { BGGLTFResult } from './BackgroundImage.types';
import Moon, { MoonGLTFNodes } from '../Moon/Moon';
import { arrayToVector3 } from '../../utils';
import { JackOLanternGLTFNodes } from '../JackOLantern/JackOLantern.types';
import { BatGLTFNodes } from '../Bat/Bat.types';

const BackgroundImage = ({ nodes }: BGGLTFResult) => {
	const jackOLantern = [
		{
			position: new THREE.Vector3(-45, -70, 15),
			rotation: new THREE.Euler(0, 0.35, 0),
			scale: 0.78,
		},
		{
			position: new THREE.Vector3(-30, -90, 25),
			rotation: new THREE.Euler(0, -0.17, 0),
			scale: 0.49,
		},
	];

	const bats = [
		{
			position: new THREE.Vector3(-48.82, 25, 25),
			rotation: new THREE.Euler(0.24, 0.77, -0.14),
			scale: 0.23,
		},
		{
			position: new THREE.Vector3(-66.73, -15, 20),
			rotation: new THREE.Euler(0.58, 0.62, -0.08),
			scale: 0.23,
		},
		{
			position: new THREE.Vector3(78.3, -72.8, 20),
			rotation: new THREE.Euler(-0.39, -0.83, -0.3),
			scale: 0.23,
		},
		{
			position: new THREE.Vector3(28.72, 31.04, 20),
			rotation: new THREE.Euler(0.36, -0.75, 0.25),
			scale: 0.23,
		},
	];

	const catPosition = new THREE.Vector3(5, -110, 20);

	return (
		<group name='background' position={[0, -19, 0]}>
			<Cat position={catPosition} nodes={nodes as CatGLTFNodes} />
			{jackOLantern.map(({ position, rotation, scale }, index) => (
				<JackOLantern
					position={position}
					rotation={rotation}
					scale={scale}
					key={index}
					nodes={nodes as JackOLanternGLTFNodes}
				/>
			))}
			<group position={[0, -50, 0]}>
				<Moon
					position={arrayToVector3([-30, 0, 0])}
					nodes={nodes as MoonGLTFNodes}
				/>
				<group position={[0, 0, 0]}>
					{bats.map(({ position, rotation, scale }, index) => (
						<Bat
							key={index}
							position={position}
							rotation={rotation}
							scale={scale}
							nodes={nodes as BatGLTFNodes}
						/>
					))}
				</group>
			</group>
		</group>
	);
};

export default BackgroundImage;
