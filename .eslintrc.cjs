module.exports = {
	env: {
		node: true,
		es2022: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict',
		'plugin:unicorn/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', 'tests/**/*'],
	},
	rules: {},
	ignorePatterns: [
		'node_modules',
		'coverage',
		'dist',
		'migrations',
		'*.cjs',
		'vitest.config.ts',
	],
};
