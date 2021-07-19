/** @format */

import Workspace from 'components/Workspace/Workspace';
import { ThemeSwitcherProvider, useThemeSwitcher } from 'react-css-theme-switcher';
import { SettingsStore } from 'stores/SettingsStore';
import { Flex } from '@chakra-ui/react';
import TitleBar from 'components/TitleBar/TitleBar';
import './App.css';

export default function App(): JSX.Element {
	return (
		<Flex direction='column' h='100vh' sx={{ outline: 'none' }}>
			<TitleBar />
			<Flex flex='1' direction='row' bg='gray.400' minHeight='0'>
				<Flex id='explorer-container' w='345px' minWidth='345px'>
					EXPLORER
				</Flex>
				<Flex id='workspace-container' grow={1} bg='blue.900' minWidth='0'>
					<Workspace />
				</Flex>
			</Flex>
		</Flex>
	);
}
