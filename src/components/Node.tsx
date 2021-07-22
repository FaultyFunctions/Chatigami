/** @format */

// import { NodeStore, NodeObject } from 'stores/NodeStore';
import { WorkspaceStore } from 'stores/WorkspaceStore';
import type Konva from 'konva';
import { Rect } from 'react-konva';
import { stepify } from 'utilities/math';

export default function Node(): JSX.Element {
	const { workspaceX, workspaceY, workspaceScale, gridEnabled, gridSize } = WorkspaceStore.useState(s => ({
		workspaceX: s.x,
		workspaceY: s.y,
		workspaceScale: s.scale,
		gridEnabled: s.gridEnabled,
		gridSize: s.gridSize
	}));

	const handleDrag = (e: Konva.KonvaEventObject<DragEvent>) => {
		const currentX = e.currentTarget.getAbsolutePosition().x;
		const currentY = e.currentTarget.getAbsolutePosition().y;
		// * I was trying to figure out how to improve dragging nodes around
		// const mouseOffsetX = e.evt.offsetX - currentX;
		// const mouseOffsetY = e.evt.offsetY - currentY;
		const scaledGridSize = gridSize * workspaceScale;
		console.log(
			stepify(currentX, scaledGridSize) + (workspaceX % scaledGridSize),
			stepify(currentX + (workspaceX % scaledGridSize), scaledGridSize + (workspaceX % scaledGridSize))
		);

		e.currentTarget.setAbsolutePosition({
			x: gridEnabled ? stepify(currentX, scaledGridSize) + (workspaceX % scaledGridSize) : currentX,
			y: gridEnabled ? stepify(currentY, scaledGridSize) + (workspaceY % scaledGridSize) : currentY
		});
	};

	return (
		<>
			<Rect
				width={200}
				height={200}
				x={0}
				y={0}
				cornerRadius={5}
				fill={'black'}
				draggable
				onDragMove={e => {
					e.cancelBubble = true;
					handleDrag(e);
				}}
			/>
			<Rect
				width={200}
				height={200}
				x={400}
				y={400}
				cornerRadius={5}
				fill={'red'}
				draggable
				onDragMove={e => {
					e.cancelBubble = true;
					handleDrag(e);
				}}
			/>
		</>
	);
}
