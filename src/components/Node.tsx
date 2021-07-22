/** @format */

// import { NodeStore, NodeObject } from 'stores/NodeStore';
import { WorkspaceStore } from 'stores/WorkspaceStore';
import type Konva from 'konva';
import { Rect } from 'react-konva';
import { stepify } from 'utilities/math';
import { KonvaEventObject, NodeConfig } from 'konva/lib/Node';
import { useRef, useState } from 'react';
import { sign } from 'crypto';
import { Vector2d } from 'konva/lib/types';

export default function Node(): JSX.Element {
	const { workspaceX, workspaceY, workspaceScale, gridEnabled, gridSize } = WorkspaceStore.useState(s => ({
		workspaceX: s.x,
		workspaceY: s.y,
		workspaceScale: s.scale,
		gridEnabled: s.gridEnabled,
		gridSize: s.gridSize
	}));

	const [prevPos, setPrevPos] = useState({
		x: 0,
		y: 0
	});

	const [offset, setOffset] = useState({
		x: 0,
		y: 0
	});

	const rectRef = useRef<Konva.Rect>(null);

	function handleDragStart(e: KonvaEventObject<DragEvent>): void {
		// const { x, y } = toWorkspaceCoords(e.evt.pageX, e.evt.pageY);

		// const rectX = rectRef.current!.x();
		// const rectY = rectRef.current!.y();

		// setOffset({
		// 	x: gridEnabled ? stepify(x - rectX, gridSize) : x - rectX,
		// 	y: gridEnabled ? stepify(y - rectY, gridSize) : y - rectY
		// });
		// setOffset(e.currentTarget.getRelativePointerPosition());
		setOffset({ x: 0, y: 0 });
	}

	// DOING: FIGURE OUT BETTER DRAG FUNCTION
	function handleDrag(e: Konva.KonvaEventObject<DragEvent>): void {
		e.cancelBubble = true;

		// const { deltaX, deltaY } = {
		// 	deltaX: e.currentTarget.x() - prevPos.x,
		// 	deltaY: e.currentTarget.y() - prevPos.y
		// };

		// setOffset({
		// 	x: offset.x + deltaX,
		// 	y: offset.y + deltaY
		// });

		// if (Math.abs(offset.x) > 50) {
		// 	e.currentTarget.x(e.currentTarget.x() + gridSize * Math.sign(offset.x));
		// 	setOffset({
		// 		x: 0,
		// 		y: offset.y
		// 	});
		// } else {
		// 	//e.currentTarget.x(prevPos.x);
		// }

		// // if (Math.abs(offset.y) > 50) {
		// // 	e.currentTarget.y(stepify(e.currentTarget.y() + 50, gridSize));
		// // 	setOffset({
		// // 		x: offset.x,
		// // 		y: 0
		// // 	});
		// // } else {
		// // 	e.currentTarget.y(prevPos.y);
		// // }

		// setPrevPos({
		// 	x: e.currentTarget.x(),
		// 	y: e.currentTarget.y()
		// });

		console.log(offset.x);

		// const pageX = e.evt.pageX;
		// const pageY = e.evt.pageY;

		// let { x, y } = toWorkspaceCoords(pageX, pageY);

		// x -= offset.x;
		// y -= offset.y;

		// const rectX = rectRef.current!.x();
		// const rectY = rectRef.current!.y();

		// let movedX = x - rectX;
		// let movedY = y - rectY;

		// e.currentTarget.setPosition({
		// 	x: stepify(rectX + movedX, gridSize),
		// 	y: stepify(rectY + movedY, gridSize)
		// });
	}

	function handleDragEnd(e: Konva.KonvaEventObject<DragEvent>): void {}

	return (
		<>
			<Rect
				ref={rectRef}
				width={200}
				height={200}
				cornerRadius={5}
				fill={'black'}
				draggable
				onDragStart={handleDragStart}
				onDragMove={handleDrag}
				onDragEnd={handleDragEnd}
			/>
		</>
	);
}

function toWorkspaceCoords(pageX: number, pageY: number) {
	const { x: workspaceX, y: workspaceY, scale, gridEnabled, gridSize } = WorkspaceStore.getRawState();

	return {
		x: gridEnabled ? stepify((pageX - workspaceX) / scale, gridSize) : (pageX - workspaceX) / scale,
		y: gridEnabled ? stepify((pageY - workspaceY) / scale, gridSize) : (pageY - workspaceY) / scale
	};
}
