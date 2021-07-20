/** @format */

import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';

export default function ViewMenuList() {
	return (
		<MenuList borderRadius='0px'>
			<MenuItem>Undo</MenuItem>
			<MenuItem>Redo</MenuItem>
			<MenuDivider />
			<MenuItem>Preferences</MenuItem>
		</MenuList>
	);
}
