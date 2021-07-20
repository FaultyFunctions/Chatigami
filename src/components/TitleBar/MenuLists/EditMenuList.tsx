/** @format */

import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';

export default function EditMenuList() {
	return (
		<MenuList borderRadius='0px'>
			<MenuItem command='Ctrl+Z'>Undo</MenuItem>
			<MenuItem command='Ctrl+Y'>Redo</MenuItem>
			<MenuDivider />
			<MenuItem>Find Node</MenuItem>
			<MenuItem>Find File</MenuItem>
			<MenuDivider />
			<MenuItem>Preferences</MenuItem>
		</MenuList>
	);
}
