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
		project: ['./tsconfig.json', 'testes/**/*'],
	},
	rules: {},
	ignorePatterns: [
		'node_modules',
		'dist',
		'migrations',
		'jest.config.js',
		'.eslintrc.js',
		'prettier.config.js',
		'tests',
	],
};
