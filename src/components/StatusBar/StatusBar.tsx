/** @format */

import { Box, BoxProps } from '@chakra-ui/layout';
import { WorkspaceStore } from 'stores/WorkspaceStore';

export default function StatusBar(): JSX.Element {
	const { mouseX, mouseY } = WorkspaceStore.useState();

	return (
		<Box {...statusBarProps}>
			<span>
				({mouseX}, {mouseY})
			</span>
		</Box>
	);
}

const statusBarProps: BoxProps = {
	sx: { position: 'absolute !important' },
	userSelect: 'none',
	color: 'gray.300',
	bg: 'gray.600',
	bottom: 0,
	left: 0,
	w: '100vw',
	h: '22px !important'
};
