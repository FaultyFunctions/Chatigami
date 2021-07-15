/** @format */

import { Store } from 'pullstate';

interface ICanvasStore {
	gridData: string;
	gridSize: number;
	gridX: number;
	gridY: number;
	scale: number;
}

export const CanvasStore = new Store<ICanvasStore>({
	gridData: '',
	gridSize: 20,
	gridX: 0,
	gridY: 0,
	scale: 1
});
