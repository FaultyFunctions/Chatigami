/** @format */

import { NumberSize, Resizable, ResizeCallback, ResizeDirection } from 're-resizable';
import { WorkspaceStore } from 'stores/WorkspaceStore';
import { useThrottledFn } from 'beautiful-react-hooks';
import { useState } from 'react';

export default function Explorer(): JSX.Element {
	return (
		<Resizable
			defaultSize={{ width: '345px', height: 'auto' }}
			minWidth='200px'
			maxWidth='80%'
			bounds='window'
			enable={{
				top: false,
				right: true,
				bottom: false,
				left: false,
				topRight: false,
				bottomRight: false,
				bottomLeft: false,
				topLeft: false
			}}
		>
			{/* <Flex id='explorer-container' w='345px' minWidth='345px' styles={{ resize: 'both' }}> */}
			EXPLORER
			{/* </Flex> */}
		</Resizable>
	);
}
