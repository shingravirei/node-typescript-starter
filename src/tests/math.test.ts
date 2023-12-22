import { describe, expect, test } from 'vitest';
import { divide, sum } from '../math.js';

describe('math', () => {
	test('sum', () => {
		expect(sum(1, 2)).toBe(3);
	});

	test('divide works', () => {
		expect(divide(10, 2)).toBe(5);
	});

	test('divide throws when divisor is 0', () => {
		expect(() => divide(10, 0)).toThrow('division by 0');
	});
});
