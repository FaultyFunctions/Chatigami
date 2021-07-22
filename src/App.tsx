/** @format */

import TitleBar from 'components/TitleBar/TitleBar';
import Explorer from 'components/Explorer/Explorer';
import Workspace from 'components/Workspace/Workspace';
import { ContextMenu } from 'components/ContextMenu/ContextMenu';
import { ContextMenuTrigger } from 'components/ContextMenu/ContextMenuTrigger';
import { ContextMenuList } from 'components/ContextMenu/ContextMenuList';
import { ContextMenuItem } from 'components/ContextMenu/ContextMenuItem';
// import { ThemeSwitcherProvider, useThemeSwitcher } from 'react-css-theme-switcher';
// import { SettingsStore } from 'stores/SettingsStore';
import { Flex } from '@chakra-ui/react';
import './App.css';

export default function App(): JSX.Element {
	return (
		<>
			<Flex direction='column' h='100vh'>
				<TitleBar />
				<Flex flex='1' direction='row' bg='gray.400' minHeight='0'>
					<Flex id='workspace-container' grow={1} minWidth='0'>
						<Workspace />
					</Flex>
				</Flex>
			</Flex>
			<Explorer />
		</>
	);
}
