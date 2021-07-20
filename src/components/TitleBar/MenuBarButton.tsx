/** @format */

import { MenuButton, Button, StyleProps, ComponentWithAs, MenuButtonProps, forwardRef } from '@chakra-ui/react';

const MenuBarButton: ComponentWithAs<'button', MenuButtonProps> = forwardRef<MenuButtonProps, 'button'>(
	({ children, ...rest }, ref) => {
		const styles: StyleProps = {
			height: '100%',
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
				ref={ref}
				{...rest}
			>
				{children}
			</MenuButton>
		);
	}
);

export default MenuBarButton;
