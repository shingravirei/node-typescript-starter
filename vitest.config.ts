import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			reporter: ['html'],
			provider: 'v8',
			lines: 80,
			branches: 80,
			functions: 80,
			statements: 80,
		},
	},
});
