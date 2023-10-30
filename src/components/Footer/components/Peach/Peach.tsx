import * as THREE from 'three';
import MeshComponent from '../../../MeshComponent/MeshComponent';

type PeachProps = ObjectI & {
  geometries: {
    peach: THREE.BufferGeometry;
    leaf: THREE.BufferGeometry;
    leafBase: THREE.BufferGeometry;
  };
  materials: {
    peach: MaterialI;
    leaf: MaterialI;
    leafBase: MaterialI;
  };
};

const Peach = ({
	position,
	rotation,
	scale,
	geometries,
	materials,
}: PeachProps) => {
	const { peach, leaf, leafBase } = geometries;

	const {
		peach: peachMaterial,
		leaf: leafMaterial,
		leafBase: leafBaseMaterial,
	} = materials;

	return (
		<group name='peach' position={position} rotation={rotation} scale={scale}>
			<MeshComponent
				name='peachEl'
				geometry={peach}
				material={peachMaterial}
				meshPosition={[0, -17.19, -0.02]}
				meshScale={[0.51, 0.57, 0.51]}
			/>
			<MeshComponent
				name='leaf'
				geometry={leaf}
				material={leafMaterial}
				meshPosition={[-37.47, 96.86, -4.01]}
				meshRotation={[2.63, -0.21, -2.57]}
				meshScale={[1.43, 1.48, 0.77]}
			/>
			<MeshComponent
				name='leafBase'
				geometry={leafBase}
				material={leafBaseMaterial}
				meshPosition={[21.28, 91.72, 0.24]}
				meshRotation={[0, 0, 0.7]}
				meshScale={[1.42, 1.42, 0.73]}
				materialType='plastic'
				variant='redBloody'
			/>
		</group>
	);
};

export default Peach;
