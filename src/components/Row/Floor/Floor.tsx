import * as THREE from 'three';
import MeshComponent from '../../MeshComponent/MeshComponent';

type FloorProps = {
  position: number[];
  geometry: THREE.BufferGeometry;
  material: MaterialI;
  isHeart?: boolean;
};

const Floor = ({ position, geometry, material, isHeart }: FloorProps) => {
	return (
		<MeshComponent
			name='floor'
			geometry={geometry}
			material={material}
			meshPosition={position}
			materialType='glossy'
			variant={isHeart ? 'white' : 'black'}
		/>
	);
};

export default Floor;
