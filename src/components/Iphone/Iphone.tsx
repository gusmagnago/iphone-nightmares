import MeshComponent from '../MeshComponent/MeshComponent';
import { IphoneGLTFResult } from './Iphone.types';

const Iphone = ({ nodes }: IphoneGLTFResult) => {
	return (
		<group name='iphone' position={[0, 0, 0]} >
			<group
				name='container'
				position={[0.1, 7.83, 4.12]}
				rotation={[0, 0, 0]}
				scale={1}
			>
				<group
					name='body'
					position={[10.63, 18.95, 0.83]}
					scale={[1.02, 1.02, 1.04]}
				>
					<MeshComponent
						name='screen'
						geometry={nodes?.screen.geometry}
						material={nodes?.screen.material}
						meshPosition={[-9.92, -19.34, 5]}
						meshScale={[0.97, 0.97, 0.96]}
						materialType='glass'
						variant='glass'
					/>
					<MeshComponent
						name='backScreen'
						geometry={nodes?.backScreen.geometry}
						material={nodes?.backScreen.material}
						meshPosition={[-10.12, -18.72, -1.5]}
						meshRotation={[-Math.PI, 0, -Math.PI]}
						meshScale={[-1.06, 1.06, 5]}
						materialType='metallic'
						variant='greenMold'
					/>
					<MeshComponent
						name='border'
						geometry={nodes?.border.geometry}
						material={nodes?.backScreen.material}
						meshPosition={[-10.12, -18.72, -8]}
						meshRotation={[-Math.PI, 0, -Math.PI]}
						meshScale={[-1.07, 1.07, 12]}
						materialType='metallic'
						variant='greenMold'
					/>
				</group>
			</group>
		</group>
	);
};

export default Iphone;
