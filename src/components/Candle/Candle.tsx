import * as THREE from 'three';
import MeshComponent from '../MeshComponent/MeshComponent';

export type CandleNodes =  {
 
    cameraCandle: THREE.Mesh;
    cameraCandleFlame: THREE.Mesh;
    cameraCandleCandle: THREE.Mesh;

};

type CandleGLTFResult = {
    nodes: CandleNodes;
}

const Candle = ({ position, scale, nodes }: ObjectI & CandleGLTFResult) => {
    
	return (
		<group
			name='candleGroup'
			position={position}
			rotation={[Math.PI / 2, 0, 0]}
			scale={scale}
		>
			<MeshComponent
				geometry={nodes.cameraCandle.geometry}
				material={nodes.cameraCandle.material}
				meshPosition={[1, 21.19, -1.15]}
				meshRotation={[-1.62, -0.06, 1.06]}
				meshScale={[0.09, 0.21, 0.93]}
			/>
			<MeshComponent
				name='flame'
				geometry={nodes.cameraCandleFlame.geometry}
				material={nodes.cameraCandleFlame.material}
				meshPosition={[1.22, 63.42, -1.63]}
				meshRotation={[3.12, 0, 0]}
				meshScale={[0.11, 0.13, 0.13]}
			/>
			<MeshComponent
				name='candle'
				geometry={nodes.cameraCandleCandle.geometry}
				material={nodes.cameraCandleCandle.material}
				meshPosition={[3.53, -82.27, 0]}
				meshRotation={[0, -0.02, 0]}
				meshScale={1.74}
			/>
		</group>

	);
};

export default Candle;