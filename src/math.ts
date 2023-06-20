export const sum = (a: number, b: number) => a + b;

export const divide = (a: number, b: number) => {
	if (b === 0) throw new Error('division by 0');

	return a / b;
};
