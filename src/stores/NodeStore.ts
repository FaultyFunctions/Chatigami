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

	// DOING: Figure out how to create nodes and pass their data as props in Workspace

	constructor(title: string, x: number, y: number) {
		const nodeStore = NodeStore.getRawState();

		this.index = nodeStore.nodeList.length;
		this.title = title;
		this.x = x;
		this.y = y;
		this.width = 200;
		this.height = 200;
		this.color = 'black';

		NodeStore.update(s => {
			s.nodeList.push(this);
		});
	}
}
