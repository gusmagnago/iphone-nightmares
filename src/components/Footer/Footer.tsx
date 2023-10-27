import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import Peach from './components/Peach/Peach';
import { arrayToEuler, arrayToVector3 } from '../../utils';
import MeshComponent from '../MeshComponent/MeshComponent';
import Hand from './components/Hand/Hand';
import Banana from './components/Banana/Banana';
import GlassBox from '../GlassBox/GlassBox';

type GLTFResult = GLTF & {
  nodes: {
    footerBg: THREE.Mesh;
    peach: THREE.Mesh;
    leaf: THREE.Mesh;
    leafBase: THREE.Mesh;
    footerBoxTop: THREE.Mesh;
    footerBoxGlass: THREE.Mesh;
    footerBoxBase: THREE.Mesh;
    handIcon: THREE.Mesh;
    footerBoxLeg: THREE.Mesh;
    bananaSkin: THREE.Mesh;
    bananaInner: THREE.Mesh;
    moon: THREE.Mesh;
    screen: THREE.Mesh;
  };
};

const Footer = () => {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	const glassBoxGeometry = {
		geometries: {
			footerBoxTop: nodes.footerBoxTop.geometry,
			footerBoxGlass: nodes.footerBoxGlass.geometry,
			footerBoxLeg: nodes.footerBoxLeg.geometry,
			footerBoxBase: nodes.footerBoxBase.geometry,
		},
		materials: {
			footerBoxTop: nodes.footerBoxTop.material,
			footerBoxGlass: nodes.screen.material,
			footerBoxLeg: nodes.footerBoxLeg.material,
			footerBoxBase: nodes.footerBoxBase.material,
		},
	};

	const glassBoxes = [
		{
			children: (
				<Peach
					position={arrayToVector3([2.09, 0.21, 7.28])}
					rotation={arrayToEuler([Math.PI / 2, 0, 0])}
					scale={0.08}
					geometries={{
						peach: nodes.peach.geometry,
						leaf: nodes.leaf.geometry,
						leafBase: nodes.leafBase.geometry,
					}}
					materials={{
						peach: nodes.peach.material,
						leaf: nodes.leaf.material,
						leafBase: nodes.leafBase.material,
					}}
				/>
			),
			position: [-50, 0, 0],
		},
		{
			children: (
				<Hand
					position={arrayToVector3([2.31, 0, -0.66])}
					rotation={arrayToEuler([1.98, 1.1, Math.PI / 2])}
					scale={0.02}
					geometries={{
						handIcon: nodes.handIcon.geometry,
					}}
					materials={{
						handIcon: nodes.handIcon.material,
					}}
				/>
			),
			position: [10, 0, 0],
			basePosition: [-10.22, 3,0],
		},
		{
			children: (
				<Banana
					position={arrayToVector3([-0.94, 2.51, 1.74])}
					rotation={arrayToEuler([Math.PI / 2, 0, 0])}
					scale={0.13}
					geometries={{
						bananaSkin: nodes.bananaSkin.geometry,
						bananaInner: nodes.bananaInner.geometry,
					}}
					materials={{
						bananaSkin: nodes.bananaSkin.material,
						bananaInner: nodes.bananaInner.material,
					}}
				/>
			),
			position: [70, 0, 0],
		},
	];

	return (
		<group name='footer' position={[0, -200, 15]}>
			<MeshComponent
				name='footerBg'
				geometry={nodes.footerBg.geometry}
				material={nodes.screen.material}
				meshPosition={[0, 0, 0]}
			/>
			{glassBoxes.map((glassBox, index) => (
				<GlassBox
					key={`glassBox-${index}`}
					position={glassBox.position}
					basePosition={[-10.22, 3, 0]}
					{...glassBoxGeometry}
				>
					{glassBox.children}
				</GlassBox>
			))}
		</group>
	);
};

export default Footer;
