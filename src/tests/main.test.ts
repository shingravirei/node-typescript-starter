import { describe, expect, test } from 'vitest';
import { Hello } from '../main';

describe('Hello', () => {
	test('it works', () => {
		expect(Hello('World!')).toBe('Hello, World!');
	});
});
