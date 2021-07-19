/** @format */

import { Store } from 'pullstate';

interface INodeStore {
	nodeList: object[];
}

export const NodeStore = new Store<INodeStore>({
	nodeList: []
});

export class NodeObject {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}
