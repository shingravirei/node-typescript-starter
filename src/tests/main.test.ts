import { Hello } from '../main.js';
import { describe, expect, it } from 'vitest';

describe('Hello', () => {
	it('it works', () => {
		expect(Hello('World!')).toBe('Hello, World!');
	});
});
