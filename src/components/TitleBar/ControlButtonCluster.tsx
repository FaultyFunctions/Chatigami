/** @format */

import { Flex, IconButton, Icon, useBoolean } from '@chakra-ui/react';
import { VscChromeClose, VscChromeMaximize, VscChromeRestore, VscChromeMinimize } from 'react-icons/vsc';

export default function ControlButtonCluster() {
	const [maximized, setMaximized] = useBoolean(false);
	const [minimized, setMinimized] = useBoolean(false);
	const [minMouseOver, setMinMouseOver] = useBoolean(false);

	const handleClose = () => {
		window.close();
	};

	// Dumb stuff to make sure minimize button doesn't get stuck after a minimize
	const handleMinimize = (e: any): void => {
		setMinimized.on();
		setMinMouseOver.off();
		window.addEventListener(
			'focus',
			() => {
				setMinimized.off();
				setMinMouseOver.off();
			},
			{ once: true }
		);
		window.electron.minimize();
	};

	const handleMaximizeAndRestore = (e: any) => {
		if (maximized) {
			window.electron.restore();
		} else {
			window.electron.maximize();
		}
		setMaximized.toggle();
	};

	const defaultProps = {
		borderRadius: '0px',
		p: '0px 25px',
		cursor: 'default',
		w: '36px',
		h: '100%'
	};

	return (
		<>
			{window.electron && (
				<Flex>
					<IconButton
						onClick={handleMinimize}
						onMouseEnter={setMinMouseOver.on}
						onMouseLeave={setMinMouseOver.off}
						variant='disabled'
						sx={{ WebkitAppRegion: 'no-drag', bg: minMouseOver && !minimized ? 'white' : 'transparent' }}
						aria-label='Maximize'
						icon={<Icon as={VscChromeMinimize} />}
						{...defaultProps}
					/>
					<IconButton
						onClick={handleMaximizeAndRestore}
						variant='ghost'
						sx={{ WebkitAppRegion: 'no-drag' }}
						aria-label={maximized ? 'Restore' : 'Maximize'}
						icon={<Icon as={maximized ? VscChromeRestore : VscChromeMaximize} />}
						{...defaultProps}
					/>
					<IconButton
						onClick={handleClose}
						variant='ghost'
						_hover={{ bg: 'red' }}
						sx={{ WebkitAppRegion: 'no-drag' }}
						aria-label='Maximize'
						icon={<Icon as={VscChromeClose} />}
						{...defaultProps}
					/>
				</Flex>
			)}
		</>
	);
}
