import { Hello } from '@/main';
import { expect, test } from 'vitest';

test('Index', () => {
	const greeting = Hello('Test');

	expect(greeting).toBe('Hello, Test');

	expect(Hello('error')).not.toBe('Hello, Test');
});
