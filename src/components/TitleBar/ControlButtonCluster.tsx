/** @format */

import { Flex, IconButton, Icon, useBoolean, IconButtonProps } from '@chakra-ui/react';
import { VscChromeClose, VscChromeMaximize, VscChromeRestore, VscChromeMinimize } from 'react-icons/vsc';

export default function ControlButtonCluster() {
	const [maximized, setMaximized] = useBoolean(false);
	const [minimized, setMinimized] = useBoolean(false);
	const [minMouseOver, setMinMouseOver] = useBoolean(false);

	function handleClose(): void {
		window.close();
	}

	// Dumb stuff to make sure minimize button doesn't get stuck after a minimize
	function handleMinimize(): void {
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
	}

	function handleMaximizeAndRestore(): void {
		if (maximized) {
			window.electron.restore();
		} else {
			window.electron.maximize();
		}
		setMaximized.toggle();
	}

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
						{...baseControlButtonProps}
					/>
					<IconButton
						onClick={handleMaximizeAndRestore}
						variant='ghost'
						sx={{ WebkitAppRegion: 'no-drag' }}
						aria-label={maximized ? 'Restore' : 'Maximize'}
						icon={<Icon as={maximized ? VscChromeRestore : VscChromeMaximize} />}
						{...baseControlButtonProps}
					/>
					<IconButton
						onClick={handleClose}
						variant='ghost'
						_hover={{ bg: 'red' }}
						sx={{ WebkitAppRegion: 'no-drag' }}
						aria-label='Maximize'
						icon={<Icon as={VscChromeClose} />}
						{...baseControlButtonProps}
					/>
				</Flex>
			)}
		</>
	);
}

const baseControlButtonProps: Omit<IconButtonProps, 'aria-label'> = {
	borderRadius: '0px',
	p: '0px 25px',
	cursor: 'default',
	w: '36px',
	h: '100%'
};
