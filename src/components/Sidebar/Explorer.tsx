/** @format */

import { Resizable, ResizableProps } from 're-resizable';
import { Box, BoxProps } from '@chakra-ui/react';

export default function Explorer(): JSX.Element {
	return (
		<Box as={Resizable} {...resizableProps} {...explorerProps}>
			FILE EXPLORER HERE
		</Box>
	);
}

const handleProps: BoxProps = {
	w: 3,
	h: '100%',
	sx: {
		float: 'right'
	},
	cursor: 'ew-resize',
	transitionDuration: '0.2s',
	_hover: {
		bg: 'gray.700',
		transitionDuration: '0.2s',
		transitionDelay: '0.2s'
	}
};

const handle = <Box {...handleProps}></Box>;

const resizableProps: Omit<ResizableProps, 'as'> = {
	defaultSize: { width: '345px', height: '100%' },
	minWidth: '200px',
	maxWidth: '80%',
	bounds: 'window',
	enable: {
		top: false,
		right: true,
		bottom: false,
		left: false,
		topRight: false,
		bottomRight: false,
		bottomLeft: false,
		topLeft: false
	},
	handleComponent: {
		right: handle
	},
	handleStyles: {
		right: {
			width: '10px'
		}
	}
};

const explorerProps: BoxProps = {
	sx: { position: 'absolute !important' },
	bg: 'gray.400',
	top: 30,
	left: 0,
	h: 'calc(100% - 30px) !important'
};
