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

	return (
		<group position={position} rotation={rotation} scale={scale}>
			<MeshComponent
				name='handComponent'
				geometry={handIcon}
				material={handIconMaterial}
				meshPosition={[356.86, 422.32, 0]}
				materialType='glossy'
				variant='black'
			/>
		</group>
	);
};

export default Hand;
