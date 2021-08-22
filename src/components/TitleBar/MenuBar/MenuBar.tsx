/** @format */

import MenuBarButton from './MenuBarButton';
import FileMenu from './FileMenu';
import EditMenu from './EditMenu';
import ViewMenu from './ViewMenu';
import HelpMenu from './HelpMenu';
import { Menu, MenuButtonProps, MenuProps, useBoolean } from '@chakra-ui/react';
import { useState } from 'react';

export default function TitleBarMenus(): JSX.Element {
	const [lastOpenedButton, setLastOpenedButton] = useState<HTMLButtonElement>();
	const [menuOpen, setMenuOpen] = useBoolean(false);

	function handleHoverOpen(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
		if (menuOpen) {
			if (lastOpenedButton) {
				lastOpenedButton.click();
			}
			setLastOpenedButton(e.currentTarget);
			e.currentTarget.click();
		}
	}

	function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
		setLastOpenedButton(e.currentTarget);
		setMenuOpen.on();
	}

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
				<FileMenu />
			</Menu>
			<Menu {...menuProps}>
				<MenuBarButton {...menuButtonProps}>Edit</MenuBarButton>
				<EditMenu />
			</Menu>
			<Menu {...menuProps}>
				<MenuBarButton {...menuButtonProps}>View</MenuBarButton>
				<ViewMenu />
			</Menu>
			<Menu {...menuProps}>
				<MenuBarButton {...menuButtonProps}>Help</MenuBarButton>
				<HelpMenu />
			</Menu>
		</>
	);
}
