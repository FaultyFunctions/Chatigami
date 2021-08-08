/** @format */

import ShortcutModal from 'components/Modals/ShortcutModal';
import AboutModal from 'components/Modals/AboutModal';
import { MenuDivider, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function HelpMenuList() {
	const shortcutModal = useDisclosure();
	const aboutModal = useDisclosure();

	return (
		<MenuList borderRadius='0px'>
			<MenuItem>Syntax Reference</MenuItem>
			<MenuItem onClick={shortcutModal.onOpen}>Shortcuts Reference</MenuItem>
			<ShortcutModal isOpen={shortcutModal.isOpen} onClose={shortcutModal.onClose} />
			<MenuItem>Open Documentation</MenuItem>
			<MenuDivider />
			<MenuItem>View License</MenuItem>
			<MenuItem>Suggest a Feature</MenuItem>
			<MenuItem>Report Bug</MenuItem>

			<MenuDivider />
			<MenuItem command='Ctrl+Shift+I'>Toggle Developer Tools</MenuItem>
			<MenuDivider />
			<MenuItem onClick={aboutModal.onOpen}>About</MenuItem>
			<AboutModal isOpen={aboutModal.isOpen} onClose={aboutModal.onClose} />
		</MenuList>
	);
}
