import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';


// https://vitejs.dev/config/
export default defineConfig(() => {
	const config = {
		plugins: [react(), eslintPlugin()],
		base: '/',
		server : {
			port: 3000
		}
	};
	return config;
});