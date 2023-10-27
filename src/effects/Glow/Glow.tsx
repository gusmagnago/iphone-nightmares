import { EffectComposer, Bloom } from '@react-three/postprocessing';

interface GlowEffect {
  luminanceThreshold: number;
  luminanceSmoothing: number;
  intensity: number;
}

const Glow = ({
	luminanceThreshold,
	luminanceSmoothing,
	intensity,
}: GlowEffect) => {
	return (
		<EffectComposer>
			<Bloom
				luminanceThreshold={luminanceThreshold}
				mipmapBlur
				luminanceSmoothing={luminanceSmoothing}
				intensity={intensity}
			/>
		</EffectComposer>
	);
};

export default Glow;
