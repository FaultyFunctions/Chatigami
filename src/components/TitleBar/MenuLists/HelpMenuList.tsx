/** @format */

import ShortcutModal from 'components/Modals/ShortcutModal';
import { MenuDivider, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';

export default function HelpMenuList() {
	const shortcutModal = useDisclosure();

	return (
		<MenuList borderRadius='0px'>
			<MenuItem onClick={shortcutModal.onOpen}>Shortcuts Reference</MenuItem>
			<ShortcutModal isOpen={shortcutModal.isOpen} onClose={shortcutModal.onClose} />
			<MenuDivider />
			<MenuItem>Report Bug</MenuItem>
			<MenuDivider />
			<MenuItem command='Ctrl+Shift+I'>Toggle Developer Tools</MenuItem>
			<MenuDivider />
			<MenuItem>About</MenuItem>
		</MenuList>
	);
}
