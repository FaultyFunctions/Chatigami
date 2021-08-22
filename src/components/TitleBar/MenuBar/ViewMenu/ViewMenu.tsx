/** @format */

import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';

export default function ViewMenuList() {
	return (
		<MenuList borderRadius='0px'>
			<MenuItem>Show/Hide Explorer</MenuItem>
			<MenuItem>Redo</MenuItem>
			<MenuDivider />
			<MenuItem>Preferences</MenuItem>
		</MenuList>
	);
}
