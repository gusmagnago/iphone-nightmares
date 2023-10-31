import * as THREE from 'three';
import MeshComponent from '../../MeshComponent/MeshComponent';

type FloorProps = {
  geometry: THREE.BufferGeometry;
  material: MaterialI;
  isHeart?: boolean;
};

const Floor = ({ geometry, material, isHeart }: FloorProps) => {
	return (
		<MeshComponent
			name='floor'
			geometry={geometry}
			material={material}
			meshPosition={[0, 0, 0]}
			materialType='glossy'
			variant={isHeart ? 'white' : 'black'}
		/>
	);
};

export default Floor;
