/** @format */

import MenuBarButton from './MenuBarButton';
import FileMenuList from './MenuLists/FileMenuList';
import EditMenuList from './MenuLists/EditMenuList';
import ViewMenuList from './MenuLists/ViewMenuList';
import HelpMenuList from './MenuLists/HelpMenuList';
import { Menu, useBoolean } from '@chakra-ui/react';
import { useState } from 'react';

export default function TitleBarMenus(): JSX.Element {
	const [lastOpenedButton, setLastOpenedButton] = useState<HTMLButtonElement>();
	const [menuOpen, setMenuOpen] = useBoolean(false);

	const handleHoverOpen = (e: any) => {
		if (menuOpen) {
			lastOpenedButton!.click();
			setLastOpenedButton(e.target);
			e.target.click();
		}
	};

	const handleClick = (e: any) => {
		setLastOpenedButton(e.target);
		setMenuOpen.on();
	};

	return (
		<>
			<Menu onOpen={setMenuOpen.on} onClose={setMenuOpen.off} offset={[0, 0]} placement='bottom-end' autoSelect={false}>
				<MenuBarButton onMouseEnter={handleHoverOpen} onClick={handleClick}>
					File
				</MenuBarButton>
				<FileMenuList />
			</Menu>
			<Menu onOpen={setMenuOpen.on} onClose={setMenuOpen.off} offset={[0, 0]} placement='bottom-end' autoSelect={false}>
				<MenuBarButton onMouseEnter={handleHoverOpen} onClick={handleClick}>
					Edit
				</MenuBarButton>
				<EditMenuList />
			</Menu>
			<Menu onOpen={setMenuOpen.on} onClose={setMenuOpen.off} offset={[0, 0]} placement='bottom-end' autoSelect={false}>
				<MenuBarButton onMouseEnter={handleHoverOpen} onClick={handleClick}>
					View
				</MenuBarButton>
				<ViewMenuList />
			</Menu>
			<Menu onOpen={setMenuOpen.on} onClose={setMenuOpen.off} offset={[0, 0]} placement='bottom-end' autoSelect={false}>
				<MenuBarButton onMouseEnter={handleHoverOpen} onClick={handleClick}>
					Help
				</MenuBarButton>
				<HelpMenuList />
			</Menu>
		</>
	);
}
