/** @format */
import MenuBar from './MenuBar';
import ControlButtonCluster from './ControlButtonCluster';
import { Flex, Center } from '@chakra-ui/react';
import { CrochetIcon } from 'icons';

export default function TitleBar(): JSX.Element {
	return (
		<Flex id='file-menu-container' w='100%' h='30px' bg='gray.500' sx={{ WebkitAppRegion: 'drag', align: 'center' }}>
			<Flex align='center'>
				<CrochetIcon m='10px 10px' w='16px' h='16px' />
				<MenuBar />
			</Flex>
			<Flex grow={1}>
				<Center w='100%'>FileNameHere - FolderNameHere</Center>
			</Flex>
			<ControlButtonCluster />
		</Flex>
	);
}
