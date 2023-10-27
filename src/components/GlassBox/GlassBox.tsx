import { ReactNode } from 'react';
import * as THREE from 'three';
import MeshComponent from '../MeshComponent/MeshComponent';
import { arrayToVector3 } from '../../utils';


type GlassBoxProps =  {
  geometries: {
    footerBoxTop: THREE.BufferGeometry;
    footerBoxGlass: THREE.BufferGeometry;
    footerBoxLeg: THREE.BufferGeometry;
    footerBoxBase: THREE.BufferGeometry;
  };
  materials: {
    footerBoxTop: MaterialI
    footerBoxGlass: MaterialI
    footerBoxLeg: MaterialI
    footerBoxBase: MaterialI
  };
  basePosition: number[]
  position: number[]
  children: ReactNode
};

const GlassBox = ({
	children,
	position,
	geometries,
	materials,
	basePosition,
}: GlassBoxProps) => {


	const {
		footerBoxTop,
		footerBoxGlass,
		footerBoxLeg,
		footerBoxBase,
	} = geometries;

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

	const glassBoxPosition = arrayToVector3(position);

	return (
		<group position={glassBoxPosition}>
			<group position={[-10.48, 3.75, 20.47]}>
				{children}
				<MeshComponent
					name='boxTop'
					geometry={footerBoxTop}
					material={topMaterial}
					meshPosition={[0.26, 0.09, 28]}
				/>
				<MeshComponent
					name='boxGlass'
					geometry={footerBoxGlass}
					material={glassMaterial}
					meshPosition={[0.48, 0.25, -20]}
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
						/>
					))}
				</group>
			</group>
			<MeshComponent
				name='boxBase'
				geometry={footerBoxBase}
				material={baseMaterial}
				meshPosition={basePosition}
			/>
		</group>
	);
};

export default GlassBox;
