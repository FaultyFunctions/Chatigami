/** @format */

import type Konva from 'konva';
import Grid from 'components/Workspace/Grid';
import Node from 'components/Node';
import { Stage, Layer, StageProps } from 'react-konva';
import { clamp } from 'utilities/math';
import { WorkspaceStore } from 'stores/WorkspaceStore';
import { NodeStore } from 'stores/NodeStore';
import { KonvaEventObject } from 'konva/lib/Node';

export default function Workspace(): JSX.Element {
	const { x, y, width, height, scale, gridEnabled } = WorkspaceStore.useState(s => ({
		x: s.x,
		y: s.y,
		scale: s.scale,
		width: s.width,
		height: s.height,
		gridEnabled: s.gridEnabled
	}));

	function handleDrag(e: Konva.KonvaEventObject<DragEvent>): void {
		window.requestAnimationFrame(() => {
			WorkspaceStore.update(s => {
				s.x = e.currentTarget.position().x;
				s.y = e.currentTarget.position().y;
			});
		});
	}

	function handleZoom(e: Konva.KonvaEventObject<WheelEvent>): void {
		window.requestAnimationFrame(() => {
			const scaleFactor = 0.1;
			const minScale = 0.1;
			const maxScale = 1;

			WorkspaceStore.update(s => {
				// ADJUST SCALE
				const previousScale = s.scale;
				const scaleChange = -Math.sign(e.evt.deltaY) * scaleFactor * s.scale;

				s.scale = clamp(s.scale + scaleChange, minScale, maxScale);

				// ADJUST X & Y SO WE ZOOM IN AND OUT FROM MOUSE POSITION
				const mouseX = e.evt.offsetX - x;
				const mouseY = e.evt.offsetY - y;
				const newX = mouseX * (s.scale / previousScale);
				const newY = mouseY * (s.scale / previousScale);

				const deltaX = mouseX - newX;
				const deltaY = mouseY - newY;

				s.x += deltaX;
				s.y += deltaY;
			});
		});
	}

	// Updates mouse position for our status bar
	const handleMouseMove = function (e: KonvaEventObject<MouseEvent>): void {
		WorkspaceStore.update(s => {
			s.mouseX = Math.round(e.currentTarget.getRelativePointerPosition().x / scale);
			s.mouseY = Math.round(e.currentTarget.getRelativePointerPosition().y / scale);
		});
	};

	const workspaceStageProps: StageProps = {
		width: width,
		height: height,
		x: x,
		y: y,
		draggable: true,
		onDragMove: handleDrag,
		onWheel: handleZoom,
		onMouseMove: handleMouseMove,
		style: {
			backgroundColor: 'lightgray'
		}
	};

	// Grab all our nodes
	const { nodeList } = NodeStore.useState();
	const nodes = nodeList.map((node, index) => <Node node={node} key={index} />);

	return (
		<Stage {...workspaceStageProps}>
			<Layer id={'grid-layer'}>{gridEnabled && <Grid />}</Layer>
			<Layer id={'node-layer'} scale={{ x: scale, y: scale }}>
				{nodes}
			</Layer>
		</Stage>
	);
}
