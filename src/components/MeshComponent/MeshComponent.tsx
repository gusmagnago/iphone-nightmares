
import { ReactNode } from 'react';
import { arrayToEuler, arrayToVector3 } from '../../utils';

type MeshProps = {
  name?: string;
  meshPosition?: number[];
  meshRotation?: number[];
  meshScale?: number[] | number;
  children?:ReactNode
} & GeoMaterial;

const MeshComponent = ({
	name,
	geometry,
	material,
	meshPosition,
	meshRotation,
	meshScale,
	children
}: MeshProps) => {

	const scale = Array.isArray(meshScale)
		? arrayToVector3(meshScale)
		: meshScale;

	return (
		<mesh
			name={name}
			geometry={geometry}
			material={material}
			castShadow
			receiveShadow
			position={arrayToVector3(meshPosition)}
			rotation={arrayToEuler(meshRotation)}
			scale={scale}
		>
			{children}
		</mesh>
	);
};

export default MeshComponent;
