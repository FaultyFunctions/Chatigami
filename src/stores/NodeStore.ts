/** @format */

import { Store } from 'pullstate';

interface INodeStore {
	nodeList: Node[];
}

export const NodeStore = new Store<INodeStore>({
	nodeList: []
});

export class Node {
	index: number;
	title: string;
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;

	constructor(title: string, x: number, y: number) {
		const nodeStore = NodeStore.getRawState();

		this.index = nodeStore.nodeList.length;
		this.title = title;
		this.x = x;
		this.y = y;
		this.width = 240;
		this.height = 240;
		this.color = 'black';

		NodeStore.update(s => {
			s.nodeList.push(this);
		});
	}
}

new Node('Test', 0, 0);
