import MeshComponent from '../../../MeshComponent/MeshComponent';

type BananaProps = ObjectI & {
  geometries: {
    bananaSkin: THREE.BufferGeometry;
    bananaInner: THREE.BufferGeometry;
  };
  materials: {
    bananaSkin: MaterialI;
    bananaInner: MaterialI;
  };
};

const Banana = ({
	geometries,
	materials,
	position,
	rotation,
	scale,
}: BananaProps) => {
	const { bananaSkin, bananaInner } = geometries;
	const { bananaSkin: bananaSkinMaterial, bananaInner: bananaInnerMaterial } =
    materials;

	// position={[-0.94, 2.51, 1.74]}
	// 		rotation={[Math.PI / 2, 0, 0]}
	// 		scale={0.13}

	return (
		<group position={position} rotation={rotation} scale={scale}>
			<MeshComponent
				name='bananaSkin'
				geometry={bananaSkin}
				material={bananaSkinMaterial}
				meshPosition={[-76.6, -70.64, 0.72]}
				meshRotation={[0, 0, 0.37]}
				meshScale={0.52}
			/>
			<MeshComponent
				name='bananaInner'
				geometry={bananaInner}
				material={bananaInnerMaterial}
				meshPosition={[45, 97.92, -0.13]}
				meshRotation={[0, 0, 0.17]}
				meshScale={[-0.47, 0.27, 0.47]}
			/>
		</group>
	);
};

export default Banana;
