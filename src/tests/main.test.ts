import { describe, expect, it } from 'vitest';
import { Hello } from '../main.js';

describe('Hello', () => {
	it('it works', () => {
		expect(Hello('World!')).toBe('Hello, World!');
	});
});
