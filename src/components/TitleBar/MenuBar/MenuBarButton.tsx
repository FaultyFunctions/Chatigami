/** @format */

import {
	MenuButton,
	Button,
	StyleProps,
	ComponentWithAs,
	MenuButtonProps,
	forwardRef,
	ButtonProps
} from '@chakra-ui/react';

const MenuBarButton: ComponentWithAs<'button', MenuButtonProps> = forwardRef<MenuButtonProps, 'button'>(
	({ children, ...rest }, ref) => {
		const styles: StyleProps = {
			height: '100%',
			borderRadius: '0px',
			fontWeight: 'normal',
			padding: '0px 8px'
		};

		return (
			<MenuButton ref={ref} {...menuButtonProps} {...rest}>
				{children}
			</MenuButton>
		);
	}
);

export default MenuBarButton;

const menuButtonProps: ButtonProps = {
	as: Button,
	size: 'md',
	cursor: 'default',
	variant: 'ghost',
	sx: {
		height: '100%',
		borderRadius: '0px',
		fontWeight: 'normal',
		padding: '0px 8px',
		WebkitAppRegion: 'no-drag'
	},
	_hover: { bg: 'white' }
};
