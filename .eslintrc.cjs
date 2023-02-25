module.exports = {
	env: {
		node: true,
		es2022: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
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
		'dist',
		'migrations',
		'*.cjs',
		'src/**/*.test.ts',
	],
};
