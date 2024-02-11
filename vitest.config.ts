import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['test/**/*.test.{js,ts,jsx,tsx}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: './test/setup.ts',
	},
});
