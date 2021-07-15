/** @format */

const Console = (prop) => (
	console[Object.keys(prop)[0]](...Object.values(prop)), null // ➜ React components must return something
);

export default Console;
