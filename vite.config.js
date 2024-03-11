import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/routes/*.test.js', 'src/lib/*.test.js'],
        globals: true,
        environment: 'happy-dom',
	}
});
