import MeshComponent from '../MeshComponent/MeshComponent';
import { InfoGLTFResult } from './Info.types';

const Info = ({ nodes }: InfoGLTFResult) => {
	const seringeCircles = [
		{ position: [-14.82, -1.51, 3.69] },
		{ position: [-14.82, 1.85, 3.69] },
	];

	const seringeTops = [
		{ position: [6.67, 0, 4.31] },
		{ position: [-12.22, 0, 4.31] },
	];

	return (
		<group name='topInfos' position={[0, 250, 25]}>
			<group name='seringes' position={[101.91, 0, -2.66]}>
				{seringeCircles.map(({ position }, index) => (
					<MeshComponent
						key={`seringeCircle-${index}`}
						geometry={nodes?.circle1.geometry}
						material={nodes?.circle1.material}
						meshPosition={position}
						meshRotation={[0, 0, Math.PI / 2]}
						meshScale={0.39}
						materialType='metallic'
						variant='gray'
					/>
				))}
				<MeshComponent
					geometry={nodes?.seringeBody.geometry}
					material={nodes?.seringeBody.material}
					meshPosition={[8.36, 0, 4.31]}
					meshRotation={[Math.PI / 2, Math.PI / 2, 0]}
					meshScale={0.39}
					materialType='metallic'
					variant='gray'
				/>
				{seringeTops.map(({ position }, index) => (
					<MeshComponent
						key={`seringeTop-${index}`}
						geometry={nodes?.seringeBodyTop.geometry}
						material={nodes?.seringeBodyTop.material}
						meshPosition={position}
						meshRotation={[-Math.PI / 2, -Math.PI / 2, 0]}
						meshScale={0.39}
						materialType='metallic'
						variant='gray'
					/>
				))}
				<MeshComponent
					geometry={nodes?.blood.geometry}
					material={nodes?.blood.material}
					meshPosition={[-9.45, 0, 4.31]}
					meshRotation={[Math.PI / 2, 0, Math.PI / 2]}
					meshScale={0.39}
					materialType='plastic'
					variant='redBloody'
				/>
				<MeshComponent
					geometry={nodes?.seringeBodyTube.geometry}
					material={nodes?.seringeBodyTube.material}
					meshPosition={[-3.14, 0, 4.31]}
					meshRotation={[Math.PI / 2, 0, Math.PI / 2]}
					meshScale={0.39}
					materialType='glass'
					variant='grayLight'
					glassThickness={1}
				/>
			</group>
			<group name='hourCoffin' position={[-92.27, 0, -2.63]}>
				<MeshComponent
					geometry={nodes?.hour.geometry}
					material={nodes?.hour.material}
					meshPosition={[-9.2, 0, -2.63]}
					materialType='plastic'
					variant='redBloody'
				/>
				<MeshComponent
					geometry={nodes?.coffin.geometry}
					material={nodes?.coffin.material}
					meshPosition={[14.95, 3.87, -2.37]}
					meshRotation={[0, 0, 2.44]}
					meshScale={1}
					materialType='plastic'
					variant='gray'
				/>
			</group>
		</group>
	);
};

export default Info;
