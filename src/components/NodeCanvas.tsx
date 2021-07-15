/** @format */

import { useEffect } from 'react';
import Konva from 'konva';
import { Stage, Layer, Path } from 'react-konva';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { clamp } from 'utilities/math';
import { CanvasStore } from 'stores/CanvasStore';

const NodeCanvas = () => {
	const { width: windowWidth, height: windowHeight } = useWindowDimensions();

	// TODO: REFACTOR LATER WITH PULLSTATE
	const gridData = CanvasStore.useState((s) => s.gridData);
	const scale = CanvasStore.useState((s) => s.scale);
	const gridX = CanvasStore.useState((s) => s.gridX);
	const gridY = CanvasStore.useState((s) => s.gridY);
	const gridSize = CanvasStore.useState((s) => s.gridSize);

	const handleDrag = (e: Konva.KonvaEventObject<DragEvent>) => {
		CanvasStore.update((s) => {
			s.gridX = e.target.attrs.x;
			s.gridY = e.target.attrs.y;
		});
	};

	const handleZoom = (e: Konva.KonvaEventObject<WheelEvent>): void => {
		let scrollFactor = 0.1;
		CanvasStore.update((s) => {
			s.scale = clamp(scale - scrollFactor * Math.sign(e.evt.deltaY), 1, 4);
		});
	};

	// UPDATE AND DRAW GRID
	useEffect(() => {
		CanvasStore.update((s) => {
			s.gridData = calculateGridString(gridX, gridY, windowWidth, windowHeight, scale, gridSize);
		});
	}, [scale, gridX, gridY, gridSize, windowWidth, windowHeight]);

	return (
		<Stage
			width={windowWidth}
			height={windowHeight}
			draggable
			onDragMove={handleDrag}
			onWheel={handleZoom}
			style={{ backgroundColor: 'LightGray' }}
		>
			<Layer>
				<Path data={gridData} stroke={'grey'} strokeWidth={1} />
			</Layer>
		</Stage>
	);
};

export default NodeCanvas;

const calculateGridString = (
	x: number,
	y: number,
	width: number,
	height: number,
	scale: number,
	size: number
): string => {
	let data: string = '';
	let scaledSize: number = size * scale;

	for (var i = 0; i <= width + scaledSize; i += scaledSize) {
		let offsetX: number = x % scaledSize;
		let xCoord: number = i - x + offsetX;
		let yCoord: number = -y;
		data = data.concat('M ' + xCoord + ' ' + yCoord + ' L ' + xCoord + ' ' + (yCoord + height));
	}

	for (var j = 0; j <= height + scaledSize; j += scaledSize) {
		let offsetY: number = y % scaledSize;
		let xCoord: number = -x;
		let yCoord: number = j - y + offsetY;
		data = data.concat('M ' + xCoord + ' ' + yCoord + ' L ' + (xCoord + width) + ' ' + yCoord);
	}

	return data;
};
