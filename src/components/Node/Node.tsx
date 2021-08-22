/** @format */

// import { NodeStore, NodeObject } from 'stores/NodeStore';
import { WorkspaceStore } from 'stores/WorkspaceStore';
import type Konva from 'konva';
import { Rect } from 'react-konva';
import { Node as NodeType } from 'stores/NodeStore';
import { useRef } from 'react';

export default function Node({ node }: { node: NodeType }): JSX.Element {
	const { workspaceX, workspaceY, workspaceScale, gridEnabled, gridSize } = WorkspaceStore.useState(s => ({
		workspaceX: s.x,
		workspaceY: s.y,
		workspaceScale: s.scale,
		gridEnabled: s.gridEnabled,
		gridSize: s.gridSize
	}));

	const nodeRef = useRef<Konva.Rect>(null);

	function handleDragBound(pos: Konva.Vector2d): Konva.Vector2d {
		if (gridEnabled) {
			let newX = nodeRef.current!.absolutePosition().x;
			let newY = nodeRef.current!.absolutePosition().y;
			let offsetX = pos.x - nodeRef.current!.absolutePosition().x;
			let offsetY = pos.y - nodeRef.current!.absolutePosition().y;

			let scaledGridSize = gridSize * workspaceScale;

			if (Math.abs(offsetX) >= scaledGridSize / 2) {
				newX = nodeRef.current!.absolutePosition().x + scaledGridSize * Math.sign(offsetX);
			}

			if (Math.abs(offsetY) >= scaledGridSize / 2) {
				newY = nodeRef.current!.absolutePosition().y + scaledGridSize * Math.sign(offsetY);
			}

			return {
				x: newX,
				y: newY
			};
		} else {
			return pos;
		}
	}

	function handleDrag(e: Konva.KonvaEventObject<DragEvent>): void {
		e.cancelBubble = true;
	}

	return (
		<Rect
			ref={nodeRef}
			x={node.x}
			y={node.y}
			width={node.width}
			height={node.height}
			cornerRadius={5}
			fill={node.color}
			draggable
			onDragMove={handleDrag}
			dragBoundFunc={handleDragBound}
		/>
	);
}
