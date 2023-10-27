import MeshComponent from '../../../MeshComponent/MeshComponent';

type HandProps = ObjectI & {
  geometries: {
    handIcon: THREE.BufferGeometry;
  };
  materials: {
    handIcon: MaterialI;
  };
};

const Hand = ({
	geometries,
	materials,
	position,
	rotation,
	scale,
}: HandProps) => {
	const { handIcon } = geometries;
	const { handIcon: handIconMaterial } = materials;

	// position={[2.31, -6.82, -0.66]}
	// 		rotation={[1.98, 1.1, Math.PI / 2]}
	// 		scale={0.02}

	return (
		<group position={position} rotation={rotation} scale={scale}>
			<MeshComponent
				name='handComponent'
				geometry={handIcon}
				material={handIconMaterial}
				meshPosition={[356.86, 422.32, 0]}
			/>
		</group>
	);
};

export default Hand;
