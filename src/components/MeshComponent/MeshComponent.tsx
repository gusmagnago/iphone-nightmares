import {
	MeshTransmissionMaterial,
} from '@react-three/drei';
import { palette } from '../../materials';
import { arrayToEuler, arrayToVector3 } from '../../utils';
import { MeshMaterialVariant, MeshCompProps } from './MeshComponent.types';
import { MeshProps, useThree } from '@react-three/fiber';

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
	glassReflectivity,
}: MeshCompProps & MeshProps) => {
	const { viewport } = useThree();
	const pixelRatio = window.devicePixelRatio || 1;
	const resolution = Math.min(viewport.width, viewport.height) * pixelRatio;

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
				<>
					<MeshTransmissionMaterial
						resolution={resolution}
						distortion={0.25}
						color={getPaletteVariant(variant)}
						transmission={0.9}
						thickness={glassThickness ? glassThickness : 20}
						anisotropy={1}
						distortionScale={0}
						temporalDistortion={0}
						reflectivity={glassReflectivity ? glassReflectivity : 0.2}
						roughness={0}
					/>
				</>
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
