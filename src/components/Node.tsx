/** @format */

// import { NodeStore, NodeObject } from 'stores/NodeStore';
import { WorkspaceStore } from 'stores/WorkspaceStore';
import type Konva from 'konva';
import { Rect, Transformer } from 'react-konva';
import { stepify } from 'utilities/math';
import { useRef } from 'react';
import type { Box } from 'konva/lib/shapes/Transformer';

export default function Node(): JSX.Element {
	const { workspaceX, workspaceY, workspaceScale, gridEnabled, gridSize } = WorkspaceStore.useState(s => ({
		workspaceX: s.x,
		workspaceY: s.y,
		workspaceScale: s.scale,
		gridEnabled: s.gridEnabled,
		gridSize: s.gridSize
	}));

	const handleDrag = (e: Konva.KonvaEventObject<DragEvent>) => {
		const currentX = e.target.getAbsolutePosition().x;
		const currentY = e.target.getAbsolutePosition().y;
		// * I was trying to figure out how to improve dragging nodes around
		// const mouseOffsetX = e.evt.offsetX - currentX;
		// const mouseOffsetY = e.evt.offsetY - currentY;
		const scaledGridSize = gridSize * workspaceScale;
		e.target.setAbsolutePosition({
			x: gridEnabled ? stepify(currentX, scaledGridSize) + (workspaceX % scaledGridSize) : currentX,
			y: gridEnabled ? stepify(currentY, scaledGridSize) + (workspaceY % scaledGridSize) : currentY
		});
	};

	const rectRef = useRef<Konva.Rect>(null);
	const trRef = useRef<Konva.Transformer>(null);

	const handleClick = () => {
		if (trRef.current && rectRef.current) {
			trRef.current.nodes([rectRef.current]);
			trRef.current.getLayer()?.batchDraw();
		}
	};

	const handleResize = (oldBox: Box, newBox: Box): Box => {
		const scaledGridSize = gridSize * workspaceScale;

		const steppedMinimum = stepify(100, scaledGridSize);

		// DOING: MAKE RESIZING NOT JANK
		// TRYING TO SHRINK WIDTH
		if (newBox.width < oldBox.width) {
			return oldBox;
		}

		if (newBox.height < oldBox.height) {
			return oldBox;
		}

		if (gridEnabled) {
			if (newBox.width < steppedMinimum || newBox.height < steppedMinimum) {
				return oldBox;
			} else {
				newBox.width = stepify(newBox.width, scaledGridSize);
				newBox.height = stepify(newBox.height, scaledGridSize);
				return newBox;
			}
		}

		if (newBox.width < 100 || newBox.height < 100) {
			return oldBox;
		} else {
			return newBox;
		}
	};

	return (
		<>
			<Rect
				ref={rectRef}
				width={200}
				height={200}
				x={0}
				y={0}
				onClick={handleClick}
				cornerRadius={5}
				fill={'black'}
				draggable
				onDragMove={e => {
					e.cancelBubble = true;
					handleDrag(e);
				}}
			/>
			<Rect
				ref={rectRef}
				width={200}
				height={200}
				x={400}
				y={400}
				onClick={handleClick}
				cornerRadius={5}
				fill={'red'}
				draggable
				onDragMove={e => {
					e.cancelBubble = true;
					handleDrag(e);
				}}
			/>
			<Transformer
				ref={trRef}
				rotateEnabled={false}
				keepRatio={true}
				flipEnabled={false}
				borderEnabled={false}
				//enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
				boundBoxFunc={handleResize}
				onDragMove={e => (e.cancelBubble = true)}
			/>
		</>
	);
}
