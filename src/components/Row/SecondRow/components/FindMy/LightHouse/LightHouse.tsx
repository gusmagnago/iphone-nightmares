import { arrayToVector3 } from '../../../../../../utils';
import MeshComponent from '../../../../../MeshComponent/MeshComponent';

type LighthouseProps = {
  whiteGeometry: GeoMaterial;
  redGeometry: GeoMaterial;
};

const LightHouse = ({
	whiteGeometry,
	redGeometry,
	position,
}: ObjectI & LighthouseProps) => {
	const renderParts = (whiteBodyPos: number[], redBodyPos: number[]) => (
		<>
			<MeshComponent
				name='LighthouseBodyPartWhite'
				geometry={whiteGeometry.geometry}
				material={whiteGeometry.material}
				meshPosition={whiteBodyPos}
				materialType='metallic'
				variant='white'
			/>
			<MeshComponent
				name='LighthouseBodyPartRed'
				geometry={redGeometry.geometry}
				material={redGeometry.material}
				meshPosition={redBodyPos}
				materialType='metallic'
				variant='redBloody'
			/>
		</>
	);

	const lightHouseValues = [
		{
			wrapperPos: [0, -0.75, -18.25],
			whiteBodyPos: [0, 0.75, 0],
			redBodyPos: [0, 0.75, -10],
		},
		{
			wrapperPos: [0, -0.25, -4.75],
			whiteBodyPos: [0, 0.25, 4.5],
			redBodyPos: [0, 0.25, -4.5],
		},
		{
			wrapperPos: [0, -1.25, 18.75],
			whiteBodyPos: [0, 1.25, -0.5],
			redBodyPos: [0, 1.25, -9.5],
		},
	];

	return (
		<group name='LighthouseBody' position={position}>
			{lightHouseValues.map(
				({ wrapperPos, whiteBodyPos, redBodyPos }, index) => (
					<group
						position={arrayToVector3(wrapperPos)}
						key={`LighthouseBodyPart-${index}-val`}
					>
						{renderParts(whiteBodyPos, redBodyPos)}
					</group>
				)
			)}
		</group>
	);

};

export default LightHouse;
