/** @format */
import FileMenu from './FileMenu';
import { Flex, Center, CloseButton, IconButton, Icon } from '@chakra-ui/react';
import { VscChromeClose, VscChromeMaximize, VscChromeRestore, VscChromeMinimize } from 'react-icons/vsc';
import { CrochetIcon } from 'icons';

export default function TitleBar(): JSX.Element {
	const handleClose = (e: any) => {
		window.electron.send('toMain');
	};

	window.electron.receive('fromMain', () => {
		console.log('got message from main');
	});

	return (
		<Flex id='file-menu-container' w='100%' h='36px' bg='gray.600' sx={{ WebkitAppRegion: 'drag', align: 'center' }}>
			<Flex align='center'>
				<CrochetIcon m='0 10px' w='26px' h='26px' />
				<FileMenu />
			</Flex>
			<Flex grow={1}>
				<Center w='100%'>FileNameHere - FolderNameHere - Crochet 1.0</Center>
			</Flex>
			{window.electron && (
				<Flex>
					<IconButton
						borderRadius='0px'
						w='36px'
						h='36px'
						variant='ghost'
						cursor='default'
						p='0px 25px'
						sx={{ WebkitAppRegion: 'no-drag' }}
						aria-label='Maximize'
						icon={<Icon as={VscChromeMinimize} />}
					/>
					<IconButton
						borderRadius='0px'
						w='36px'
						h='36px'
						variant='ghost'
						cursor='default'
						p='0px 25px'
						sx={{ WebkitAppRegion: 'no-drag' }}
						aria-label='Maximize'
						icon={<Icon as={VscChromeMaximize} />}
					/>
					<IconButton
						onClick={handleClose}
						borderRadius='0px'
						w='36px'
						h='36px'
						variant='ghost'
						cursor='default'
						p='0px 25px'
						_hover={{ bg: 'red' }}
						sx={{ WebkitAppRegion: 'no-drag' }}
						aria-label='Maximize'
						icon={<Icon as={VscChromeClose} />}
					/>
				</Flex>
			)}
		</Flex>
	);
}
