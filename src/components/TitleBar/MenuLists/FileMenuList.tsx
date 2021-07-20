/** @format */

import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';

export default function FileMenuList() {
	return (
		<MenuList borderRadius='0px'>
			<MenuItem command='Ctrl+N'>New File</MenuItem>
			<MenuDivider />
			<MenuItem command='Ctrl+O'>Open File...</MenuItem>
			<MenuItem command='Ctrl+Shift+O'>Open Folder...</MenuItem>
			<MenuDivider />
			<MenuItem command='Ctrl+S'>Save</MenuItem>
			<MenuItem command='Ctrl+Alt+Shift+S'>Save As...</MenuItem>
			<MenuItem command='Ctrl+Shift+S'>Save All</MenuItem>
		</MenuList>
	);
}
