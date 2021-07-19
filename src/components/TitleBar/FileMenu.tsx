/** @format */

import { Flex, Menu, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import FileMenuButton from './FileMenuButton';

export default function FileMenu(): JSX.Element {
	return (
		<>
			<Menu offset={[0, 0]} placement='bottom-end'>
				<FileMenuButton>File</FileMenuButton>
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
			</Menu>
			<Menu offset={[0, 0]} placement='bottom-end'>
				<FileMenuButton>Edit</FileMenuButton>
				<MenuList borderRadius='0px'>
					<MenuItem command='Ctrl+Z'>Undo</MenuItem>
					<MenuItem command='Ctrl+Y'>Redo</MenuItem>
					<MenuDivider />
					<MenuItem>Find Node</MenuItem>
					<MenuItem>Find File</MenuItem>
					<MenuDivider />
					<MenuItem>Preferences</MenuItem>
				</MenuList>
			</Menu>
			<Menu offset={[0, 0]} placement='bottom-end'>
				<FileMenuButton>View</FileMenuButton>
				<MenuList borderRadius='0px'>
					<MenuItem>Undo</MenuItem>
					<MenuItem>Redo</MenuItem>
					<MenuDivider />
					<MenuItem>Preferences</MenuItem>
				</MenuList>
			</Menu>
			<Menu offset={[0, 0]} placement='bottom-end'>
				<FileMenuButton>Help</FileMenuButton>
				<MenuList borderRadius='0px'>
					<MenuItem>Shortcuts Reference</MenuItem>
					<MenuDivider />
					<MenuItem>Report Bug</MenuItem>
					<MenuDivider />
					<MenuItem>Toggle Developer Tools</MenuItem>
					<MenuDivider />
					<MenuItem>About</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
}
