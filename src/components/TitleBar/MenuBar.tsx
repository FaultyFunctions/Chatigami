/** @format */

import MenuBarButton from './MenuBarButton';
import FileMenuList from './MenuLists/FileMenuList';
import EditMenuList from './MenuLists/EditMenuList';
import ViewMenuList from './MenuLists/ViewMenuList';
import HelpMenuList from './MenuLists/HelpMenuList';
import { Menu, MenuButtonProps, MenuProps, useBoolean } from '@chakra-ui/react';
import { useState } from 'react';

export default function TitleBarMenus(): JSX.Element {
	const [lastOpenedButton, setLastOpenedButton] = useState<HTMLButtonElement>();
	const [menuOpen, setMenuOpen] = useBoolean(false);

	const handleHoverOpen: React.MouseEventHandler<HTMLButtonElement> = e => {
		if (menuOpen) {
			if (lastOpenedButton) {
				lastOpenedButton.click();
			}
			setLastOpenedButton(e.currentTarget);
			e.currentTarget.click();
		}
	};

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
		setLastOpenedButton(e.currentTarget);
		setMenuOpen.on();
	};

	const menuProps: Omit<MenuProps, 'children'> = {
		autoSelect: false,
		placement: 'bottom-end',
		offset: [0, 0],
		onOpen: setMenuOpen.on,
		onClose: setMenuOpen.off
	};

	const menuButtonProps: MenuButtonProps = {
		onMouseEnter: handleHoverOpen,
		onClick: handleClick
	};

	return (
		<>
			<Menu {...menuProps}>
				<MenuBarButton {...menuButtonProps}>File</MenuBarButton>
				<FileMenuList />
			</Menu>
			<Menu {...menuProps}>
				<MenuBarButton {...menuButtonProps}>Edit</MenuBarButton>
				<EditMenuList />
			</Menu>
			<Menu {...menuProps}>
				<MenuBarButton {...menuButtonProps}>View</MenuBarButton>
				<ViewMenuList />
			</Menu>
			<Menu {...menuProps}>
				<MenuBarButton {...menuButtonProps}>Help</MenuBarButton>
				<HelpMenuList />
			</Menu>
		</>
	);
}
