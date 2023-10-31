import * as THREE from 'three';
import MeshComponent from '../MeshComponent/MeshComponent';


export type MoonGLTFNodes = {
  moon: THREE.Mesh;
};
export type MoonGLTFResult = {
  nodes: MoonGLTFNodes;
};

const Moon = ({ nodes, scale , position}: ObjectI & MoonGLTFResult) => {
	const meshPosition = [position.x, position.y, position.z];
	return (
		<MeshComponent
			name='moon'
			geometry={nodes?.moon.geometry}
			material={nodes?.moon.material}
			meshPosition={meshPosition}
			meshScale={scale as number}
			materialType={'shiny'}
			variant={'white'}
		/>
	);
};

export default Moon;
