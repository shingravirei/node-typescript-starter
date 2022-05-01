import { expect, test } from 'vitest';
import greeter from '../src/main';

test('Index', () => {
	const greeting = greeter('Test');

	expect(greeting).toBe('Hello, Test');

	expect(greeter('error')).not.toBe('Hello,Test');
});
