/** @format */

export function clamp(num: number, min: number, max: number): number {
	return Math.min(Math.max(num, min), max);
}

export function stepify(num: number, step_value: number) {
	return Math.round(num / step_value) * step_value;
}
