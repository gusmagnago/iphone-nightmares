import MeshComponent from '../MeshComponent/MeshComponent';
import { JackOLanternGLTFResult } from './JackOLantern.types';

const JackOLantern = ({
	position,
	rotation,
	scale,
	nodes,
}: ObjectI & JackOLanternGLTFResult) => {
	return (
		<group name='jack' position={position} rotation={rotation} scale={scale}>
			<group position={position}>
				<group name='topJack' position={[0.35, 18.51, -23.81]}>
					<MeshComponent
						geometry={nodes?.sphere.geometry}
						material={nodes?.sphere.material}
						meshPosition={[-0.06, 0.19, -0.16]}
						meshRotation={[-Math.PI / 2, 0, 0]}
						materialType='metallic'
						variant='greenEw'
					/>
					<MeshComponent
						geometry={nodes?.star.geometry}
						material={nodes?.star.material}
						meshPosition={[0, -3.79, 0]}
						meshRotation={[-Math.PI / 2, 0, 0]}
						materialType='metallic'
						variant='greenEw'
					/>
				</group>
				<MeshComponent
					geometry={nodes?.jackBody.geometry}
					material={nodes?.jackBody.material}
					meshPosition={[-0.08, -7, -23]}
					materialType='metallic'
					variant='orangePumpkins'
				/>
			</group>
		</group>
	);
};

export default JackOLantern;
