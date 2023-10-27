import MeshComponent from '../../../../MeshComponent/MeshComponent';
import Floor from '../../../Floor/Floor';
import { ContactsGLTFResult } from '../../SecondRow.types';

const Camera = ({ position, nodes }: ObjectI & ContactsGLTFResult) => {
	const {
		contactsTitle,
		bookComCircle,
		bookComCStar,
		bookComBodySide,
		bookComBodyBar,
		bookComBodyBack,
		bookComBodyFront,
		floor,
	} = nodes;

	const renderBars = (yVal: number) => {
		const instancesVal = 10;
		const instanceDistance = 12;
		const originalXVal = -52.48;

		const instances = Array.from({ length: instancesVal }, (_, i) => {
			const newX = originalXVal + instanceDistance * i;

			return (
				<MeshComponent
					key={i}
					name={`bookComBodyBar_${i}`}
					geometry={bookComBodyBar.geometry}
					material={bookComBodyBar.material}
					meshPosition={[newX, yVal, -33]}
					meshScale={[3.72, 5.16, 2.52]}
				/>
			);
		});

		return <>{instances}</>;
	};

	return (
		<group name='contactsGroup' position={position}>
			<MeshComponent
				name='contactsTitle'
				geometry={contactsTitle.geometry}
				material={contactsTitle.material}
				meshPosition={[2, -30, 0]}
			/>
			<group name='bookComp' position={[0, 0, 15]}>
				<MeshComponent
					name='bookComCircle'
					geometry={bookComCircle.geometry}
					material={bookComCircle.material}
					meshPosition={[0, 0, 14]}
				/>
				<MeshComponent
					name='bookComCStar'
					geometry={bookComCStar.geometry}
					material={bookComCStar.material}
					meshPosition={[0, 0, 13]}
					meshRotation={[0, 0, -1.83]}
				/>
				<group
					name='bookComBody'
					position={[0.7, -18.18, -0.95]}
					scale={[0.27, 0.19, 0.4]}
				>
					<MeshComponent
						name='bookComBodySide'
						geometry={bookComBodySide.geometry}
						material={bookComBodySide.material}
						meshPosition={[61.51, 94.13, 0.38]}
						meshRotation={[0, Math.PI / 2, 0]}
						meshScale={[0.24, 0.99, 0.04]}
					/>
					<MeshComponent
						name='bookComBodySide1'
						geometry={bookComBodySide.geometry}
						material={bookComBodySide.material}
						meshPosition={[-64.9, 94.13, 0.38]}
						meshRotation={[0, Math.PI / 2, 0]}
						meshScale={[0.24, 0.99, 0.04]}
					/>
					{renderBars(171.92)}
					{renderBars(12.74)}
					<MeshComponent
						name='bookComBodyBack'
						geometry={bookComBodyBack.geometry}
						material={bookComBodyBack.material}
						meshPosition={[-2, 94.13, -33.17]}
						meshScale={[0.99, 0.99, 0.04]}
					/>
					<pointLight
						name='bookComLightGreen'
						castShadow
						intensity={1.28}
						decay={4}
						distance={158}
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-near={100}
						shadow-camera-far={100000}
						color='#93fe00'
						position={[1.1, 103.91, 2.35]}
						rotation={[0, -0.96, 0]}
						scale={[2.5, 5.16, 3.75]}
					/>
					<MeshComponent
						name='bookComBodyFront'
						geometry={bookComBodyFront.geometry}
						material={bookComBodyFront.material}
						meshPosition={[-2, 94.13, 35.59]}
						meshScale={[0.99, 0.99, 0.04]}
					/>
				</group>
			</group>
			<Floor
				position={[0, 0, 0]}
				geometry={floor.geometry}
				material={floor.material}
			/>
		</group>
	);
};

export default Camera;
