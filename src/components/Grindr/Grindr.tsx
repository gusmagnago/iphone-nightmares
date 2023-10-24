import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    grindrTitle: THREE.Mesh;
    grindrMaskIron: THREE.Mesh;
    grindrMaskRed: THREE.Mesh;
    grindrMaskEye: THREE.Mesh;
    grindrMaskShape: THREE.Mesh;
    grindrDollMouth: THREE.Mesh;
    grindrDollEye: THREE.Mesh;
    grindrDollBg: THREE.Mesh;
    grindrDollBody: THREE.Mesh;
    grindrDollChest: THREE.Mesh;
    grindrDollTit: THREE.Mesh;
    grindrDollShoeLeg: THREE.Mesh;
    grindrDollShoeBack: THREE.Mesh;
    grindrDollShoeFront: THREE.Mesh;
    grindrDollLegItem: THREE.Mesh;
    grindrDollBg1: THREE.Mesh;
    grindrDollBelly: THREE.Mesh;
  };
};

const Grindr = ({ position }: ObjectI) => {
	const { nodes } = useGLTF('./iphoneNightmares.gltf') as GLTFResult;

	return (
		<group name='grindrGroup' position={position}>
			<mesh
				name='grindrTitle'
				geometry={nodes.grindrTitle.geometry}
				material={nodes.grindrTitle.material}
				castShadow
				receiveShadow
				position={[5.01, -28.05, 0]}
			/>
			<group
				name='grindrChar'
				position={[0.11, 2.98, 37]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<group
					name='grindrMask'
					position={[0, 3.85, 2.72]}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<group name='grindrMaskIronGroup' position={[0.37, 5.64, -3.53]}>
						<mesh
							geometry={nodes.grindrMaskIron.geometry}
							material={nodes.grindrMaskIron.material}
							castShadow
							receiveShadow
							position={[-0.31, 4.8, -3.05]}
							rotation={[0, 0, 0]}
						/>
						<mesh
							geometry={nodes.grindrMaskIron.geometry}
							material={nodes.grindrMaskIron.material}
							castShadow
							receiveShadow
							position={[10.53, -5.01, -3.05]}
							rotation={[0, 0, 0]}
						/>
						<mesh
							name='grindrMaskIron2'
							geometry={nodes.grindrMaskIron.geometry}
							material={nodes.grindrMaskIron.material}
							castShadow
							receiveShadow
							position={[-10.53, -5.01, -3.05]}
							rotation={[0, 0, 0]}
						/>
					</group>
					<group name='grindrMaskRedGroup' position={[0.03, -2.64, -1.7]}>
						<mesh
							geometry={nodes.grindrMaskRed.geometry}
							material={nodes.grindrMaskRed.material}
							castShadow
							receiveShadow
							position={[5.97, -4.5, -0.89]}
							rotation={[0.29, -0.06, 0.68]}
							scale={1}
						/>
						<mesh
							geometry={nodes.grindrMaskRed.geometry}
							material={nodes.grindrMaskRed.material}
							castShadow
							receiveShadow
							position={[-5.68, -4.57, -0.89]}
							rotation={[0.29, -0.08, -0.62]}
							scale={1}
						/>
						<mesh
							geometry={nodes.grindrMaskRed.geometry}
							material={nodes.grindrMaskRed.material}
							castShadow
							receiveShadow
							position={[0, 6.18, 2.5]}
							rotation={[Math.PI, 0, 0]}
						/>
					</group>
					<group name='grindrMaskEyesGroup' position={[0.41, -1.26, -2.26]}>
						<mesh
							name='grindrMaskEye'
							geometry={nodes.grindrMaskEye.geometry}
							material={nodes.grindrMaskEye.material}
							castShadow
							receiveShadow
							position={[5, 0, 0]}
							rotation={[-Math.PI, 0, 2.84]}
						/>
						<mesh
							name='grindrMaskEye1'
							geometry={nodes.grindrMaskEye.geometry}
							material={nodes.grindrMaskEye.material}
							castShadow
							receiveShadow
							position={[-5, 0, 0]}
							rotation={[0, 0, -0.3]}
						/>
					</group>
					<mesh
						geometry={nodes.grindrMaskShape.geometry}
						material={nodes.grindrMaskShape.material}
						castShadow
						receiveShadow
						position={[-9.62, 12.65, -5.91]}
					/>
				</group>
				<group
					name='grindrDoll'
					position={[30.5, -18.57, 3.36]}
					scale={[0.76, 0.81, 0.9]}
				>
					<group
						name='grindrDollFaceComp'
						position={[-39.8, 13.89, 10.35]}
						scale={[1, 0.93, 1]}
					>
						<mesh
							name='grindrDollMouth'
							geometry={nodes.grindrDollMouth.geometry}
							material={nodes.grindrDollMouth.material}
							castShadow
							receiveShadow
							position={[0, 0, -0.4]}
							scale={[1, 0.3, 1]}
						/>
						<group
							name='grindrDollEyesGroup'
							position={[0, 2.29, 0]}
							scale={0.23}
						>
							<mesh
								name='grindrDollEye'
								geometry={nodes.grindrDollEye.geometry}
								material={nodes.grindrDollEye.material}
								castShadow
								receiveShadow
								position={[14.5, 0, 0]}
							/>
							<mesh
								name='grindrDollEye1'
								geometry={nodes.grindrDollEye.geometry}
								material={nodes.grindrDollEye.material}
								castShadow
								receiveShadow
								position={[-13.5, 0, 0]}
							/>
						</group>
						<mesh
							name='grindrDollBg'
							geometry={nodes.grindrDollBg.geometry}
							material={nodes.grindrDollBg.material}
							castShadow
							receiveShadow
							position={[0, 2.05, -1.13]}
							scale={[1, 1, 1.46]}
						/>
					</group>
					<group name='grindrDollBodyComp' position={[-39.8, 6.62, -0.09]}>
						<mesh
							name='grindrDollBody'
							geometry={nodes.grindrDollBody.geometry}
							material={nodes.grindrDollBody.material}
							castShadow
							receiveShadow
							position={[0, 0, -1.97]}
						>
							<mesh
								name='grindrDollChest'
								geometry={nodes.grindrDollChest.geometry}
								material={nodes.grindrDollChest.material}
								castShadow
								receiveShadow
								position={[0, -3.36, 12.01]}
								scale={[1, 0.92, 1.46]}
							>
								<group
									name='grindrDollChestGroup'
									position={[-0.05, 5.5, 0.42]}
								>
									<mesh
										name='grindrDollBelly'
										geometry={nodes.grindrDollBelly.geometry}
										material={nodes.grindrDollBelly.material}
										castShadow
										receiveShadow
										position={[-0.19, -7.25, -1.59]}
										rotation={[-0.34, 0.01, -0.02]}
										scale={[0.95, 0.96, 0.27]}
									/>
									<group name='grindrDollTitGroup' position={[-4.5, 0, 0]}>
										<mesh
											name='grindrDollTit'
											geometry={nodes.grindrDollTit.geometry}
											material={nodes.grindrDollTit.material}
											castShadow
											receiveShadow
											position={[-2.1, -2.15, 0.95]}
											rotation={[0.08, -0.29, 2.75]}
											scale={[0.81, 0.86, 1]}
										/>
										<mesh
											geometry={nodes.grindrDollTit.geometry}
											material={nodes.grindrDollTit.material}
											castShadow
											receiveShadow
											position={[0, 0, 0]}
											rotation={[-0.23, 0.01, -0.02]}
											scale={[0.95, 0.99, 0.36]}
										/>
									</group>
									<group name='grindrDollTitGroup1' position={[4.5, 0, 0]}>
										<mesh
											geometry={nodes.grindrDollTit.geometry}
											material={nodes.grindrDollTit.material}
											castShadow
											receiveShadow
											position={[2.54, -2.03, 0.83]}
											rotation={[0.36, 0.35, 0.29]}
											scale={[0.91, 0.8, 0.96]}
										/>
										<mesh
											geometry={nodes.grindrDollTit.geometry}
											material={nodes.grindrDollTit.material}
											castShadow
											receiveShadow
											position={[0, 0, 0]}
											rotation={[-0.23, 0.01, -0.02]}
											scale={[0.95, 0.99, 0.36]}
										/>
									</group>
								</group>
							</mesh>
						</mesh>
					</group>
					<group name='grindrDollLegs' position={[-39.09, -14.03, -0.32]}>
						<group
							name='grindrDollShoeGroup'
							position={[4.21, -4.5, -0.1]}
							rotation={[0, 0.77, 0]}
							scale={0.08}
						>
							<mesh
								name='grindrDollShoeLeg'
								geometry={nodes.grindrDollShoeLeg.geometry}
								material={nodes.grindrDollShoeLeg.material}
								castShadow
								receiveShadow
								position={[1.92, 30.08, -28.29]}
								rotation={[-Math.PI, -0.2, -Math.PI / 2]}
								scale={1}
							/>
							<group
								name='grindrDollShoe'
								position={[6.97, 9.85, 4.58]}
								rotation={[0, 0.64, 0]}
								scale={1}
							>
								<mesh
									name='grindrDollShoeBack'
									geometry={nodes.grindrDollShoeBack.geometry}
									material={nodes.grindrDollShoeBack.material}
									castShadow
									receiveShadow
									position={[0, -9.85, 0]}
									rotation={[-Math.PI / 2, 0, -2.01]}
								/>
								<mesh
									name='grindrDollShoeFront'
									geometry={nodes.grindrDollShoeFront.geometry}
									material={nodes.grindrDollShoeFront.material}
									castShadow
									receiveShadow
									position={[-28.22, 26.6, 61.9]}
									rotation={[2.73, -1.22, 2.24]}
									scale={1}
								/>
							</group>
							<group
								name='grindrDollShoe1'
								position={[31.37, 9.85, -10.39]}
								rotation={[0, 1.34, 0]}
								scale={1}
							>
								<mesh
									name='grindrDollShoeBack1'
									geometry={nodes.grindrDollShoeBack.geometry}
									material={nodes.grindrDollShoeBack.material}
									castShadow
									receiveShadow
									position={[0, -9.85, 0]}
									rotation={[-Math.PI / 2, 0, -2.01]}
								/>
								<mesh
									name='grindrDollShoeFront1'
									geometry={nodes.grindrDollShoeFront.geometry}
									material={nodes.grindrDollShoeFront.material}
									castShadow
									receiveShadow
									position={[-28.22, 26.6, 61.9]}
									rotation={[2.73, -1.22, 2.24]}
									scale={1}
								/>
							</group>
							<group name='grindrDollShoe2' position={[-20.55, 9.85, 1.72]}>
								<mesh
									name='grindrDollShoeBack2'
									geometry={nodes.grindrDollShoeBack.geometry}
									material={nodes.grindrDollShoeBack.material}
									castShadow
									receiveShadow
									position={[0, -9.85, 0]}
									rotation={[-Math.PI / 2, 0, -2.01]}
								/>
								<mesh
									name='grindrDollShoeFront2'
									geometry={nodes.grindrDollShoeFront.geometry}
									material={nodes.grindrDollShoeFront.material}
									castShadow
									receiveShadow
									position={[-28.22, 26.6, 61.9]}
									rotation={[2.73, -1.22, 2.24]}
									scale={1}
								/>
							</group>
						</group>
						<group
							name='grindrDollShoeGroup1'
							position={[-5.79, -4.5, -0.1]}
							rotation={[0, -0.77, 0]}
							scale={0.08}
						>
							<mesh
								name='grindrDollShoeLeg1'
								geometry={nodes.grindrDollShoeLeg.geometry}
								material={nodes.grindrDollShoeLeg.material}
								castShadow
								receiveShadow
								position={[1.92, 30.08, -28.29]}
								rotation={[-Math.PI, -0.2, -Math.PI / 2]}
								scale={1}
							/>
							<group
								name='grindrDollShoe3'
								position={[6.97, 9.85, 4.58]}
								rotation={[0, 0.64, 0]}
								scale={1}
							>
								<mesh
									name='grindrDollShoeBack3'
									geometry={nodes.grindrDollShoeBack.geometry}
									material={nodes.grindrDollShoeBack.material}
									castShadow
									receiveShadow
									position={[0, -9.85, 0]}
									rotation={[-Math.PI / 2, 0, -2.01]}
								/>
								<mesh
									name='grindrDollShoeFront3'
									geometry={nodes.grindrDollShoeFront.geometry}
									material={nodes.grindrDollShoeFront.material}
									castShadow
									receiveShadow
									position={[-28.22, 26.6, 61.9]}
									rotation={[2.73, -1.22, 2.24]}
									scale={1}
								/>
							</group>
							<group
								name='grindrDollShoe4'
								position={[31.37, 9.85, -10.39]}
								rotation={[0, 1.34, 0]}
								scale={1}
							>
								<mesh
									name='grindrDollShoeBack4'
									geometry={nodes.grindrDollShoeBack.geometry}
									material={nodes.grindrDollShoeBack.material}
									castShadow
									receiveShadow
									position={[0, -9.85, 0]}
									rotation={[-Math.PI / 2, 0, -2.01]}
								/>
								<mesh
									name='grindrDollShoeFront4'
									geometry={nodes.grindrDollShoeFront.geometry}
									material={nodes.grindrDollShoeFront.material}
									castShadow
									receiveShadow
									position={[-28.22, 26.6, 61.9]}
									rotation={[2.73, -1.22, 2.24]}
									scale={1}
								/>
							</group>
							<group name='grindrDollShoe5' position={[-20.55, 9.85, 1.72]}>
								<mesh
									name='grindrDollShoeBack5'
									geometry={nodes.grindrDollShoeBack.geometry}
									material={nodes.grindrDollShoeBack.material}
									castShadow
									receiveShadow
									position={[0, -9.85, 0]}
									rotation={[-Math.PI / 2, 0, -2.01]}
								/>
								<mesh
									name='grindrDollShoeFront5'
									geometry={nodes.grindrDollShoeFront.geometry}
									material={nodes.grindrDollShoeFront.material}
									castShadow
									receiveShadow
									position={[-28.22, 26.6, 61.9]}
									rotation={[2.73, -1.22, 2.24]}
									scale={1}
								/>
							</group>
						</group>
						<group name='grindrDollLegsGroup' position={[-0.71, 1.02, -1.74]}>
							<group
								name='grindrDollLegsItem'
								position={[0, 2.14, 0]}
								scale={[1, 0.62, 1]}
							>
								<mesh
									name='grindrDollLegItem'
									geometry={nodes.grindrDollLegItem.geometry}
									material={nodes.grindrDollLegItem.material}
									castShadow
									receiveShadow
									position={[-3.5, -0.63, 0]}
									rotation={[Math.PI, 0, 0]}
									scale={[1, 1.14, 1]}
								/>
								<mesh
									name='grindrDollLegItem1'
									geometry={nodes.grindrDollLegItem.geometry}
									material={nodes.grindrDollLegItem.material}
									castShadow
									receiveShadow
									position={[3.5, -0.63, 0]}
									rotation={[Math.PI, 0, 0]}
									scale={[1, 1.14, 1]}
								/>
							</group>
							<group
								name='grindrDollLegsItem1'
								position={[0, 4.02, 0]}
								scale={[1, 0.65, 1]}
							>
								<mesh
									name='grindrDollLegItem2'
									geometry={nodes.grindrDollLegItem.geometry}
									material={nodes.grindrDollLegItem.material}
									castShadow
									receiveShadow
									position={[-3.5, -0.63, 0]}
									rotation={[Math.PI, 0, 0]}
									scale={[1, 1.14, 1]}
								/>
								<mesh
									name='grindrDollLegItem3'
									geometry={nodes.grindrDollLegItem.geometry}
									material={nodes.grindrDollLegItem.material}
									castShadow
									receiveShadow
									position={[3.5, -0.63, 0]}
									rotation={[Math.PI, 0, 0]}
									scale={[1, 1.14, 1]}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
			<mesh
				name='grindrDollBg1'
				geometry={nodes.grindrDollBg1.geometry}
				material={nodes.grindrDollBg1.material}
				castShadow
				receiveShadow
			/>
		</group>
	);
};

export default Grindr;
