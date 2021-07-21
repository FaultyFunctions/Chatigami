/** @format */

import { Box } from '@chakra-ui/react';
import { useContext, MouseEvent } from 'react';
import { ContextMenuContext } from './ContextMenu';

type Props = {};

export const ContextMenuTrigger: React.FC<Props> = ({ children }) => {
	const { openMenu, setPosition } = useContext(ContextMenuContext);
	return (
		<Box
			onContextMenu={(event: MouseEvent) => {
				event.preventDefault();
				setPosition({ x: event.clientX, y: event.clientY });
				openMenu();
			}}
		>
			{children}
		</Box>
	);
};
