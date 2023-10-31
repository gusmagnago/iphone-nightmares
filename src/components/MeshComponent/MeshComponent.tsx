import {
	// MeshRefractionMaterial,
	MeshTransmissionMaterial,
} from '@react-three/drei';
// import { useLoader } from '@react-three/fiber';
// import { RGBELoader } from 'three-stdlib';
import { palette } from '../../materials';
import { arrayToEuler, arrayToVector3 } from '../../utils';
import { MeshMaterialVariant, MeshCompProps } from './MeshComponent.types';
import { MeshProps } from '@react-three/fiber';

const MeshComponent = ({
	name,
	geometry,
	material,
	meshPosition,
	meshRotation,
	meshScale,
	materialType,
	variant,
	children,
	glassThickness,
}: MeshCompProps & MeshProps) => {
	// const texture = useLoader(RGBELoader, './studio.hdr');

	const scale = Array.isArray(meshScale)
		? arrayToVector3(meshScale)
		: meshScale;

	const applyMaterial = () => {
		const getPaletteVariant = (variant: MeshMaterialVariant | undefined) => {
			return palette[variant as MeshMaterialVariant];
		};

		const heavyMetal = {
			roughness: materialType === 'metallic' ? 0.4 : 0,
			metalness: materialType === 'metallic' ? 0.2 : 0.1,
		};

		switch (materialType) {
		case 'metallic':
			return (
				<meshStandardMaterial
					color={getPaletteVariant(variant)}
					{...heavyMetal}
				/>
			);
            
		case 'glass':
			return (
				<MeshTransmissionMaterial
					resolution={1024}
					distortion={0.25}
					color={getPaletteVariant(variant)}
					thickness={glassThickness ? glassThickness : 20}
					anisotropy={1}
					distortionScale={0}
					temporalDistortion={0}
					reflectivity={0.5}
					roughness={0}
				/>
			);

		case 'shiny':
			return (
				<>
					<meshStandardMaterial
						emissive={palette.ambar}
						emissiveIntensity={1}
					/>
					<hemisphereLight
						position={[0, 0, 0]}
						color={getPaletteVariant(variant)}
						intensity={0.2}
					/>
				</>
			);

		case 'glossy':
			return (
				<meshPhongMaterial
					color={getPaletteVariant(variant)}
					shininess={100}
					specular={palette.white}
					reflectivity={1}
				/>
			);

		default:
			return (
				<meshStandardMaterial
					color={getPaletteVariant(variant)}
					emissive={palette.black}
					roughness={0}
					metalness={0}
				/>
			);
		}
	};

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
			{materialType && variant && applyMaterial()}
		</mesh>
	);
};

export default MeshComponent;
