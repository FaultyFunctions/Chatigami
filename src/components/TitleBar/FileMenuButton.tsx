/** @format */

import { MenuButton, Button, ThemeExtension, StyleProps, MenuButtonProps } from '@chakra-ui/react';
import type { ComponentWithAs } from '@chakra-ui/system';

export default function FileMenuButton({ children, ...props }: { children?: any; props?: any }): JSX.Element {
	const styles: StyleProps = {
		height: '36px',
		borderRadius: '0px',
		fontWeight: 'normal',
		padding: '0px 8px'
	};

	return (
		<MenuButton
			as={Button}
			size='md'
			cursor='default'
			variant='ghost'
			sx={{ ...styles, WebkitAppRegion: 'no-drag' }}
			_hover={{ background: 'white' }}
			{...props}
		>
			{children}
		</MenuButton>
	);
}
