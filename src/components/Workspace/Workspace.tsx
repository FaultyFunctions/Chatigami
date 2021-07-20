/** @format */

import type Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import { clamp } from 'utilities/math';
import { WorkspaceStore } from 'stores/WorkspaceStore';
import WorkspaceGrid from 'components/Workspace/WorkspaceGrid';
import Node from 'components/Node';
import { useEffect } from 'react';

export default function Workspace(): JSX.Element {
	const { x, y, width, height, scale, gridEnabled } = WorkspaceStore.useState(s => ({
		x: s.x,
		y: s.y,
		scale: s.scale,
		width: s.width,
		height: s.height,
		gridEnabled: s.gridEnabled
	}));

	useEffect(() => {
		const workspaceContent = document.getElementById('workspace-content');
		if (workspaceContent !== null) {
			//console.log('Workspace', workspaceContent.getBoundingClientRect());
			WorkspaceStore.update(s => {
				s.width = workspaceContent.offsetWidth;
				s.height = workspaceContent.offsetHeight;
			});
		}
	}, []);

	const handleDrag = (e: Konva.KonvaEventObject<DragEvent>): void => {
		WorkspaceStore.update(s => {
			s.x = e.target.attrs.x;
			s.y = e.target.attrs.y;
		});
	};

	const scaleFactor = 0.1;
	const minScale = 0.1;
	const maxScale = 1;
	const handleZoom = (e: Konva.KonvaEventObject<WheelEvent>): void => {
		console.log(e.evt.offsetX);
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
	};

	return (
		<Stage
			name={'Workspace Stage'}
			width={width}
			height={height}
			x={x}
			y={y}
			draggable
			onDragMove={handleDrag}
			onWheel={handleZoom}
			style={{ backgroundColor: 'lightgray', overflow: 'hidden', width: '100%', height: '100%' }}
		>
			<Layer name={'Grid Layer'} id={'grid-layer'}>
				{gridEnabled && <WorkspaceGrid />}
			</Layer>
			<Layer name={'Node Layer'} id={'node-layer'} scale={{ x: scale, y: scale }}>
				<Node />
			</Layer>
		</Stage>
	);
}
