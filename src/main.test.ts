import { greeter } from '@/main';
import { expect, test } from 'vitest';

test('Index', () => {
	const greeting = greeter('Test');

	expect(greeting).toBe('Hello, Test');

	expect(greeter('error')).not.toBe('Hello, Test');
});
