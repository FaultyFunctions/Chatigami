/** @format */

import { Store } from 'pullstate';

interface IWorkspaceStore {
	x: number;
	y: number;
	width: number;
	height: number;
	scale: number;
	gridEnabled: boolean;
	gridSize: number;
}

export const WorkspaceStore = new Store<IWorkspaceStore>({
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	scale: 1,
	gridEnabled: true,
	gridSize: 100
});

const resizeWorkspaceObserver = new ResizeObserver(elements => {
	for (let element of elements) {
		const rect = element.contentRect;
		WorkspaceStore.update(s => {
			s.width = rect.width;
			s.height = rect.height;
		});
	}
});

window.addEventListener('load', updateWorkspaceSize, { once: true });

function updateWorkspaceSize() {
	const workspaceContainer: HTMLElement = document.getElementById('workspace-container')!;
	resizeWorkspaceObserver.observe(workspaceContainer);
}
