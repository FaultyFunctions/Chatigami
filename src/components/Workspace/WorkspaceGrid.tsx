/** @format */

import { memo } from 'react';
import { Path } from 'react-konva';
import { WorkspaceStore } from 'stores/WorkspaceStore';

export default function WorkspaceGrid(): JSX.Element {
	const { x, y, width, height, scale, gridSize } = WorkspaceStore.useState(s => ({
		x: s.x,
		y: s.y,
		width: s.width,
		height: s.height,
		scale: s.scale,
		gridSize: s.gridSize
	}));

	const gridData: string = calculateGridString(x, y, width, height, scale, gridSize);

	return <Path data={gridData} stroke={'grey'} strokeWidth={1} />;
}

function calculateGridString(x: number, y: number, width: number, height: number, scale: number, size: number): string {
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
}
