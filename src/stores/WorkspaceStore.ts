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
			// IF RUNNING FOR THE FIRST TIME, CENTER CANVAS ON (0, 0)
			if (s.width === 0 && s.height === 0) {
				s.x = rect.width * 0.5;
				s.y = rect.height * 0.5;
			}
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
