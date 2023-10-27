import * as THREE from 'three';
import MeshComponent from '../../MeshComponent/MeshComponent';

type FloorProps = {
  position: number[];
  geometry: THREE.BufferGeometry;
  material: MaterialI;
};

const Floor = ({ position, geometry, material }: FloorProps) => {
	return (
		<MeshComponent
			name='floor'
			geometry={geometry}
			material={material}
			meshPosition={position}
		/>
	);
};

export default Floor;
